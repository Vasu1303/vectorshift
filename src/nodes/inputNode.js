import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Input"
      outputs={[{ id: "output" }]}
      style={{ height: 120 }}
    >
      <label style={{ display: "block", marginBottom: "8px" }}>
        Name:
        <input type="text" value={currName} onChange={handleNameChange} />
      </label>
      <label style={{ display: "block" }}>
        Type:
        <select
          value={inputType}
          style={{ marginLeft: '2px' }}
          onChange={handleTypeChange}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
