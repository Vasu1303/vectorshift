import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

function getInitialState() {
  let nodes = [];
  let edges = [];
  let nodeIDs = {};
  try {
    nodes = JSON.parse(localStorage.getItem("nodes")) || [];
    edges = JSON.parse(localStorage.getItem("edges")) || [];
    nodeIDs = JSON.parse(localStorage.getItem("nodeIDs")) || {};
  } catch {}
  return { nodes, edges, nodeIDs };
}

function saveToLocalStorage(nodes, edges, nodeIDs) {
  localStorage.setItem("nodes", JSON.stringify(nodes));
  localStorage.setItem("edges", JSON.stringify(edges));
  localStorage.setItem("nodeIDs", JSON.stringify(nodeIDs));
}

export const useStore = create((set, get) => ({
  ...getInitialState(),
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    saveToLocalStorage(get().nodes, get().edges, newIDs);
    return `${type}-${newIDs[type]}`;
  },
  addNode: (node) => {
    const nodes = [...get().nodes, node];
    set({ nodes });
    saveToLocalStorage(nodes, get().edges, get().nodeIDs);
  },
  onNodesChange: (changes) => {
    const nodes = applyNodeChanges(changes, get().nodes);
    set({ nodes });
    saveToLocalStorage(nodes, get().edges, get().nodeIDs);
  },
  onEdgesChange: (changes) => {
    const edges = applyEdgeChanges(changes, get().edges);
    set({ edges });
    saveToLocalStorage(get().nodes, edges, get().nodeIDs);
  },
  onConnect: (connection) => {
    const edges = addEdge(
      {
        ...connection,
        type: "smoothstep",
        animated: true,
        markerEnd: { type: MarkerType.Arrow, height: "20px", width: "20px" },
      },
      get().edges
    );
    set({ edges });
    saveToLocalStorage(get().nodes, edges, get().nodeIDs);
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = { ...node.data, [fieldName]: fieldValue };
      }
      return node;
    });
    set({ nodes });
    saveToLocalStorage(nodes, get().edges, get().nodeIDs);
  },
}));
