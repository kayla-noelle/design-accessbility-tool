import { ColorChip } from './ColorChip';

type ColorInputProps = {
  backgroundColor: string;
  setBackgroundColor: (value: string) => void;
  headingColor: string;
  setHeadingColor: (value: string) => void;
  bodyColor: string;
  setBodyColor: (value: string) => void;
  uiColor: string;
  setUiColor: (value: string) => void;
  btnTextColor: string;
  setBtnTextColor: (value: string) => void;
};

function ColorInput({
  backgroundColor,
  setBackgroundColor,
  headingColor,
  setHeadingColor,
  bodyColor,
  setBodyColor,
  uiColor,
  setUiColor,
  btnTextColor,
  setBtnTextColor,
}: ColorInputProps) {
  return (
    <section id="colors" className="space-y-6">
      {/* Background */}
      <div className="p-6 bg-white rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold">Background</h2>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="size-40 cursor-pointer"
        />
        <ColorChip hex={backgroundColor} />
      </div>

      {/* Heading */}
      <div className="p-6 bg-white rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold">Heading</h2>
        <input
          type="color"
          value={headingColor}
          onChange={(e) => setHeadingColor(e.target.value)}
          className="size-40 cursor-pointer"
        />
        <ColorChip hex={headingColor} />
      </div>

      {/* Body Text */}
      <div className="p-6 bg-white rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold">Body Text</h2>
        <input
          type="color"
          value={bodyColor}
          onChange={(e) => setBodyColor(e.target.value)}
          className="size-40 cursor-pointer"
        />
        <ColorChip hex={bodyColor} />
      </div>

      {/* UI Elements */}
      <div className="p-6 bg-white rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold">UI Elements</h2>
        <p className="text-sm text-gray-600 font-normal">Button</p>
        <input
          type="color"
          value={uiColor}
          onChange={(e) => setUiColor(e.target.value)}
          className="size-40 cursor-pointer"
        />
        <ColorChip hex={uiColor} />
        <p className="text-sm text-gray-600 font-normal">Button Text</p>
        <input
          type="color"
          value={btnTextColor}
          onChange={(e) => setBtnTextColor(e.target.value)}
          className="size-40 cursor-pointer"
        />
        <ColorChip hex={btnTextColor} />
      </div>
    </section>
  );
}

export default ColorInput;
