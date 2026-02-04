//import React from "react";
type PreviewProps = {
  backgroundColor: string;
  headingColor:string;
  bodyColor:string;
  uiColor:string;
  btnTextColor: string;
};

export function Preview({ backgroundColor, headingColor, bodyColor, uiColor, btnTextColor }: PreviewProps) {
  return (
    <section className="p-6 bg-white rounded-xl shadow space-y-4"
      style={{ backgroundColor }}
    >
      <h2 className="text-4xl" style={{ color: headingColor }}>Heading</h2>
      <p style={{color: bodyColor}}>
        This is an example of text using your selected color.
        Lorem ipsum dolor sit amet...
      </p>
      <button className="text-white font-bold py-2 px-4 rounded"
        style={{backgroundColor: uiColor, color: btnTextColor }}>
        Button Example
      </button>
    </section>
  );
}

export default Preview;