import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { FileOutput } from "lucide-react";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Output"
      inputs={[{ id: "value" }]}
      
      icon={<FileOutput size={18} className="mr-2" />}
    >
      <div className="flex flex-col gap-2">
        <label className="flex flex-col">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="border border-slate-500/35 rounded px-2 py-1 mt-1 w-full outline-none" 
          />
        </label>
        <label className="flex flex-col">
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            className="border border-slate-500/35 rounded px-2 py-1 mt-1 w-full outline-none ml-0.5"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};