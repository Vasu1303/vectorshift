import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const SummarizeNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [level, setLevel] = useState(data?.level || 'Short');
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
      style={{
        height: 180, 
        width: 250,
        backgroundColor: isProcessing ? '#f5f5f5' : 'white'
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          Text:
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Enter or Paste your text here.."
            style={{ 
              width: "90%", 
              padding: "4px", 
              fontSize: "14px",
              marginRight:"4px"
              
            }}
            rows={4}
          />
          <span style={{ fontSize: '11px', color: 'gray' }}>
            {charCount} characters
          </span>
        </label>
        <label>
          Summary Level:
          <select 
            value={level} 
            onChange={handleLevelChange}
            style={{ marginLeft: '4px' }}
          >
            <option value="Short">Short</option>
            <option value="Medium">Medium</option> 
            <option value="Long">Long</option>
          </select>
        </label>
        {isProcessing && (
          <div style={{ fontSize: '12px', color: 'blue' }}>
            Generating summary...
          </div>
        )}
      </div>
    </BaseNode>
  );
};
