import React, { useState } from 'react';

const RadioButton = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  isDarkMode = false,
  onChange,
}) => {
  const modes = {
    light: {
      uncheckedBorder: '#ADADAD',
      uncheckedBackground: '#FFFFFF',
      checkedBorder: '#006BAE',
      checkedBackground: '#006BAE',
      focusRing: '#0F62FE',
      disabledBackground: '#D6D6D6',
      disabledBorder: '#ADADAD',
      disabledText: '#ADADAD',
      text: '#292929',
    },
    dark: {
      uncheckedBorder: '#757575',
      uncheckedBackground: '#2A2A2A',
      checkedBorder: '#56AFD1',
      checkedBackground: '#56AFD1',
      focusRing: '#56AFD1',
      disabledBackground: '#4B4B4B',
      disabledBorder: '#757575',
      disabledText: '#757575',
      text: '#FFFFFF',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const radioStyles = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: `2px solid ${disabled ? colors.disabledBorder : (checked ? colors.checkedBorder : colors.uncheckedBorder)}`,
    backgroundColor: checked ? colors.checkedBackground : (disabled ? colors.disabledBackground : colors.uncheckedBackground),
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    flexShrink: 0,
    position: 'relative',
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
        type: 'radio',
        name,
        value,
        checked,
        disabled,
        onChange: (e) => onChange?.(e.target.value),
        style: { display: 'none' },
      }
    ),
    React.createElement(
      'div',
      { style: radioStyles },
      checked && React.createElement('div', {
        style: {
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          position: 'absolute',
        },
      })
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
  title: 'Components/Radio Button',
  component: RadioButton,
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

export const Unselected = {
  args: {
    label: 'Unselected Radio Button',
    name: 'option',
    value: 'option1',
    checked: false,
  },
};

export const Selected = {
  args: {
    label: 'Selected Radio Button',
    name: 'option',
    value: 'option1',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Radio Button',
    name: 'option',
    value: 'option1',
    disabled: true,
  },
};

export const DisabledSelected = {
  args: {
    label: 'Disabled & Selected',
    name: 'option',
    value: 'option1',
    checked: true,
    disabled: true,
  },
};

export const DarkMode = {
  args: {
    label: 'Dark Mode Radio',
    name: 'option',
    value: 'option1',
    isDarkMode: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const RadioGroup = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    return React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui' } },
      React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '20px', fontWeight: 'bold' } }, 'Select an Option'),
      React.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
        React.createElement(RadioButton, {
          label: 'Option 1',
          name: 'group',
          value: 'option1',
          checked: selected === 'option1',
          onChange: setSelected,
        }),
        React.createElement(RadioButton, {
          label: 'Option 2',
          name: 'group',
          value: 'option2',
          checked: selected === 'option2',
          onChange: setSelected,
        }),
        React.createElement(RadioButton, {
          label: 'Option 3',
          name: 'group',
          value: 'option3',
          checked: selected === 'option3',
          onChange: setSelected,
        }),
      ),
      React.createElement('p', { style: { marginTop: '24px', color: '#757575' } }, `Selected: ${selected}`)
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
          { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          React.createElement(RadioButton, { label: 'Unselected', name: 'light', value: '1' }),
          React.createElement(RadioButton, { label: 'Selected', name: 'light', value: '2', checked: true }),
          React.createElement(RadioButton, { label: 'Disabled', name: 'light', value: '3', disabled: true }),
          React.createElement(RadioButton, { label: 'Disabled Selected', name: 'light', value: '4', checked: true, disabled: true }),
        ),
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode States'),
        React.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          React.createElement(RadioButton, { label: 'Unselected', name: 'dark', value: '1', isDarkMode: true }),
          React.createElement(RadioButton, { label: 'Selected', name: 'dark', value: '2', checked: true, isDarkMode: true }),
          React.createElement(RadioButton, { label: 'Disabled', name: 'dark', value: '3', disabled: true, isDarkMode: true }),
          React.createElement(RadioButton, { label: 'Disabled Selected', name: 'dark', value: '4', checked: true, disabled: true, isDarkMode: true }),
        ),
      ),
    );
  },
};
