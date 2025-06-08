import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { TranslateNode } from './newNodes/translateNode';
import { EmailValidationNode } from './newNodes/validationNode';
import { SummarizeNode } from './newNodes/summarizeNode';
import { DetectLanguageNode } from './newNodes/detectLanguageNode';
import { HashtagNode } from './newNodes/hashtagNode';
import { UpperCaseNode } from './newNodes/upperCaseNode';
import 'reactflow/dist/style.css';


const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  translate:TranslateNode,
  emailValidator: EmailValidationNode,
  summarizer:SummarizeNode,
  languageDetector:DetectLanguageNode,
  hashtag: HashtagNode,
  uppercase: UpperCaseNode,
  


};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: getInitNodeData(nodeID, type),
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <>
        <div ref={reactFlowWrapper} className='w-full h-[72vh] relative'>
            {nodes.length === 0 && (
              <div className="absolute -top-28 inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-lg shadow p-6 text-center">
                  <div className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-1">Add nodes to start</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Drag a node from the toolbar above to begin building your workflow.</div>
                </div>
              </div>
            )}
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                snapGrid={[gridSize, gridSize]}
                connectionLineType='smoothstep'
            >
                <Background color="#888a89" gap={gridSize} />
                <Controls />
                <MiniMap nodeStrokeWidth={3}  />
            </ReactFlow>
        </div>
        </>
    )
}
