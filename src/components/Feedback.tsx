import React from "react";
import { getContrastRatio, getWcagLevel } from "../utils/wcag";

type FeedbackProps = {
  color: string;
};

export function Feedback({ color }: FeedbackProps) {
 { const contrastWithWhite = getContrastRatio(color, "#ffffff");
  const contrastWithBlack = getContrastRatio(color, "#000000");}

  return (
    <section
      style={{
        marginTop: "2rem",
        padding: "1.5rem",
        background: "#f9fafb",
        borderRadius: "8px",
      }}
    >
      <h2>Accessibility Feedback</h2>
      <p>
        Contrast with White: {contrastWithWhite.toFixed(2)} —{" "}
        {getWcagLevel(contrastWithWhite)}
      </p>
      <p>
        Contrast with Black: {contrastWithBlack.toFixed(2)} —{" "}
        {getWcagLevel(contrastWithBlack)}
      </p>
    </section>
  );
}
