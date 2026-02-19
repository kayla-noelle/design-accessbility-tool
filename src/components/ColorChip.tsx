import { useMemo, useState } from 'react';
import { getColorName } from '../utils/colorName';

type ColorChipProps = {
  hex: string;
};

export function ColorChip({ hex }: ColorChipProps) {
  const [copied, setCopied] = useState(false);
  const name = useMemo(() => getColorName(hex), [hex]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex.toUpperCase());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback: do nothing silently
    }
  };

  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-sm w-32">
      <div className="h-14 w-full" style={{ backgroundColor: hex }} />
      <div className="bg-white px-2.5 py-2 space-y-0.5">
        <button
          onClick={handleCopy}
          title="Click to copy hex"
          className="text-xs font-mono font-semibold text-gray-800 hover:text-indigo-600 transition-colors block w-full text-left"
        >
          {copied ? '✓ Copied!' : hex.toUpperCase()}
        </button>
        <p className="text-xs text-gray-400 truncate leading-snug" title={name}>
          {name}
        </p>
      </div>
    </div>
  );
}

export default ColorChip;
