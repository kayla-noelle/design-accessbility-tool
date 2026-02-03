import React from "react";

type ColorInputProps = {
  label: string;
  value: string;
  onChange: (color: string) => void;
};

export function ColorInput({ label, value, onChange }: ColorInputProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        {label}
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ marginLeft: "0.5rem", width: "80px" }}
        />
      </label>
    </div>
  );
}
