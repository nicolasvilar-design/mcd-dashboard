import React, { useState } from 'react';

const Tooltip = ({
  text,
  children,
  position = 'top',
  isDarkMode = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const modes = {
    light: {
      background: '#292929',
      text: '#FFFFFF',
      shadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    },
    dark: {
      background: '#FFFFFF',
      text: '#292929',
      shadow: '0px 4px 12px rgba(255, 255, 255, 0.2)',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const positions = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%) translateY(-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%) translateY(8px)' },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%) translateX(-8px)' },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%) translateX(8px)' },
  };

  return React.createElement(
    'div',
    { style: { position: 'relative', display: 'inline-block' } },
    React.createElement(
      'div',
      {
        onMouseEnter: () => setIsVisible(true),
        onMouseLeave: () => setIsVisible(false),
      },
      children
    ),
    isVisible && React.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          backgroundColor: colors.background,
          color: colors.text,
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          fontFamily: 'Segoe UI, system-ui, sans-serif',
          whiteSpace: 'nowrap',
          zIndex: 1000,
          boxShadow: colors.shadow,
          ...positions[position],
        },
      },
      text
    )
  );
};

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    isDarkMode: { control: 'boolean' },
    text: { control: 'text' },
  },
};

export const Default = {
  args: {
    text: 'This is a tooltip',
    children: React.createElement('button', {
      style: {
        padding: '8px 16px',
        backgroundColor: '#FFBC0D',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: '600',
      },
    }, 'Hover me'),
  },
};

export const DarkMode = {
  args: {
    text: 'Dark mode tooltip',
    isDarkMode: true,
    children: React.createElement('button', {
      style: {
        padding: '8px 16px',
        backgroundColor: '#FFBC0D',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: '600',
      },
    }, 'Hover me'),
  },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllPositions = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '60px', fontFamily: 'system-ui', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', height: '400px', alignItems: 'center', justifyItems: 'center' } },
      React.createElement(
        'div',
        null,
        React.createElement(Tooltip, {
          text: 'Top tooltip',
          position: 'top',
          children: React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: '#FFBC0D',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            },
          }, 'Top')
        })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(Tooltip, {
          text: 'Right tooltip',
          position: 'right',
          children: React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: '#FFBC0D',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            },
          }, 'Right')
        })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(Tooltip, {
          text: 'Left tooltip',
          position: 'left',
          children: React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: '#FFBC0D',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            },
          }, 'Left')
        })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(Tooltip, {
          text: 'Bottom tooltip',
          position: 'bottom',
          children: React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: '#FFBC0D',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            },
          }, 'Bottom')
        })
      )
    ),
};
