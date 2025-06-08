import { Handle, Position } from "reactflow";
import { X } from "lucide-react";
import { useStore } from "../store";

export const BaseNode = ({
  id,
  data,
  label,
  inputs = [],
  outputs = [],
  icon,
  children,
  className = "",
}) => {
  const onNodesChange = useStore((state) => state.onNodesChange);
  const onEdgesChange = useStore((state) => state.onEdgesChange);
  const edges = useStore((state) => state.edges);

  const isInputConnected = (handleId) =>
    edges.some(
      (edge) => edge.target === id && edge.targetHandle === `${id}-${handleId}`
    );
  const isOutputConnected = (handleId) =>
    edges.some(
      (edge) => edge.source === id && edge.sourceHandle === `${id}-${handleId}`
    );

  const handleDelete = () => {
    onNodesChange([{ type: "remove", id }]);

    const connectedEdgeIds = edges
      .filter((edge) => edge.source === id || edge.target === id)
      .map((edge) => ({ type: "remove", id: edge.id }));
    if (connectedEdgeIds.length > 0) {
      onEdgesChange(connectedEdgeIds);
    }
  };

  const handleStyle = {
    width: "8px",
    height: "8px",
    background: "#555",
    border: "1px solid #fff",
    borderRadius: "50%",

    left: "-4px",
  };

  const outputHandleStyle = {
    ...handleStyle,
    left: "auto",
    right: "-4px",
  };

  return (
    <div
      className={`relative min-w-[180px] border bg-white rounded-lg border-slate-500 hover:border-blue-300  hover:ring-blue-100 hover:ring-2 transition ${className}`}
    >
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          className={isInputConnected(input.id) ? "connected" : ""}
          style={{
            ...handleStyle,
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      <div className="flex items-center justify-between  border-b-[1px] border-slate-500 bg-slate-100 p-2 rounded-[10px] rounded-b-[6px] ">
        <div className="flex items-center">
          <span className="mr-2">{icon}</span>
          <span className="font-bold">{label}</span>
        </div>
        <button
          className="bg-slate-300 rounded-full w-4 h-4 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
          onClick={handleDelete}
        >
          {" "}
          <X size={10} />{" "}
        </button>
      </div>

      <div className="p-4">{children}</div>

      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          className={isOutputConnected(output.id) ? "connected" : ""}
          style={{
            ...outputHandleStyle,
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};
