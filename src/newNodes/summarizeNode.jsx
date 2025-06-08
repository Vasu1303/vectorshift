import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { FileText } from "lucide-react";

import TextareaAutosize from "react-textarea-autosize";

export const SummarizeNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [level, setLevel] = useState(data?.level || "Short");
  const [isProcessing, setIsProcessing] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
  };

  const handleLevelChange = (e) => {
    const newLevel = e.target.value;
    setLevel(newLevel);
  };

  const handleSummarize = async () => {
    setIsProcessing(true);
    try {
      // We can later add any kind of summarize logic here
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Summarizer"
      inputs={[{ id: "text" }]}
      outputs={[{ id: "summary" }]}
      icon={<FileText size={18} />}
    >
      <div className="flex flex-col gap-2">
        <label>
          Text:
          <TextareaAutosize
            placeholder="Enter your text here..."
            value={text}
            minRows={2}
            maxRows={10}
            className="w-full max-h-[250px] resize-none text-sm outline-none  overflow-hidden border border-slate-300  rounded overflow-y-auto  p-2 mt-1"
            onChange={handleTextChange}
          />
          <span className="text-xs text-gray-600" >
            {charCount} characters
          </span>
        </label>
        <label className="flex flex-col">
          Summary Level:
          <select
            value={level}
            onChange={handleLevelChange}
            className="border-[1px] outline-none border-slate-500/35 rounded px-2 py-1 mt-1 w-full"
          >
            <option value="Short">Short</option>
            <option value="Medium">Medium</option>
            <option value="Long">Long</option>
          </select>
        </label>
        {isProcessing && (
          <div className="text-md">
            Generating summary...
          </div>
        )}
      </div>
    </BaseNode>
  );
};
