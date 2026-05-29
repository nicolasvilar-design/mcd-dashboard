import React from 'react';

const Skeleton = ({
  width = '100%',
  height = '20px',
  variant = 'text',
  isDarkMode = false,
}) => {
  const bgColor = isDarkMode ? '#3A3A3A' : '#E8E8E8';
  const shimmerColor = isDarkMode ? '#4A4A4A' : '#F0F0F0';

  const shimmerStyles = `
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    .skeleton-shimmer {
      animation: shimmer 2s infinite;
      background: linear-gradient(
        to right,
        ${bgColor} 0%,
        ${shimmerColor} 50%,
        ${bgColor} 100%
      );
      background-size: 1000px 100%;
    }
  `;

  const variantStyles = {
    text: { borderRadius: '4px' },
    circle: { borderRadius: '50%', width: '40px', height: '40px' },
    rect: { borderRadius: '8px' },
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('style', null, shimmerStyles),
    React.createElement('div', {
      className: 'skeleton-shimmer',
      style: {
        width: variant === 'circle' ? '40px' : width,
        height: variant === 'circle' ? '40px' : height,
        backgroundColor: bgColor,
        ...variantStyles[variant],
      },
    })
  );
};

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'rect', 'circle'] },
    isDarkMode: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export const Text = {
  args: { variant: 'text' },
};

export const Rect = {
  args: { variant: 'rect', width: '100%', height: '200px' },
};

export const Circle = {
  args: { variant: 'circle' },
};

export const CardSkeleton = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '8px', maxWidth: '300px' } },
      React.createElement(Skeleton, { variant: 'rect', width: '100%', height: '160px' }),
      React.createElement('div', { style: { marginTop: '16px' } },
        React.createElement(Skeleton, { variant: 'text', width: '60%', height: '20px' }),
        React.createElement('div', { style: { marginTop: '12px' } },
          React.createElement(Skeleton, { variant: 'text', width: '100%', height: '16px' })
        ),
        React.createElement('div', { style: { marginTop: '12px' } },
          React.createElement(Skeleton, { variant: 'text', width: '80%', height: '16px' })
        )
      )
    ),
};

export const DarkMode = {
  args: { variant: 'rect', isDarkMode: true, width: '100%', height: '100px' },
  parameters: { backgrounds: { default: 'dark' } },
};
