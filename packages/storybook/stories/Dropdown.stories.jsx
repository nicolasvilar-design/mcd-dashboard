import React, { useState } from 'react';

const Dropdown = ({
  label,
  options = [],
  disabled = false,
  isDarkMode = false,
  onChange,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const modes = {
    light: {
      background: '#FFFFFF',
      border: '#ADADAD',
      text: '#292929',
      placeholder: '#ADADAD',
      hoverBackground: '#F9F9F9',
      menuBackground: '#FFFFFF',
      optionHover: '#F9F9F9',
      disabledBackground: '#D6D6D6',
      disabledText: '#ADADAD',
    },
    dark: {
      background: '#2A2A2A',
      border: '#757575',
      text: '#FFFFFF',
      placeholder: '#ADADAD',
      hoverBackground: '#333333',
      menuBackground: '#1A1A1A',
      optionHover: '#333333',
      disabledBackground: '#1A1A1A',
      disabledText: '#757575',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const handleSelect = (option) => {
    setSelected(option.value);
    onChange?.(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === selected);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '300px', position: 'relative' } },
    label && React.createElement('label', {
      style: {
        fontSize: '14px',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        fontWeight: '600',
        color: colors.text,
      },
    }, label),
    React.createElement(
      'button',
      {
        onClick: () => !disabled && setIsOpen(!isOpen),
        disabled,
        style: {
          padding: '12px 16px',
          backgroundColor: disabled ? colors.disabledBackground : colors.background,
          border: `1px solid ${disabled ? colors.disabledText : colors.border}`,
          borderRadius: '4px',
          fontSize: '14px',
          fontFamily: 'Segoe UI, system-ui, sans-serif',
          color: selected ? colors.text : colors.placeholder,
          cursor: disabled ? 'not-allowed' : 'pointer',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
      React.createElement('span', null, displayText),
      React.createElement('span', { style: { color: colors.placeholder } }, isOpen ? '▲' : '▼')
    ),
    isOpen && !disabled && React.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: colors.menuBackground,
          border: `1px solid ${colors.border}`,
          borderRadius: '4px',
          marginTop: '4px',
          zIndex: 10,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        },
      },
      options.map((option, index) =>
        React.createElement(
          'button',
          {
            key: option.value,
            onClick: () => handleSelect(option),
            style: {
              width: '100%',
              padding: '12px 16px',
              backgroundColor: selected === option.value ? '#FFBC0D' : colors.menuBackground,
              color: selected === option.value ? '#292929' : colors.text,
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontFamily: 'Segoe UI, system-ui, sans-serif',
              fontSize: '14px',
              borderBottom: index < options.length - 1 ? `1px solid ${colors.border}` : 'none',
            },
            onMouseEnter: (e) => {
              if (selected !== option.value) {
                e.target.style.backgroundColor = colors.optionHover;
              }
            },
            onMouseLeave: (e) => {
              if (selected !== option.value) {
                e.target.style.backgroundColor = colors.menuBackground;
              }
            },
          },
          option.label
        )
      )
    )
  );
};

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isDarkMode: { control: 'boolean' },
    label: { control: 'text' },
  },
};

const options = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
  { label: 'Option 4', value: 'opt4' },
];

export const Default = {
  args: { label: 'Select Option', options },
};

export const Disabled = {
  args: { label: 'Disabled Dropdown', options, disabled: true },
};

export const DarkMode = {
  args: { label: 'Dark Mode', options, isDarkMode: true },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllStates = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', gap: '48px' } },
      React.createElement(
        'div',
        null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Light Mode'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' } },
          React.createElement(Dropdown, { label: 'Default', options }),
          React.createElement(Dropdown, { label: 'Disabled', options, disabled: true })
        )
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' } },
          React.createElement(Dropdown, { label: 'Default', options, isDarkMode: true }),
          React.createElement(Dropdown, { label: 'Disabled', options, disabled: true, isDarkMode: true })
        )
      )
    ),
};
