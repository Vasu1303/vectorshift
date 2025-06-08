import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { Brain } from "lucide-react";

export const LLMNode = ({ id, data }) => {
   const [inputType, setInputType] = useState(data.inputType || "ChatGPT");
   const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };
  return (
    <BaseNode
      id={id}
      data={data}
      label="LLM"
      inputs={[{ id: "system" }, { id: "prompt" }]}
      outputs={[{ id: "response" }]}
      icon={<Brain size={18} className="mr-2"/>}
      
    >
      <div className="flex flex-col gap-2">
         <span className="text-center italic">This is a LLM</span>
      <label className="flex flex-col">
          Model:
          <select
            value={inputType}
            className="border-[1px] outline-none border-slate-500/35 rounded px-2 py-1 mt-1 w-full"
            onChange={handleTypeChange}
          >
            <option value="ChatGPT">ChatGPT</option>
            <option value="Llama">Llama</option>
            <option value="Gemini">Gemini</option>
            <option value="Claude">Claude</option>
          </select>
        </label>


      </div>

     

    </BaseNode>
  );
};
