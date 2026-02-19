import { useMemo, useState } from 'react';
import { generatePalette } from '../utils/paletteGen';
import type { PaletteType } from '../utils/paletteGen';
import { getColorName } from '../utils/colorName';

type ApplySlot = 'background' | 'heading' | 'body' | 'ui' | 'btnText';

type PaletteGeneratorProps = {
  onApplyColor: (slot: ApplySlot, color: string) => void;
};

const PALETTE_TYPES: { value: PaletteType; label: string }[] = [
  { value: 'monochromatic', label: 'Monochromatic' },
  { value: 'complementary', label: 'Complementary' },
  { value: 'analogous', label: 'Analogous' },
  { value: 'triadic', label: 'Triadic' },
  { value: 'split-complementary', label: 'Split Complementary' },
];

const APPLY_SLOTS: { key: ApplySlot; label: string }[] = [
  { key: 'background', label: 'Background' },
  { key: 'heading', label: 'Heading' },
  { key: 'body', label: 'Body Text' },
  { key: 'ui', label: 'Button BG' },
  { key: 'btnText', label: 'Button Text' },
];

type PaletteChipProps = {
  color: string;
  isSelected: boolean;
  onClick: () => void;
};

function PaletteChip({ color, isSelected, onClick }: PaletteChipProps) {
  const name = useMemo(() => getColorName(color), [color]);
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col items-center transition-all focus:outline-none ${
        isSelected ? 'ring-inset ring-4 ring-indigo-500' : ''
      }`}
      style={{ minWidth: 0 }}
      title={`${color.toUpperCase()} — ${name}`}
    >
      <div
        className="w-full transition-all duration-200"
        style={{ backgroundColor: color, height: isSelected ? '96px' : '80px' }}
      />
      <div className="w-full bg-white px-1 py-2 border-t border-gray-100">
        <p className="text-xs font-mono font-bold text-gray-800 text-center truncate">
          {color.toUpperCase()}
        </p>
        <p className="text-xs text-gray-400 text-center truncate leading-snug hidden sm:block">
          {name}
        </p>
      </div>
    </button>
  );
}

export function PaletteGenerator({ onApplyColor }: PaletteGeneratorProps) {
  const [baseColor, setBaseColor] = useState('#6366f1');
  const [paletteType, setPaletteType] = useState<PaletteType>('analogous');
  const [palette, setPalette] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [appliedFlash, setAppliedFlash] = useState<string | null>(null);

  const selectedColor = selectedIndex !== null ? palette[selectedIndex] : null;
  const selectedName = useMemo(
    () => (selectedColor ? getColorName(selectedColor) : ''),
    [selectedColor]
  );

  const handleGenerate = () => {
    setPalette(generatePalette(baseColor, paletteType));
    setSelectedIndex(null);
  };

  const handleApply = (slot: ApplySlot) => {
    if (!selectedColor) return;
    onApplyColor(slot, selectedColor);
    setAppliedFlash(slot);
    setTimeout(() => setAppliedFlash(null), 1000);
  };

  return (
    <section id="palette" className="p-6 bg-white rounded-xl shadow space-y-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Color Palette Generator</h2>
        <p className="text-sm text-gray-500 font-normal mt-0.5">
          Generate harmonious palettes and apply colors directly to your design.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-start">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 block">Base Color</label>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="color-swatch size-11 cursor-pointer rounded-lg overflow-hidden"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 block">Palette Type</label>
          <select
            value={paletteType}
            onChange={(e) => setPaletteType(e.target.value as PaletteType)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-normal"
          >
            {PALETTE_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGenerate}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors mt-6"
        >
          Generate Palette
        </button>
      </div>

      {/* Palette Swatches */}
      {palette.length > 0 ? (
        <div className="space-y-4">
          <p className="text-sm text-gray-500 font-normal">
            Click a color to select it, then apply it to a design slot below.
          </p>

          {/* Coolors-style horizontal palette */}
          <div className="flex rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            {palette.map((color, i) => (
              <PaletteChip
                key={i}
                color={color}
                isSelected={selectedIndex === i}
                onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Apply panel */}
          {selectedColor && (
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: selectedColor }}
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedColor.toUpperCase()}
                  </p>
                  <p className="text-xs text-gray-400 font-normal">{selectedName}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                  Apply to:
                </p>
                <div className="flex flex-wrap gap-2">
                  {APPLY_SLOTS.map((slot) => (
                    <button
                      key={slot.key}
                      onClick={() => handleApply(slot.key)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                        appliedFlash === slot.key
                          ? 'bg-green-100 text-green-700'
                          : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
                      }`}
                    >
                      {appliedFlash === slot.key ? '✓ Applied' : slot.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="text-sm text-gray-400 font-normal italic">
          Pick a base color and palette type, then click "Generate Palette" to get started.
        </p>
      )}
    </section>
  );
}

export default PaletteGenerator;
