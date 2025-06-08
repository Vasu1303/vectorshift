import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { Globe, Loader2 } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

export const DetectLanguageNode = ({ id, data }) => {
  const [text, setText] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDetect = async () => {
    if (!text.trim()) return;
    setProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setProcessing(false);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Detect Language"
      inputs={[{ id: "text" }]}
      outputs={[{ id: "language" }]}
      icon={<Globe size={18} className="mr-2" />}
    >
      <div className="flex flex-col gap-2">
        <label>
          Text:
          <TextareaAutosize
            placeholder="Enter your text here..."
            value={text}
            minRows={2}
            maxRows={5}
            className="w-full max-h-[250px] resize-none text-sm outline-none overflow-y-auto border border-slate-300 rounded p-2 mt-1"
            onChange={handleTextChange}
            disabled={processing}
          />
        </label>
        <button
          onClick={handleDetect}
          disabled={processing || !text.trim()}
          className="flex items-center justify-center gap-2 border-[1px] border-slate-400   bg-slate-200 rounded hover:bg-slate-300 disabled:bg-slate-100 "
        >
          {processing ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Detecting</span>
            </>
          ) : (
            "Detect"
          )}
        </button>
      </div>
    </BaseNode>
  );
};
