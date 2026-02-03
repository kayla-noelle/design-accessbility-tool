export function hexToRgb(hex: string) {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

export function getLuminance(r: number, g: number, b: number) {
  const srgb = [r, g, b].map((v) => {
    const val = v / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

export function getContrastRatio(hex1: string, hex2: string) {
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);
  const L1 = getLuminance(c1.r, c1.g, c1.b);
  const L2 = getLuminance(c2.r, c2.g, c2.b);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function getWcagLevel(contrast: number) {
  if (contrast >= 7) return "AAA";
  if (contrast >= 4.5) return "AA";
  if (contrast >= 3) return "AA Large";
  return "Fail";
}
