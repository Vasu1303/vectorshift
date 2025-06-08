import { useState } from "react";
import {Info} from "lucide-react"

export const DraggableNode = ({ type, label, icon }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getDescription = (type) => {
    const descriptions = {
      customInput: "Input node for accepting text or file inputs",
      customOutput: "Output node for displaying results",
      llm: "Large Language Model node for AI processing",
      text: "Text manipulation and processing node",
      translate: "Translates text to different languages",
      emailValidator: "Validate email addresses",
      summarizer: "Generate text summaries",
      languageDetector: "Detect text language",
      hashtag: "Generate hashtags from text",
      
    };
    return descriptions[type] || "Processing node";
  };

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`
        relative
        ${type} 
        cursor-grab 
        min-w-[80px] 
        max-w-[125px] 
        h-[80px] 
        flex 
        flex-col 
        gap-1 
        items-center 
        justify-center 
        rounded-lg 
        border-[1px] 
        border-[#1C2536] 
        hover:border-blue-400
        bg-white
        hover:bg-gradient-to-br
        hover:from-slate-50
        hover:to-slate-100
        text-center 
        p-2
        text-sm
        shadow-lg
        hover:shadow-2xl
        transform
        transition-all
        duration-300
        ease-in-out
        hover:scale-100
        hover:-translate-y-0.5
        group
        hover:ring-2
        hover:ring-blue-100
      `}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="transform transition-all duration-300 group-hover:scale-110 text-gray-800 group-hover:text-blue-600">
        {icon}
      </span>
      <span className="font-medium text-gray-700 transform transition-all duration-300 group-hover:text-blue-600 group-hover:font-semibold">
        {label}
      </span>
      {showTooltip && (
        <div className="flex gap-2   absolute left-1/2 -translate-x-1/2 top-[90px] z-50 bg-gray-200 text-gray-700 px-3 py-1.5 min-w-[160px] rounded-md shadow text-xs font-normal max-w-[180px] whitespace-pre-line pointer-events-none">
          <div className="">

          <Info size={14}/>
          </div>
          <span>
          
          {getDescription(type)}
          </span>
        </div>
      )}
    </div>
  );
};
