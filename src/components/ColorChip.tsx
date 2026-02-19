import { useMemo, useRef, useState } from 'react';
import { getColorName } from '../utils/colorName';

type ColorChipProps = {
  hex: string;
  onChange?: (value: string) => void;
};

export function ColorChip({ hex, onChange }: ColorChipProps) {
  const [copied, setCopied] = useState(false);
  const name = useMemo(() => getColorName(hex), [hex]);
  const inputRef = useRef<HTMLInputElement>(null);

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
    <div className="flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-sm w-full">
      {/* Swatch — clickable when onChange is provided */}
      <div
        className={`relative h-24 w-full group ${onChange ? 'cursor-pointer' : ''}`}
        style={{ backgroundColor: hex }}
        onClick={() => onChange && inputRef.current?.click()}
        title={onChange ? 'Click to change color' : undefined}
      >
        {onChange && (
          <>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            <input
              ref={inputRef}
              type="color"
              value={hex}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
          </>
        )}
      </div>

      <div className="bg-white px-2.5 py-2 space-y-0.5">
        <button
          onClick={handleCopy}
          title="Click to copy hex"
          className="text-base md:text-[30px] font-mono font-semibold text-gray-800 hover:text-indigo-600 transition-colors block w-full text-left"
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
