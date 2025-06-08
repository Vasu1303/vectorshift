import { useEffect, useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { FileType } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const detectVariables = (text) => {
      const regex = /\{\{([^}]+)\}\}/g;
      const matches = text.match(regex) || [];

      const vars = matches.map((match) => match.slice(2, -2).trim());

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
      inputs={variables.map((varName) => ({ id: varName }))}
      outputs={[{ id: "output" }]}
      icon={<FileType size={18} className="mr-2" />}
      className="min-h-[80px] min-w-[200px] h-auto  w-auto"
    >
      <div className="flex flex-col gap-2">
        <label>
          Text:
          <TextareaAutosize
            placeholder="Enter your text here"
            value={currText}
            minRows={2}
            maxRows={10}
            className="w-full max-h-[250px] resize-none text-sm outline-none  overflow-hidden border border-slate-300  rounded overflow-y-auto  p-2 mt-1"
            onChange={handleTextChange}
          />
        </label>
        {variables.length > 0 && (
          <div className="text-xs text-gray-500">
            Detected Variables: {variables.join(", ")}
          </div>
        )}
      </div>
    </BaseNode>
  );
};
