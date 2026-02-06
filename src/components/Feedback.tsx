import * as wcag from 'wcag-contrast';

type FeedbackProps = {
  backgroundColor: string;
  headingColor: string;
  bodyColor: string;
  uiColor: string;
  btnTextColor:string;
};

export function Feedback({ backgroundColor, headingColor, bodyColor, uiColor,btnTextColor }: FeedbackProps) {
  // Calculate contrast ratios
  const headingContrast = wcag.hex(backgroundColor, headingColor);
  const bodyContrast = wcag.hex(backgroundColor, bodyColor);
  const buttonContrast = wcag.hex(uiColor, bodyColor); 
  const buttonTextContast = wcag.hex(uiColor,btnTextColor);
  function ratingText(ratio: number) {
    if (ratio >= 7) return <span className="text-[green]">AAA</span>;
    if (ratio >= 4.5) return <span className="text-[green]">AA</span>;
    return <span className="text-[red]">Fail</span>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-xl shadow">
      <p className="text-2xl">Heading contrast: {headingContrast.toFixed(2)} — {ratingText(headingContrast)}</p>
      <p className="text-2xl">Body text contrast: {bodyContrast.toFixed(2)} — {ratingText(bodyContrast)}</p>
      <p className="text-2xl">Button contrast: {buttonContrast.toFixed(2)} — {ratingText(buttonContrast)}</p>
      <p className="text-2xl">Button text contrast: {buttonTextContast.toFixed(2)} — {ratingText(buttonTextContast)}</p>
    </div>
  );
}
export default Feedback;