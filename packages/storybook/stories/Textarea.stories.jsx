import React, { useState } from 'react';

const Textarea = ({
  placeholder,
  value: controlledValue,
  disabled = false,
  error = false,
  isDarkMode = false,
  onChange,
  label,
  rows = 4,
  maxLength,
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

  const textareaStyles = {
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
    resize: 'vertical',
    minHeight: `${rows * 24 + 24}px`,
    fontFamily: 'Segoe UI, system-ui, sans-serif',
    lineHeight: '1.5',
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
  };

  const charCount = value.length;
  const hasMaxLength = maxLength !== undefined;
  const isFull = hasMaxLength && charCount >= maxLength;

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
    React.createElement('textarea', {
      placeholder,
      value: controlledValue !== undefined ? controlledValue : value,
      disabled,
      onChange: handleChange,
      maxLength,
      style: textareaStyles,
    }),
    (error || hasMaxLength) && React.createElement(
      'div',
      { style: { display: 'flex', justifyContent: 'space-between', fontSize: '12px' } },
      error && React.createElement('span', {
        style: { color: colors.errorText },
      }, 'This field is required or invalid'),
      hasMaxLength && React.createElement('span', {
        style: { color: isFull ? colors.errorText : colors.text },
      }, `${charCount}/${maxLength}`)
    )
  );
};

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    isDarkMode: { control: 'boolean' },
    rows: { control: { type: 'range', min: 2, max: 10 } },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    maxLength: { control: 'number' },
  },
};

export const Default = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const WithMaxLength = {
  args: {
    label: 'Bio (max 200 characters)',
    placeholder: 'Tell us about yourself...',
    rows: 3,
    maxLength: 200,
  },
};

export const WithError = {
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments...',
    error: true,
    rows: 4,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Field',
    value: 'This field is disabled',
    disabled: true,
    rows: 4,
  },
};

export const DarkMode = {
  args: {
    label: 'Dark Mode Textarea',
    placeholder: 'Type your message...',
    isDarkMode: true,
    rows: 4,
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
          { style: { maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '24px' } },
          React.createElement(Textarea, { label: 'Default', placeholder: 'Enter text...' }),
          React.createElement(Textarea, { label: 'With Max Length', placeholder: 'Max 100 chars', maxLength: 100 }),
          React.createElement(Textarea, { label: 'With Error', error: true }),
          React.createElement(Textarea, { label: 'Disabled', disabled: true, value: 'Disabled text' }),
        ),
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '40px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement(
          'div',
          { style: { maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '24px' } },
          React.createElement(Textarea, { label: 'Default', placeholder: 'Enter text...', isDarkMode: true }),
          React.createElement(Textarea, { label: 'With Max Length', placeholder: 'Max 100 chars', maxLength: 100, isDarkMode: true }),
          React.createElement(Textarea, { label: 'With Error', error: true, isDarkMode: true }),
          React.createElement(Textarea, { label: 'Disabled', disabled: true, value: 'Disabled text', isDarkMode: true }),
        ),
      )
    ),
};
