import React from 'react';

const Chip = ({
  label,
  variant = 'default',
  size = 'medium',
  closable = false,
  isDarkMode = false,
  onClose,
}) => {
  const variants = {
    default: { light: { bg: '#D6D6D6', text: '#292929' }, dark: { bg: '#4B4B4B', text: '#FFFFFF' } },
    primary: { light: { bg: '#FFBC0D', text: '#292929' }, dark: { bg: '#FFBC0D', text: '#292929' } },
    success: { light: { bg: '#E2EABF', text: '#1F6437' }, dark: { bg: '#2D5F35', text: '#66BB6A' } },
    error: { light: { bg: '#FFCEC4', text: '#DB0007' }, dark: { bg: '#3A1F1F', text: '#EF5350' } },
  };

  const sizes = {
    small: { padding: '4px 8px', fontSize: '11px' },
    medium: { padding: '6px 12px', fontSize: '12px' },
    large: { padding: '8px 16px', fontSize: '14px' },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = variants[variant][mode];
  const sizeStyle = sizes[size];

  return React.createElement(
    'div',
    {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: colors.bg,
        color: colors.text,
        padding: sizeStyle.padding,
        borderRadius: '16px',
        fontSize: sizeStyle.fontSize,
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        fontWeight: '500',
      },
    },
    label,
    closable && React.createElement(
      'button',
      {
        onClick: onClose,
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          marginLeft: '4px',
          color: colors.text,
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
        },
      },
      '✕'
    )
  );
};

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'primary', 'success', 'error'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    closable: { control: 'boolean' },
    isDarkMode: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const Default = {
  args: { label: 'Chip' },
};

export const Closable = {
  args: { label: 'Removable', closable: true },
};

export const AllVariants = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', gap: '12px', flexWrap: 'wrap' } },
      React.createElement(Chip, { label: 'Default', variant: 'default' }),
      React.createElement(Chip, { label: 'Primary', variant: 'primary' }),
      React.createElement(Chip, { label: 'Success', variant: 'success' }),
      React.createElement(Chip, { label: 'Error', variant: 'error' })
    ),
};

export const AllSizes = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', gap: '12px', alignItems: 'center' } },
      React.createElement(Chip, { label: 'Small', size: 'small' }),
      React.createElement(Chip, { label: 'Medium', size: 'medium' }),
      React.createElement(Chip, { label: 'Large', size: 'large' })
    ),
};

export const DarkMode = {
  args: { label: 'Dark Chip', isDarkMode: true, closable: true },
  parameters: { backgrounds: { default: 'dark' } },
};
