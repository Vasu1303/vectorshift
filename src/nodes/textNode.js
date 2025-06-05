

import { useEffect, useState } from 'react';

import { BaseNode } from '../components/BaseNode';
import TextareaAutosize from 'react-textarea-autosize';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [variables, setVariables]=useState([]);

  useEffect(()=>{
    const detectVariables = (text) =>{
      const regex = /\{\{([^}]+)\}\}/g;
      const matches = text.match(regex) || [];

      const vars = matches.map(match=>match.slice(2,-2).trim());

      return [...new Set(vars)];
    };

    const foundVars = detectVariables(currText);
    setVariables(foundVars);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };
  

  return (
    <BaseNode 
      id={id}
      data={data}
      label="Text"
      inputs={variables.map(varName => ({id:varName}))}
      outputs={[{id:'output'}]}
      style={{
        minHeight:80,
        minWidth:200,
        height:'auto',
        width:'auto'
      }}
    >
      <label>
        Text:
        <TextareaAutosize placeholder='Enter your text here' value={currText}  minRows={2}
      maxRows={10} style={{width:'100%',fontSize: '14px', resize: 'none', overflow: 'hidden'}} onChange={handleTextChange} />
      </label>
      {variables.length > 0 && (
        <div style={{fontSize:'12px', color:'gray'}}>
          Detected Variables: {variables.join(', ')}

        </div>
      )}
    
    </BaseNode>
  );
}
