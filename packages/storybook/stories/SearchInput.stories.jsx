import React, { useState } from 'react';

const SearchInput = ({
  placeholder = 'Search...',
  value: controlledValue,
  disabled = false,
  isDarkMode = false,
  onChange,
  onSearch,
  label,
}) => {
  const [value, setValue] = useState(controlledValue || '');

  const modes = {
    light: {
      background: '#FFFFFF',
      border: '#ADADAD',
      text: '#292929',
      placeholder: '#ADADAD',
      focusBorder: '#006BAE',
      disabledBackground: '#D6D6D6',
      disabledBorder: '#ADADAD',
      disabledText: '#ADADAD',
      iconColor: '#ADADAD',
    },
    dark: {
      background: '#2A2A2A',
      border: '#757575',
      text: '#FFFFFF',
      placeholder: '#ADADAD',
      focusBorder: '#56AFD1',
      disabledBackground: '#1A1A1A',
      disabledBorder: '#4B4B4B',
      disabledText: '#757575',
      iconColor: '#ADADAD',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    onChange?.('');
  };

  const handleSearch = () => {
    onSearch?.(controlledValue !== undefined ? controlledValue : value);
  };

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' } },
    label && React.createElement('label', {
      style: {
        fontSize: '14px',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        fontWeight: '600',
        color: colors.text,
      },
    }, label),
    React.createElement(
      'div',
      { style: { position: 'relative', display: 'flex', alignItems: 'center' } },
      React.createElement('span', {
        style: {
          position: 'absolute',
          left: '12px',
          fontSize: '18px',
          color: colors.iconColor,
          pointerEvents: 'none',
        },
      }, '🔍'),
      React.createElement('input', {
        type: 'text',
        placeholder,
        value: controlledValue !== undefined ? controlledValue : value,
        disabled,
        onChange: handleChange,
        onKeyPress: (e) => e.key === 'Enter' && handleSearch(),
        style: {
          width: '100%',
          padding: '12px 16px 12px 40px',
          backgroundColor: disabled ? colors.disabledBackground : colors.background,
          border: `1px solid ${disabled ? colors.disabledBorder : colors.border}`,
          borderRadius: '4px',
          fontSize: '14px',
          fontFamily: 'Segoe UI, system-ui, sans-serif',
          color: disabled ? colors.disabledText : colors.text,
          cursor: disabled ? 'not-allowed' : 'text',
          transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
          boxSizing: 'border-box',
          paddingRight: (controlledValue !== undefined ? controlledValue : value) ? '40px' : '16px',
        },
      }),
      (controlledValue !== undefined ? controlledValue : value) && !disabled && React.createElement(
        'button',
        {
          onClick: handleClear,
          style: {
            position: 'absolute',
            right: '12px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            color: colors.iconColor,
            padding: 0,
          },
        },
        '✕'
      )
    )
  );
};

export default {
  title: 'Components/Search Input',
  component: SearchInput,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isDarkMode: { control: 'boolean' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
  },
};

export const Default = {
  args: {
    label: 'Search',
    placeholder: 'Enter search term...',
  },
};

export const WithValue = {
  args: {
    label: 'Search Products',
    placeholder: 'Search...',
    value: 'laptop',
  },
};

export const Disabled = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    disabled: true,
  },
};

export const DarkMode = {
  args: {
    label: 'Dark Mode Search',
    placeholder: 'Search...',
    isDarkMode: true,
  },
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
        React.createElement(
          'div',
          { style: { maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '24px' } },
          React.createElement(SearchInput, { label: 'Default', placeholder: 'Search...' }),
          React.createElement(SearchInput, { label: 'With Value', placeholder: 'Search...', value: 'example' }),
          React.createElement(SearchInput, { label: 'Disabled', placeholder: 'Search...', disabled: true }),
        ),
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '40px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement(
          'div',
          { style: { maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '24px' } },
          React.createElement(SearchInput, { label: 'Default', placeholder: 'Search...', isDarkMode: true }),
          React.createElement(SearchInput, { label: 'With Value', placeholder: 'Search...', value: 'example', isDarkMode: true }),
          React.createElement(SearchInput, { label: 'Disabled', placeholder: 'Search...', disabled: true, isDarkMode: true }),
        ),
      )
    ),
};
