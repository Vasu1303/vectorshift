
import { DraggableNode } from './draggableNode';
const NODE_TYPES = [
  { type: 'customInput', label: 'Input' },
  { type: 'llm', label: 'LLM' },
  { type: 'customOutput', label: 'Output' },
  { type: 'text', label: 'Text' },
  {type: 'translate', label: 'Translate'},
  {type: 'emailValidator', label:  'Email Validation'},
  {type:'summarizer', label:'Summarizer'},
  {type:'languageDetector', label:'Language Detection'},
   { type: 'hashtag', label: 'Hashtag Generator' },
  

  
];

export const PipelineToolbar = () => {


    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {NODE_TYPES.map(({type, label})=>(
                    <DraggableNode
                        key={type}
                        type={type}
                        label={label}
                    />
                ))}
                
             
               
               
                
            </div>
        </div>
    );
};
