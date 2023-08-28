import { COLORS_NEXT } from "@ditointernet/uai-foundation";

function hexToRGB(hex: string) {
  if (hex === undefined) return COLORS_NEXT.WHITE;
  
  hex = hex[0] === "#" ? hex.slice(1) : hex;
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  
  return r + ", " + g + ", " + b;
}
  
export function transparentize(color: string, alpha: string) {
  return `rgba(${hexToRGB(color)}, ${alpha})`;
}