from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from collections import defaultdict

app = FastAPI()

origins = [
    "http://localhost:5173",
    "localhost:3000",
    "http://localhost:8000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class Edge(BaseModel):
    source: str
    target: str

class Node(BaseModel):
    id: str

class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: PipelineRequest):
    print("Received request:", pipeline.dict()) 
    

    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag = check_if_dag(edges)

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }

def check_if_dag(edges):
    graph = defaultdict(list)
    for edge in edges:
        graph[edge.source].append(edge.target)

    visited = set()
    rec_stack = set()

    def dfs(node):
        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True

        rec_stack.remove(node)
        return False

    for node in list(graph):
        if node not in visited:
            if dfs(node):
                return False  

    return True
