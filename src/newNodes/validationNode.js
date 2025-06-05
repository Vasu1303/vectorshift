import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

//This node willl validate EMails

export const EmailValidationNode = ({ id, data }) => {
  const [email, setEmail] = useState(data?.email || "");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!newEmail) {
      setError("Email is Required");
      setIsValid(false);
    } else if (!validateEmail(newEmail)) {
      setError("Invalid Email");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
    }
  };
  return (
    <BaseNode
      id={id}
      data={data}
      label="Email Validator"
      inputs={[{ id: "email" }]}
      outputs={[{ id: "isValid" }, { id: "error" }]}
      style={{
        height: 120,
        minWidth: 250,
      
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Email"
            style={{ width: "100%" }}
          />
        </label>
        {error && (
          <span style={{ color: "red", fontSize: "12px" }}>{error}</span>
        )}

        <div style={{ fontSize: "12px", color: isValid ? "green" : "red" }}>
          Status: {isValid ? "Valid ✓" : "Invalid ✗"}
        </div>
      </div>
    </BaseNode>
  );
};
