import { create } from '@storybook/theming/create';

/**
 * Storybook theme aligned with the McDonald's Dashboard DS.
 * Brand: Gold (#FFBC0D) + Black (#292929) on Ivory/White, Speedee typeface.
 */
export default create({
  base: 'light',

  brandTitle: "🍟 McDonald's Dashboard — Design System",
  brandUrl: 'https://github.com/nicolasvilar-design/mcd-dashboard',
  brandTarget: '_blank',

  // Brand accents
  colorPrimary: '#FFBC0D',   // gold
  colorSecondary: '#C08800', // accent gold (legible on white for selection/links)

  // App chrome
  appBg: '#F9F9F9',          // ivory
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#D6D6D6',
  appBorderRadius: 8,

  // Typography (DS fonts)
  fontBase: '"Speedee", system-ui, sans-serif',
  fontCode: '"Roboto Mono", monospace',

  // Text
  textColor: '#292929',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#6F6F6F',

  // Toolbar
  barTextColor: '#6F6F6F',
  barSelectedColor: '#C08800',
  barHoverColor: '#C08800',
  barBg: '#FFFFFF',

  // Inputs
  inputBg: '#FFFFFF',
  inputBorder: '#D6D6D6',
  inputTextColor: '#292929',
  inputBorderRadius: 4,
});
