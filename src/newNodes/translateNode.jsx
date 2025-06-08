import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { LanguagesIcon } from "lucide-react";

export const TranslateNode = ({ id, data }) => {
  const languages = ["English", "Spanish", "French", "Hindi", "German"];
  const [currLan, setCurrLan] = useState(data?.language || languages[1]);
  const [text, setCurrText] = useState(data?.text );
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
      icon={<LanguagesIcon size={18}  />}
      
    >
      <div className="flex flex-col gap-2">
        <label className="flex flex-col">
          Text:
          <input type="text" placeholder="Enter Text.." className="border-[1px]  outline-none border-slate-500/35 rounded px-2 py-1 mt-1 w-full" value={text} onChange={handleTextChange} />
        </label>
        <label className="flex flex-col">
          Language:
          <select value={currLan}  className="border-[1px] outline-none border-slate-500/35 rounded px-2 py-1 mt-1 w-full" onChange={handleLangChange}>
            {languages.map((language) => (
              <option  value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
