import React, { useState } from "react";
import { ColorInput } from "./components/ColorInput";
import { Preview } from "./components/Preview";
import { Feedback } from "./components/Feedback";

function App() {
  const [color, setColor] = useState("#4f46e5");
  const [usage, setUsage] = useState("body");

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>Design Accessibility Tool</h1>
        <p>Generate accessible color and type decisions</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "2rem" }}>
        {/* Controls */}
        <aside>
          <h2>Inputs</h2>
          <ColorInput label="Base Color" value={color} onChange={setColor} />

          <label>
            Usage Context
            <select
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              style={{ marginLeft: "0.5rem" }}
            >
              <option value="body">Body Text</option>
              <option value="heading">Headings</option>
              <option value="button">Buttons</option>
            </select>
          </label>
        </aside>

        {/* Preview */}
        <Preview color={color} usage={usage} />
      </div>

      {/* Feedback */}
      <Feedback color={color} />
    </main>
  );
}

export default App;
