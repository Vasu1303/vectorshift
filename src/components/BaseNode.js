import { Handle, Position } from "reactflow";

//This is the Abstraced Node I Made

export const BaseNode = ({
  id,
  data,
  label,
  width = 200,
  height = 80,
  inputs = [],
  outputs = [],
  children,
  style = {},
}) => {
  const defaultStyle = {
    width, 
    height, 
    border: '1px solid black',
    padding: '10px',
    ...style
  };

  return (
    <div style={defaultStyle}>
      {inputs.map((input, index)=>(
        <Handle key={`input-${index}`}
        type="target"
        position={Position.Left}
        id={`${id}-${input.id}`}
        style={{top: `${((index+1)*100)/(inputs.length +1)}%`}} 
        />
      ))}

      <div style={{marginBottom: '8px'}}>
        <span style={{fontWeight: 'bold'}}>{label}</span>
      </div>

      <div>{children}</div>

      {outputs.map((output, index)=>(
        <Handle 
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{top:`${((index+1)*100) / (outputs.length +1)}%`}}
        />
      ))}

    </div>
  )
};
