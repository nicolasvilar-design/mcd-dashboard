/**
 * Design Tokens — single source of truth for the McDonald's Dashboard DS.
 * Values extracted verbatim from Figma "[DashBoard] Fuondation" variables.
 * Components and foundations import from here so there is ONE place to change a value.
 */

export const color = {
  // Primary / brand
  gold:   '#FFBC0D',
  red:    '#DB0007',
  black:  '#292929',
  green:  '#1F6437',
  white:  '#FFFFFF',

  // Secondary
  blue:      '#006BAE',
  orange:    '#FE8234',
  darkBlue:  '#103C82',
  lightBlue: '#56AFD1',
  fuschia:   '#9A0A4D',
  beige:     '#B69A81',

  // Neutral
  ivory:     '#F9F9F9',
  lightGrey: '#D6D6D6',
  grey:      '#ADADAD',
  darkGrey:  '#6F6F6F',

  // Text
  text:          '#292929', // text-primary
  textSecondary: '#6F6F6F', // text-secondary (placeholder / helper)
  textDisabled:  '#ADADAD', // text-disabled
  textOnColor:   '#FFFFFF',
  textError:     '#DB0007',

  // Support (semantic)
  supportError:   '#DB0007',
  supportSuccess: '#1F6437',
  supportWarning: '#FFBC0D',

  // Layers / surfaces
  layer01: '#FFFFFF', // background-01
  layer02: '#F9F9F9', // filled inputs
  layer03: '#D6D6D6', // disabled bg
  layer04: '#ADADAD',
  layer07: '#FFBC0D',

  // Borders
  border01: '#292929',
  border03: '#ADADAD',
  borderSubtle: '#D6D6D6',

  // Links
  link:        '#0F62FE',
  linkHover:   '#054ADA',
  linkVisited: '#8A3FFC',
};

/** Button tokens (primary / secondary / red) */
export const button = {
  primary:   { enabled: '#FFBC0D', hover: '#FFD46A', pressed: '#C08800', disabled: '#FFE49E', text: '#292929' },
  secondary: { enabled: '#FFFFFF', hover: '#D6D6D6', focus: '#D6D6D6', stroke: '#292929', text: '#292929', disabled: '#D6D6D6' },
  red:       { enabled: '#DB0007', hover: '#FF161D', pressed: '#B20006', disabled: '#FFE7E8', text: '#FFFFFF' },
  textDisabled: '#ADADAD',
};

/** Spacing — Figma "Spaces" scale (multiples of 4 / 8). */
export const space = {
  0: '0px', 1: '4px', 2: '8px', 3: '12px', 4: '16px',
  5: '20px', 6: '24px', 8: '32px', 10: '40px', 12: '48px', 16: '64px',
};
/** Figma-named aliases */
export const spaceFigma = { '-000': '0px', '-050': '4px', 100: '8px', 200: '16px', 300: '24px', 400: '32px', 500: '40px' };

export const radius = { sm: '4px', md: '8px', pill: '16px', round: '50%' };

export const font = {
  sans: "'Speedee', system-ui, sans-serif",
  mono: "'Roboto Mono', monospace",
  letterSpacing: '-0.15px',
  weight: { regular: 400, bold: 700 },
};

/** Type scale (Figma "* - cms" styles, all Speedee unless noted) */
export const type = {
  h2:     { size: '32px', lineHeight: '40px', weight: 700 },
  body01: { size: '16px', lineHeight: '24px', weight: 400 },
  body02: { size: '14px', lineHeight: '20px', weight: 400 },
  label01:{ size: '12px', lineHeight: '16px', weight: 400 },
  label02:{ size: '14px', lineHeight: '16px', weight: 400 },
  mono:   { size: '12px', lineHeight: '16px', weight: 400, family: "'Roboto Mono', monospace" },
};

export const elevation = {
  borderedDown: '0px 8px 16px rgba(41, 41, 41, 0.16)',
};

export default { color, button, space, spaceFigma, radius, font, type, elevation };
