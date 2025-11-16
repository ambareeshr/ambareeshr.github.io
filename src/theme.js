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

  // Borders and dividers
  border: "#1A1A1A",                  // Subtle dark grey
  divider: "#2A2A2A",                 // Slightly lighter divider

  // Cards and surfaces
  cardBg: "#0A0A0A",                  // Almost black
  cardBgHover: "#121212",             // Slightly lighter on hover
  surfaceElevated: "#141414",         // Elevated surfaces

  // Shadows - subtle
  cardShadow: "0 1px 3px rgba(255, 255, 255, 0.02)",
  cardHoverShadow: "0 8px 24px rgba(255, 255, 255, 0.08)",

  // Effects
  overlay: "rgba(0, 0, 0, 0.9)",
  glassEffect: "rgba(20, 20, 20, 0.8)",

  // Highlights - very subtle
  highlight: "#FFFFFF",
  highlightDim: "#505050",

  // Status colors - muted
  success: "#D0D0D0",
  warning: "#909090",
  error: "#808080",

  // Special effects
  shimmer: "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)",
  borderGlow: "1px solid rgba(255, 255, 255, 0.1)",

  // Typography
  fontPrimary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', monospace",

  // Transitions
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  transitionSlow: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
};

export const chosenTheme = minimalDarkTheme;
