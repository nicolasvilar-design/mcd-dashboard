import React, { useState } from 'react';

const Toggle = ({
  label,
  toggled = false,
  disabled = false,
  isDarkMode = false,
  onChange,
  size = 'medium',
}) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const modes = {
    light: {
      onBackground: '#1F6437',
      offBackground: '#D6D6D6',
      thumbLight: '#FFFFFF',
      disabledOnBackground: '#ADADAD',
      disabledOffBackground: '#D6D6D6',
      text: '#292929',
      disabledText: '#ADADAD',
    },
    dark: {
      onBackground: '#1F6437',
      offBackground: '#4B4B4B',
      thumbLight: '#FFFFFF',
      disabledOnBackground: '#757575',
      disabledOffBackground: '#2A2A2A',
      text: '#FFFFFF',
      disabledText: '#757575',
    },
  };

  const sizes = {
    small: { width: '36px', height: '20px', thumbSize: '16px', thumbTransform: 'translateX(2px)' },
    medium: { width: '48px', height: '24px', thumbSize: '20px', thumbTransform: 'translateX(2px)' },
    large: { width: '60px', height: '28px', thumbSize: '24px', thumbTransform: 'translateX(2px)' },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];
  const sizeStyle = sizes[size];

  const handleToggle = () => {
    const newValue = !isToggled;
    setIsToggled(newValue);
    onChange?.(newValue);
  };

  const toggleBackground = disabled
    ? (isToggled ? colors.disabledOnBackground : colors.disabledOffBackground)
    : (isToggled ? colors.onBackground : colors.offBackground);

  const thumbTranslate = isToggled
    ? `translateX(calc(${sizeStyle.width} - ${sizeStyle.thumbSize} - 2px))`
    : sizeStyle.thumbTransform;

  const containerStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const toggleStyles = {
    width: sizeStyle.width,
    height: sizeStyle.height,
    backgroundColor: toggleBackground,
    borderRadius: '12px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    border: 'none',
    padding: 0,
    opacity: disabled ? 0.7 : 1,
  };

  const thumbStyles = {
    width: sizeStyle.thumbSize,
    height: sizeStyle.thumbSize,
    backgroundColor: colors.thumbLight,
    borderRadius: '50%',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: thumbTranslate,
    position: 'absolute',
    left: '2px',
  };

  return React.createElement(
    'div',
    { style: containerStyles, onClick: !disabled ? handleToggle : undefined },
    React.createElement(
      'button',
      {
        onClick: handleToggle,
        disabled,
        style: {
          ...toggleStyles,
          outline: 'none',
        },
        aria: { label: label || 'Toggle' },
      },
      React.createElement('div', { style: thumbStyles })
    ),
    label && React.createElement('span', {
      style: {
        fontSize: '14px',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        color: disabled ? colors.disabledText : colors.text,
        fontWeight: '500',
        userSelect: 'none',
      },
    }, label)
  );
};

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    toggled: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    isDarkMode: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    label: {
      control: 'text',
    },
  },
};

export const Off = {
  args: {
    label: 'Toggle Off',
    toggled: false,
  },
};

export const On = {
  args: {
    label: 'Toggle On',
    toggled: true,
  },
};

export const Disabled = {
  args: {
    label: 'Toggle Disabled',
    disabled: true,
  },
};

export const DisabledOn = {
  args: {
    label: 'Toggle On (Disabled)',
    toggled: true,
    disabled: true,
  },
};

export const DarkMode = {
  args: {
    label: 'Dark Mode Toggle',
    isDarkMode: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Sizes = {
  render: () => {
    return React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', gap: '32px' } },
      React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Toggle Sizes'),
      React.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' } },
        React.createElement(Toggle, { label: 'Small', size: 'small', toggled: true }),
        React.createElement(Toggle, { label: 'Medium', size: 'medium', toggled: true }),
        React.createElement(Toggle, { label: 'Large', size: 'large', toggled: true }),
      )
    );
  },
};

export const AllStates = {
  render: () => {
    return React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', gap: '48px' } },
      React.createElement(
        'div',
        null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Light Mode States'),
        React.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' } },
          React.createElement(Toggle, { label: 'Off', toggled: false }),
          React.createElement(Toggle, { label: 'On', toggled: true }),
          React.createElement(Toggle, { label: 'Disabled Off', disabled: true }),
          React.createElement(Toggle, { label: 'Disabled On', toggled: true, disabled: true }),
        ),
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode States'),
        React.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' } },
          React.createElement(Toggle, { label: 'Off', toggled: false, isDarkMode: true }),
          React.createElement(Toggle, { label: 'On', toggled: true, isDarkMode: true }),
          React.createElement(Toggle, { label: 'Disabled Off', disabled: true, isDarkMode: true }),
          React.createElement(Toggle, { label: 'Disabled On', toggled: true, disabled: true, isDarkMode: true }),
        ),
      ),
    );
  },
};
