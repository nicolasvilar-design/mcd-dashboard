import React from 'react';

const Alert = ({
  title,
  message,
  type = 'info',
  isDarkMode = false,
  onClose,
}) => {
  const types = {
    info: { light: { bg: '#E3F2FD', border: '#006BAE', text: '#006BAE' }, dark: { bg: '#1A3A50', border: '#56AFD1', text: '#56AFD1' } },
    success: { light: { bg: '#E8F5E9', border: '#1F6437', text: '#1F6437' }, dark: { bg: '#1A3A25', border: '#1F6437', text: '#66BB6A' } },
    warning: { light: { bg: '#FFF3E0', border: '#FE8234', text: '#FE8234' }, dark: { bg: '#3A2F1F', border: '#FE8234', text: '#FFB74D' } },
    error: { light: { bg: '#FFEBEE', border: '#DB0007', text: '#DB0007' }, dark: { bg: '#3A1F1F', border: '#DB0007', text: '#EF5350' } },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = types[type][mode];

  return React.createElement(
    'div',
    {
      style: {
        backgroundColor: colors.bg,
        border: `2px solid ${colors.border}`,
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
      },
    },
    React.createElement('span', { style: { fontSize: '20px', flexShrink: 0 } },
      type === 'info' ? 'ℹ️' : type === 'success' ? '✓' : type === 'warning' ? '⚠️' : '✕'
    ),
    React.createElement(
      'div',
      { style: { flex: 1 } },
      title && React.createElement('h4', {
        style: { margin: '0 0 4px 0', fontSize: '14px', fontWeight: 'bold', color: colors.text },
      }, title),
      React.createElement('p', {
        style: { margin: 0, fontSize: '13px', color: colors.text, lineHeight: '1.5' },
      }, message)
    ),
    onClose && React.createElement(
      'button',
      {
        onClick: onClose,
        style: {
          background: 'none',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer',
          color: colors.text,
          padding: 0,
          flexShrink: 0,
        },
      },
      '✕'
    )
  );
};

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    isDarkMode: { control: 'boolean' },
    title: { control: 'text' },
    message: { control: 'text' },
  },
};

export const Info = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'This is an informational message for the user.',
  },
};

export const Success = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Your action has been completed successfully.',
  },
};

export const Warning = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please review this important information.',
  },
};

export const Error = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'An error occurred while processing your request.',
  },
};

export const DarkMode = {
  args: {
    type: 'info',
    title: 'Dark Mode Alert',
    message: 'This alert displays in dark mode.',
    isDarkMode: true,
  },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllTypes = {
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
          { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          React.createElement(Alert, { type: 'info', title: 'Information', message: 'This is an info message.' }),
          React.createElement(Alert, { type: 'success', title: 'Success', message: 'Operation completed successfully.' }),
          React.createElement(Alert, { type: 'warning', title: 'Warning', message: 'Please be careful with this action.' }),
          React.createElement(Alert, { type: 'error', title: 'Error', message: 'Something went wrong.' })
        )
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          React.createElement(Alert, { type: 'info', title: 'Information', message: 'This is an info message.', isDarkMode: true }),
          React.createElement(Alert, { type: 'success', title: 'Success', message: 'Operation completed successfully.', isDarkMode: true }),
          React.createElement(Alert, { type: 'warning', title: 'Warning', message: 'Please be careful with this action.', isDarkMode: true }),
          React.createElement(Alert, { type: 'error', title: 'Error', message: 'Something went wrong.', isDarkMode: true })
        )
      )
    ),
};
