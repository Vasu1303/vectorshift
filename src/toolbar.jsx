import { DraggableNode } from "./draggableNode";
import { NODE_CONFIG } from "./config/nodeIcons";

export const PipelineToolbar = () => {
  return (
    <div className="bg-slate-50 border-[1px] border-slate-200 p-1  w-full mb-2   rounded-lg ">
      <div className="m-3 flex flex-wrap gap-3">
        {NODE_CONFIG.map(({ type, label, icon: Icon, color }) => (
          <DraggableNode
            key={type}
            type={type}
            label={label}
            icon={<Icon size={18} color={color} />}
          />
        ))}
      </div>
    </div>
  );
};
