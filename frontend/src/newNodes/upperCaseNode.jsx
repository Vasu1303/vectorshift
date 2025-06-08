import { BaseNode } from "@/components/BaseNode"
import { useState } from "react"

export const UpperCaseNode = ({id, data}) =>{
    const [text, setText] = useState("")

    const handleTextChange= (e) =>{
        setText(e.target.value);

    }
    return (

        <BaseNode
         id={id}
         data={data}
         label="Upper Case"
         inputs={[{id:"text"}]}
         outputs={[{id:"upper"}]}
        >
            <label className="flex flex-col gap-2" >
                Text: 
                <input value={text} type="text"  className="border-[1px] outline-none border-slate-500/35 rounded px-2 py-1 mt-1 w-full" onChange={handleTextChange} />
            </label>
            <label className="flex flex-col gap-2 mt-2" >
                Output:
                <p>{text.toUpperCase()}</p>

            </label>
        
        </BaseNode>
    )
}