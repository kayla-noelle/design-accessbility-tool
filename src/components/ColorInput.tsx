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
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Background</h2>
        <ColorChip hex={backgroundColor} onChange={setBackgroundColor} />
      </div>

      {/* Heading */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Heading</h2>
        <ColorChip hex={headingColor} onChange={setHeadingColor} />
      </div>

      {/* Body Text */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Body Text</h2>
        <ColorChip hex={bodyColor} onChange={setBodyColor} />
      </div>

      {/* UI Elements */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">UI Elements</h2>
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-normal">Button</p>
            <ColorChip hex={uiColor} onChange={setUiColor} />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-normal">Button Text</p>
            <ColorChip hex={btnTextColor} onChange={setBtnTextColor} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColorInput;
