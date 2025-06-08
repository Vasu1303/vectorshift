import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { Hash } from "lucide-react";

import TextareaAutosize from "react-textarea-autosize";

export const HashtagNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [minLength, setMinLength] = useState(3);
  const [hashtagCount, setHashtagCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    const words = newText.split(" ").filter((word) => word.length >= minLength);
    setHashtagCount(words.length);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Hashtag Generator"
      inputs={[{ id: "text" }]}
      outputs={[{ id: "hashtags" }]}
      icon={<Hash size={18} />}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          Text:
          <TextareaAutosize
            placeholder="Enter your text here..."
            value={text}
            minRows={2}
            maxRows={5}
            className="w-full max-h-[250px] resize-none text-sm outline-none  overflow-hidden border border-slate-300  rounded overflow-y-auto  p-2 mt-1"
            onChange={handleTextChange}
          />
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <label className="flex gap-2">
            Min Length:
            <input
              type="number"
              min={2}
              max={10}
              value={minLength}
              onChange={(e) => setMinLength(Number(e.target.value))}
              className="border-[1px] outline-none border-slate-500/35 rounded "
            />
          </label>
          <span style={{ fontSize: "12px", color: "gray" }}>
            {hashtagCount} potential hashtags
          </span>
        </div>
      </div>
    </BaseNode>
  );
};
