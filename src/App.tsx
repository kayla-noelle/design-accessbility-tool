
import React, { useState } from "react";
import { ColorInput } from "./components/ColorInput";
import Header from "./components/Header";

function App() {

      const [color, setColor] = useState("#4f46e5");
      const [usage, setUsage ] = useState("body");

  return (
    <div className="font-bold min-h-screen bg-gray-50 text-gray-900">
     {/*Header */}
     <Header />

       {/* Main content */}

       <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <ColorInput label="Base Color" value={color} onChange={setColor} />
       </main>
    </div>   

  );
};

export default App;
