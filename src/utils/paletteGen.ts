export type PaletteType =
  | 'monochromatic'
  | 'complementary'
  | 'analogous'
  | 'triadic'
  | 'split-complementary';

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h: number, s: number, l: number): string {
  const sn = s / 100;
  const ln = l / 100;
  const a = sn * Math.min(ln, 1 - ln);

  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = ln - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };

  return `#${f(0)}${f(8)}${f(4)}`;
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export function generatePalette(baseHex: string, type: PaletteType): string[] {
  const [h, s, l] = hexToHsl(baseHex);

  switch (type) {
    case 'monochromatic':
      return [
        hslToHex(h, clamp(s - 10, 0, 100), clamp(l + 35, 10, 92)),
        hslToHex(h, s, clamp(l + 18, 10, 92)),
        baseHex,
        hslToHex(h, s, clamp(l - 18, 8, 90)),
        hslToHex(h, clamp(s + 10, 0, 100), clamp(l - 35, 8, 90)),
      ];

    case 'complementary': {
      const comp = (h + 180) % 360;
      return [
        hslToHex(h, s, clamp(l + 20, 10, 90)),
        baseHex,
        hslToHex(h, s, clamp(l - 20, 8, 90)),
        hslToHex(comp, s, clamp(l + 10, 10, 90)),
        hslToHex(comp, s, l),
      ];
    }

    case 'analogous':
      return [
        hslToHex((h - 40 + 360) % 360, s, l),
        hslToHex((h - 20 + 360) % 360, s, l),
        baseHex,
        hslToHex((h + 20) % 360, s, l),
        hslToHex((h + 40) % 360, s, l),
      ];

    case 'triadic': {
      const t1 = (h + 120) % 360;
      const t2 = (h + 240) % 360;
      return [
        baseHex,
        hslToHex(h, s, clamp(l - 15, 8, 90)),
        hslToHex(t1, s, l),
        hslToHex(t2, s, l),
        hslToHex(t2, s, clamp(l - 15, 8, 90)),
      ];
    }

    case 'split-complementary': {
      const sc1 = (h + 150) % 360;
      const sc2 = (h + 210) % 360;
      return [
        baseHex,
        hslToHex(h, s, clamp(l + 20, 10, 90)),
        hslToHex(sc1, s, l),
        hslToHex(sc2, s, l),
        hslToHex(sc1, s, clamp(l - 20, 8, 90)),
      ];
    }
  }
}
