import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { Mail } from "lucide-react";

//This node will validate EMails only as of now

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
      icon={<Mail size={18} />}
      
    >
      <div className="flex flex-col gap-2">
        <label className="flex flex-col">
          Email:
          <input
            type="email"
            value={email}
            className="border-[1px] outline-none border-slate-500/35 rounded px-2 py-1 mt-1 w-full"
            onChange={handleEmailChange}
            placeholder="Enter Email"
            
          />
        </label>
        {error && (
          <span className="text-red-600 text-xs" style={{ color: "red", fontSize: "12px" }}>{error}</span>
        )}

        <div className={`text-xs ${isValid ? 'text-green-600' : 'text-red-600'}`}>
          Status: {isValid ? "Valid ✓" : "Invalid ✗"}
        </div>
      </div>
    </BaseNode>
  );
};
