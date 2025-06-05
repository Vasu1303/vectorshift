
import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      label="LLM"
      inputs={[{ id: "system" }, { id: "prompt" }]}
      outputs={[{ id: "response" }]}
    >

      <span>This is a LLM</span>
    </BaseNode>
  );
};
