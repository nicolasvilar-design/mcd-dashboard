import React, { useState } from 'react';

const Checkbox = ({
  label,
  checked = false,
  disabled = false,
  isDarkMode = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const modes = {
    light: {
      uncheckedBorder: '#ADADAD',
      uncheckedBackground: '#FFFFFF',
      checkedBackground: '#1F6437',
      checkedBorder: '#1F6437',
      focusBorder: '#006BAE',
      disabledBackground: '#D6D6D6',
      disabledBorder: '#ADADAD',
      disabledText: '#ADADAD',
      text: '#292929',
    },
    dark: {
      uncheckedBorder: '#757575',
      uncheckedBackground: '#2A2A2A',
      checkedBackground: '#1F6437',
      checkedBorder: '#1F6437',
      focusBorder: '#56AFD1',
      disabledBackground: '#4B4B4B',
      disabledBorder: '#757575',
      disabledText: '#757575',
      text: '#FFFFFF',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const checkboxStyles = {
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    border: `2px solid ${disabled ? colors.disabledBorder : (isChecked ? colors.checkedBorder : colors.uncheckedBorder)}`,
    backgroundColor: isChecked ? colors.checkedBackground : (disabled ? colors.disabledBackground : colors.uncheckedBackground),
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    flexShrink: 0,
  };

  return React.createElement(
    'label',
    {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      },
    },
    React.createElement(
      'input',
      {
        type: 'checkbox',
        checked: isChecked,
        disabled,
        onChange: handleChange,
        style: { display: 'none' },
      }
    ),
    React.createElement(
      'div',
      { style: checkboxStyles },
      isChecked && React.createElement('span', {
        style: {
          color: '#FFFFFF',
          fontSize: '14px',
          fontWeight: 'bold',
          lineHeight: 1,
        },
      }, '✓')
    ),
    label && React.createElement('span', {
      style: {
        fontSize: '14px',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        color: disabled ? colors.disabledText : colors.text,
        fontWeight: '500',
      },
    }, label)
  );
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    isDarkMode: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export const Unchecked = {
  args: {
    label: 'Unchecked Checkbox',
    checked: false,
  },
};

export const Checked = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    label: 'Disabled & Checked',
    checked: true,
    disabled: true,
  },
};

export const DarkMode = {
  args: {
    label: 'Dark Mode Checkbox',
    isDarkMode: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
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
          { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          React.createElement(Checkbox, { label: 'Unchecked', checked: false }),
          React.createElement(Checkbox, { label: 'Checked', checked: true }),
          React.createElement(Checkbox, { label: 'Disabled Unchecked', disabled: true }),
          React.createElement(Checkbox, { label: 'Disabled Checked', checked: true, disabled: true }),
        ),
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode States'),
        React.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          React.createElement(Checkbox, { label: 'Unchecked', checked: false, isDarkMode: true }),
          React.createElement(Checkbox, { label: 'Checked', checked: true, isDarkMode: true }),
          React.createElement(Checkbox, { label: 'Disabled Unchecked', disabled: true, isDarkMode: true }),
          React.createElement(Checkbox, { label: 'Disabled Checked', checked: true, disabled: true, isDarkMode: true }),
        ),
      ),
    );
  },
};
