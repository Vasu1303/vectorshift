import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const TranslateNode = ({ id, data }) => {
  const languages = ["English", "Spanish", "French", "Hindi", "German"];
  const [currLan, setCurrLan] = useState(data?.language || languages[0]);
  const [text, setCurrText] = useState(data?.text || "Text");
  const handleLangChange = (e) => {
    setCurrLan(e.target.value);
  };
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Translate"
      inputs={[{ id: "text" }]}
      outputs={[{ id: "translated" }]}
      style={{ height: 120, minWidth: 200 }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
        <label>
          Language:
          <select value={currLan} onChange={handleLangChange}>
            {languages.map((language) => (
              <option value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
