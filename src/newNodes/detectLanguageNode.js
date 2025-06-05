import { useState } from "react"
import { BaseNode } from "../components/BaseNode";

export const DetectLanguageNode = ({id, data})=>{
    const [text, setText]= useState('');
    const [processing, setProcessing] = useState(false);
    

    const handleTextChange = (e)=>{
        const newText = e.target.value;
        setText(newText);

    }
  

    return(
        <BaseNode
            id={id}
            data={data}
            label="Detect Language"
            inputs={[{id:'text'}]}
            outputs={[{id:'language'}]}
            style={{height:180, width:250}}

        >
            <div style={{display:'flex', flexDirection:'column', gap:'8px' }}>
                <label style={{display:'flex', flexDirection:'column' }}>
                    Text:
                    <textarea value={text} rows={5} onChange={handleTextChange} />

                </label>
                <button  >
                    Detect
                </button>


            </div>
        </BaseNode>
    )
    
}
