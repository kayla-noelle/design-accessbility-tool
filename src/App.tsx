import { useState } from "react";
import ColorInput from "./components/ColorInput";
import Header from "./components/Header";
import { Preview } from "./components/Preview";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import { PaletteGenerator } from "./components/PaletteGenerator";

type ApplySlot = 'background' | 'heading' | 'body' | 'ui' | 'btnText';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [headingColor, setHeadingColor] = useState("#000000");
  const [bodyColor, setBodyColor] = useState("#000000");
  const [btnTextColor, setBtnTextColor] = useState("#000000");
  const [uiColor, setUiColor] = useState("#ffffff");

  const handleApplyColor = (slot: ApplySlot, color: string) => {
    switch (slot) {
      case 'background': setBackgroundColor(color); break;
      case 'heading':    setHeadingColor(color);    break;
      case 'body':       setBodyColor(color);        break;
      case 'ui':         setUiColor(color);          break;
      case 'btnText':    setBtnTextColor(color);     break;
    }
  };

  return (
    <div className="font-bold min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">

        {/* Palette Generator */}
        <PaletteGenerator onApplyColor={handleApplyColor} />

        {/* Accessibility Rating Results */}
        <section id="contrast">
          <Feedback
            backgroundColor={backgroundColor}
            headingColor={headingColor}
            bodyColor={bodyColor}
            uiColor={uiColor}
            btnTextColor={btnTextColor}
          />
        </section>

        {/* Color Pickers + Preview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ColorInput
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            headingColor={headingColor}
            setHeadingColor={setHeadingColor}
            bodyColor={bodyColor}
            setBodyColor={setBodyColor}
            uiColor={uiColor}
            setUiColor={setUiColor}
            btnTextColor={btnTextColor}
            setBtnTextColor={setBtnTextColor}
          />
          <Preview
            backgroundColor={backgroundColor}
            headingColor={headingColor}
            bodyColor={bodyColor}
            uiColor={uiColor}
            btnTextColor={btnTextColor}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
