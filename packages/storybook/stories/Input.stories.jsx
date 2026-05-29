import React, { useState } from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value: controlledValue,
  disabled = false,
  error = false,
  isDarkMode = false,
  onChange,
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
      errorBorder: '#DB0007',
      errorText: '#DB0007',
      disabledBackground: '#D6D6D6',
      disabledBorder: '#ADADAD',
      disabledText: '#ADADAD',
    },
    dark: {
      background: '#2A2A2A',
      border: '#757575',
      text: '#FFFFFF',
      placeholder: '#ADADAD',
      focusBorder: '#56AFD1',
      errorBorder: '#FF6B6B',
      errorText: '#FF6B6B',
      disabledBackground: '#1A1A1A',
      disabledBorder: '#4B4B4B',
      disabledText: '#757575',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  const inputStyles = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: disabled ? colors.disabledBackground : colors.background,
    border: `1px solid ${error ? colors.errorBorder : (disabled ? colors.disabledBorder : colors.border)}`,
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'Segoe UI, system-ui, sans-serif',
    color: disabled ? colors.disabledText : colors.text,
    cursor: disabled ? 'not-allowed' : 'text',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
  };

  return React.createElement(
    'div',
    { style: containerStyles },
    label && React.createElement('label', {
      style: {
        fontSize: '14px',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        fontWeight: '600',
        color: disabled ? colors.disabledText : colors.text,
      },
    }, label),
    React.createElement('input', {
      type,
      placeholder,
      value: controlledValue !== undefined ? controlledValue : value,
      disabled,
      onChange: handleChange,
      style: inputStyles,
    }),
    error && React.createElement('span', {
      style: {
        fontSize: '12px',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        color: colors.errorText,
      },
    }, 'This field is required or invalid')
  );
};

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    isDarkMode: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithValue = {
  args: {
    label: 'Username',
    placeholder: 'username@example.com',
    value: 'john_doe',
    type: 'text',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
  },
};

export const WithError = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    error: true,
    type: 'email',
  },
};

export const DarkMode = {
  args: {
    label: 'Dark Mode Input',
    placeholder: 'Type something...',
    isDarkMode: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AllTypes = {
  render: () => {
    return React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', maxWidth: '400px', margin: '0 auto' } },
      React.createElement('h2', { style: { margin: '0 0 32px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Input Types'),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '24px' } },
        React.createElement(Input, {
          label: 'Text Input',
          placeholder: 'Enter text...',
          type: 'text',
        }),
        React.createElement(Input, {
          label: 'Email Input',
          placeholder: 'email@example.com',
          type: 'email',
        }),
        React.createElement(Input, {
          label: 'Password Input',
          placeholder: '••••••••',
          type: 'password',
        }),
        React.createElement(Input, {
          label: 'Number Input',
          placeholder: '0',
          type: 'number',
        }),
        React.createElement(Input, {
          label: 'Search Input',
          placeholder: 'Search...',
          type: 'search',
        }),
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
          { style: { maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '24px' } },
          React.createElement(Input, { label: 'Default', placeholder: 'Enter text...' }),
          React.createElement(Input, { label: 'With Value', value: 'John Doe', placeholder: 'Your name' }),
          React.createElement(Input, { label: 'With Error', placeholder: 'Invalid input', error: true }),
          React.createElement(Input, { label: 'Disabled', placeholder: 'Disabled', disabled: true }),
        ),
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '40px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode States'),
        React.createElement(
          'div',
          { style: { maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '24px' } },
          React.createElement(Input, { label: 'Default', placeholder: 'Enter text...', isDarkMode: true }),
          React.createElement(Input, { label: 'With Value', value: 'John Doe', placeholder: 'Your name', isDarkMode: true }),
          React.createElement(Input, { label: 'With Error', placeholder: 'Invalid input', error: true, isDarkMode: true }),
          React.createElement(Input, { label: 'Disabled', placeholder: 'Disabled', disabled: true, isDarkMode: true }),
        ),
      ),
    );
  },
};
