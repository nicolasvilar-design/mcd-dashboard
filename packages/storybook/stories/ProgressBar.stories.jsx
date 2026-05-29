import React, { useState, useEffect } from 'react';

const ProgressBar = ({
  value = 50,
  max = 100,
  variant = 'primary',
  size = 'medium',
  isDarkMode = false,
  showLabel = true,
}) => {
  const variants = {
    primary: { light: '#FFBC0D', dark: '#FFBC0D' },
    success: { light: '#1F6437', dark: '#1F6437' },
    info: { light: '#006BAE', dark: '#56AFD1' },
    error: { light: '#DB0007', dark: '#DB0007' },
  };

  const sizes = {
    small: '4px',
    medium: '8px',
    large: '12px',
  };

  const backgroundSizes = {
    small: '2px',
    medium: '4px',
    large: '6px',
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const barColor = variants[variant][mode];
  const bgColor = isDarkMode ? '#4B4B4B' : '#D6D6D6';
  const textColor = isDarkMode ? '#FFFFFF' : '#292929';

  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return React.createElement(
    'div',
    { style: { width: '100%' } },
    showLabel && React.createElement(
      'div',
      { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px', color: textColor } },
      React.createElement('span', null, 'Progress'),
      React.createElement('span', null, `${Math.round(percentage)}%`)
    ),
    React.createElement('div', {
      style: {
        width: '100%',
        height: sizes[size],
        backgroundColor: bgColor,
        borderRadius: sizes[size],
        overflow: 'hidden',
      },
    },
      React.createElement('div', {
        style: {
          height: '100%',
          width: `${percentage}%`,
          backgroundColor: barColor,
          transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
      })
    )
  );
};

export default {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    variant: { control: 'select', options: ['primary', 'success', 'info', 'error'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    isDarkMode: { control: 'boolean' },
    showLabel: { control: 'boolean' },
  },
};

export const Default = {
  args: { value: 50 },
};

export const Full = {
  args: { value: 100 },
};

export const Empty = {
  args: { value: 0 },
};

export const Success = {
  args: { value: 75, variant: 'success' },
};

export const Error = {
  args: { value: 25, variant: 'error' },
};

export const DarkMode = {
  args: { value: 60, isDarkMode: true },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllVariants = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', maxWidth: '500px' } },
      React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Progress Variants'),
      React.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px' } },
        React.createElement('div', null,
          React.createElement('p', { style: { margin: '0 0 8px 0', fontWeight: '600' } }, 'Primary'),
          React.createElement(ProgressBar, { value: 60, variant: 'primary' })
        ),
        React.createElement('div', null,
          React.createElement('p', { style: { margin: '0 0 8px 0', fontWeight: '600' } }, 'Success'),
          React.createElement(ProgressBar, { value: 85, variant: 'success' })
        ),
        React.createElement('div', null,
          React.createElement('p', { style: { margin: '0 0 8px 0', fontWeight: '600' } }, 'Info'),
          React.createElement(ProgressBar, { value: 45, variant: 'info' })
        ),
        React.createElement('div', null,
          React.createElement('p', { style: { margin: '0 0 8px 0', fontWeight: '600' } }, 'Error'),
          React.createElement(ProgressBar, { value: 20, variant: 'error' })
        )
      )
    ),
};

export const AllSizes = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', maxWidth: '500px' } },
      React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Progress Sizes'),
      React.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px' } },
        React.createElement('div', null,
          React.createElement('p', { style: { margin: '0 0 8px 0', fontWeight: '600' } }, 'Small'),
          React.createElement(ProgressBar, { value: 65, size: 'small' })
        ),
        React.createElement('div', null,
          React.createElement('p', { style: { margin: '0 0 8px 0', fontWeight: '600' } }, 'Medium'),
          React.createElement(ProgressBar, { value: 65, size: 'medium' })
        ),
        React.createElement('div', null,
          React.createElement('p', { style: { margin: '0 0 8px 0', fontWeight: '600' } }, 'Large'),
          React.createElement(ProgressBar, { value: 65, size: 'large' })
        )
      )
    ),
};

export const Animated = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', maxWidth: '500px' } },
      React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Animated Progress'),
      React.createElement(ProgressBar, { value: progress, variant: 'primary' })
    );
  },
};
