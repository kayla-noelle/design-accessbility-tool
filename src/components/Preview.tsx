import React from "react";

type PreviewProps = {
  color: string;
  usage: string;
};

export function Preview({ color, usage }: PreviewProps) {
  return (
    <section
      style={{
        padding: "1.5rem",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
      }}
    >
      <h2>Live Preview</h2>
      <p style={{ color }}>
        This is an example of {usage} text using your selected color.
      </p>
      <button
        style={{
          backgroundColor: color,
          color: "#fff",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
          marginTop: "1rem",
        }}
      >
        Button Example
      </button>
    </section>
  );
}
