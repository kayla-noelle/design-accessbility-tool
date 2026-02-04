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
  const buttonContrast = wcag.hex(uiColor, bodyColor); // button background vs text
  const buttonTextContast = wcag.hex(uiColor,btnTextColor);
  function ratingText(ratio: number) {
    if (ratio >= 7) return "AAA";
    if (ratio >= 4.5) return "AA";
    return "Fail";
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-4">
      <p>Heading contrast: {headingContrast.toFixed(2)} — {ratingText(headingContrast)}</p>
      <p>Body text contrast: {bodyContrast.toFixed(2)} — {ratingText(bodyContrast)}</p>
      <p>Button contrast: {buttonContrast.toFixed(2)} — {ratingText(buttonContrast)}</p>
      <p>Button text contrast{buttonTextContast.toFixed(2)} — {ratingText(buttonTextContast)}</p>
    </div>
  );
}
export default Feedback;