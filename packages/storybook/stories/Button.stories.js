import React from 'react';

const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children = 'Button',
  onClick,
}) => {
  // Inline styles for variants
  const variantStyles = {
    primary: {
      backgroundColor: '#FFC600',
      color: '#292929',
    },
    secondary: {
      backgroundColor: '#E8E8E8',
      color: '#292929',
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: '#292929',
      border: '1px solid #E8E8E8',
    },
  };

  // Inline styles for sizes
  const sizeStyles = {
    small: {
      padding: '6px 12px',
      fontSize: '12px',
      height: '32px',
    },
    medium: {
      padding: '8px 16px',
      fontSize: '14px',
      height: '40px',
    },
    large: {
      padding: '12px 24px',
      fontSize: '16px',
      height: '48px',
    },
  };

  // Base styles
  const baseStyles = {
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    opacity: disabled ? 0.6 : 1,
    fontFamily: 'system-ui, -apple-system, sans-serif',
  };

  // Merge styles
  const styles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  return React.createElement('button', {
    style: styles,
    disabled,
    onClick,
  }, children);
};

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Secondary Button',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    children: 'Tertiary Button',
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small',
  },
};

export const Medium = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium',
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const AllVariants = {
  render: () => {
    return React.createElement('div', {
      style: {
        padding: '40px',
        fontFamily: 'system-ui',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      },
    },
      React.createElement('div', null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold' } }, 'Primary (Red)'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Button, { variant: 'primary', size: 'small' }, 'Small'),
          React.createElement(Button, { variant: 'primary', size: 'medium' }, 'Medium'),
          React.createElement(Button, { variant: 'primary', size: 'large' }, 'Large'),
          React.createElement(Button, { variant: 'primary', disabled: true }, 'Disabled'),
        ),
      ),
      React.createElement('div', null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold' } }, 'Secondary (Gray)'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Button, { variant: 'secondary', size: 'small' }, 'Small'),
          React.createElement(Button, { variant: 'secondary', size: 'medium' }, 'Medium'),
          React.createElement(Button, { variant: 'secondary', size: 'large' }, 'Large'),
          React.createElement(Button, { variant: 'secondary', disabled: true }, 'Disabled'),
        ),
      ),
      React.createElement('div', null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold' } }, 'Tertiary (Transparent)'),
        React.createElement('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          React.createElement(Button, { variant: 'tertiary', size: 'small' }, 'Small'),
          React.createElement(Button, { variant: 'tertiary', size: 'medium' }, 'Medium'),
          React.createElement(Button, { variant: 'tertiary', size: 'large' }, 'Large'),
          React.createElement(Button, { variant: 'tertiary', disabled: true }, 'Disabled'),
        ),
      ),
    );
  },
};
