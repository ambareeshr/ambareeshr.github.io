// Minimal Black & White Theme - Ultra Modern
export const minimalDarkTheme = {
  // Base colors
  body: "#000000",                    // Pure black
  text: "#FFFFFF",                    // Pure white
  secondaryText: "#A0A0A0",           // Light grey
  tertiaryText: "#707070",            // Medium grey

  // Accents - minimal grey tones only
  primary: "#FFFFFF",                 // White for primary elements
  secondary: "#808080",               // Grey for secondary
  accent: "#C0C0C0",                  // Light grey accent

  // Borders and dividers - improved visibility
  border: "#2A2A2A",                  // Darker grey for subtle borders
  divider: "#404040",                 // Medium grey for dividers
  borderHover: "#505050",             // Lighter on hover

  // Cards and surfaces
  cardBg: "#0A0A0A",                  // Almost black
  cardBgHover: "#141414",             // Slightly lighter on hover
  surfaceElevated: "#1A1A1A",         // Elevated surfaces

  // Shadows - subtle with white glow
  cardShadow: "0 2px 8px rgba(255, 255, 255, 0.03)",
  cardHoverShadow: "0 8px 24px rgba(255, 255, 255, 0.06)",

  // Effects
  overlay: "rgba(0, 0, 0, 0.95)",
  glassEffect: "rgba(20, 20, 20, 0.8)",

  // Highlights - very subtle
  highlight: "#FFFFFF",
  highlightDim: "#606060",

  // Status colors - muted
  success: "#D0D0D0",
  warning: "#909090",
  error: "#808080",

  // Special effects
  shimmer: "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)",
  borderGlow: "1px solid rgba(255, 255, 255, 0.15)",

  // Typography
  fontPrimary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', monospace",

  // Transitions
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  transitionSlow: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
};

export const chosenTheme = minimalDarkTheme;
