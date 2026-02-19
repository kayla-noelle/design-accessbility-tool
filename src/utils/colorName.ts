import { colornames } from 'color-name-list';

type ColorEntry = { name: string; hex: string };
const colorList = colornames as ColorEntry[];

const cache = new Map<string, string>();

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '').toLowerCase();
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return [r, g, b];
}

function colorDistance(hex1: string, hex2: string): number {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

export function getColorName(hex: string): string {
  try {
    const key = hex.toLowerCase();
    if (cache.has(key)) return cache.get(key)!;

    let closest = colorList[0];
    let minDist = Infinity;

    for (const color of colorList) {
      const dist = colorDistance(key, color.hex.toLowerCase());
      if (dist < minDist) {
        minDist = dist;
        closest = color;
        if (minDist === 0) break;
      }
    }

    cache.set(key, closest.name);
    return closest.name;
  } catch {
    return '';
  }
}
