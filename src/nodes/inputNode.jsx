import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { FileInputIcon } from "lucide-react";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Input"
      outputs={[{ id: "output" }]}
      
      icon={<FileInputIcon size={18} className="mr-2" />}
    >
      <div className="flex flex-col gap-2">
        
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            value={currName}
            className="border-[1px] outline-none border-slate-500/35 rounded px-2 py-1 mt-1 w-full"
            onChange={handleNameChange}
          />
        </label>
        <label className="flex flex-col">
          Type:
          <select
            value={inputType}
            className="border-[1px] outline-none border-slate-500/35 rounded px-2 py-1 mt-1 w-full"
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
