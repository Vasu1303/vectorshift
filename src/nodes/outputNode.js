

import { useState } from "react";

import { BaseNode } from "../components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Output"
      inputs={[{ id: "value" }]}
      style={{ height: 120 }}
    >
      <div>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label style={{ display: "block" }}>
          Type:
          <select value={outputType} style={{ marginLeft: "2px" }} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
