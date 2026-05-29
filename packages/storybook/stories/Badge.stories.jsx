import React from 'react';

const Badge = ({
  label,
  variant = 'primary',
  size = 'medium',
  isDarkMode = false,
}) => {
  const variants = {
    primary: { light: { bg: '#FFBC0D', text: '#292929' }, dark: { bg: '#FFBC0D', text: '#292929' } },
    secondary: { light: { bg: '#D6D6D6', text: '#292929' }, dark: { bg: '#4B4B4B', text: '#FFFFFF' } },
    success: { light: { bg: '#1F6437', text: '#FFFFFF' }, dark: { bg: '#1F6437', text: '#FFFFFF' } },
    error: { light: { bg: '#DB0007', text: '#FFFFFF' }, dark: { bg: '#DB0007', text: '#FFFFFF' } },
    info: { light: { bg: '#006BAE', text: '#FFFFFF' }, dark: { bg: '#56AFD1', text: '#292929' } },
  };

  const sizes = {
    small: { padding: '4px 8px', fontSize: '11px' },
    medium: { padding: '6px 12px', fontSize: '12px' },
    large: { padding: '8px 16px', fontSize: '14px' },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = variants[variant][mode];
  const sizeStyle = sizes[size];

  return React.createElement('span', {
    style: {
      backgroundColor: colors.bg,
      color: colors.text,
      padding: sizeStyle.padding,
      borderRadius: '12px',
      fontSize: sizeStyle.fontSize,
      fontFamily: 'Segoe UI, system-ui, sans-serif',
      fontWeight: '600',
      display: 'inline-block',
      whiteSpace: 'nowrap',
    },
  }, label);
};

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'success', 'error', 'info'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    isDarkMode: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const Primary = {
  args: { label: 'Primary', variant: 'primary' },
};

export const Secondary = {
  args: { label: 'Secondary', variant: 'secondary' },
};

export const Success = {
  args: { label: 'Success', variant: 'success' },
};

export const Error = {
  args: { label: 'Error', variant: 'error' },
};

export const Info = {
  args: { label: 'Info', variant: 'info' },
};

export const AllVariants = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', gap: '48px' } },
      React.createElement(
        'div',
        null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Light Mode Variants'),
        React.createElement(
          'div',
          { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
          ['primary', 'secondary', 'success', 'error', 'info'].map((variant) =>
            React.createElement(Badge, { key: variant, label: variant, variant })
          )
        )
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode Variants'),
        React.createElement(
          'div',
          { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
          ['primary', 'secondary', 'success', 'error', 'info'].map((variant) =>
            React.createElement(Badge, { key: variant, label: variant, variant, isDarkMode: true })
          )
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'All Sizes'),
        React.createElement(
          'div',
          { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
          React.createElement(Badge, { label: 'Small', size: 'small' }),
          React.createElement(Badge, { label: 'Medium', size: 'medium' }),
          React.createElement(Badge, { label: 'Large', size: 'large' })
        )
      )
    ),
};
