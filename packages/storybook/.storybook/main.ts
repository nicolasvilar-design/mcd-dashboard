import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: 'tag',
  },
};
export default config;
