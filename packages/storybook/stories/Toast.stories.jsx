import React, { useState } from 'react';

const Toast = ({
  message,
  type = 'info',
  isDarkMode = false,
  autoClose = true,
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    if (autoClose && isVisible) {
      const timer = setTimeout(() => setIsVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, isVisible]);

  if (!isVisible) return null;

  const types = {
    info: { light: { bg: '#E3F2FD', border: '#006BAE', text: '#006BAE', icon: 'ℹ️' }, dark: { bg: '#1A3A50', border: '#56AFD1', text: '#56AFD1', icon: 'ℹ️' } },
    success: { light: { bg: '#E8F5E9', border: '#1F6437', text: '#1F6437', icon: '✓' }, dark: { bg: '#1A3A25', border: '#1F6437', text: '#66BB6A', icon: '✓' } },
    warning: { light: { bg: '#FFF3E0', border: '#FE8234', text: '#FE8234', icon: '⚠️' }, dark: { bg: '#3A2F1F', border: '#FE8234', text: '#FFB74D', icon: '⚠️' } },
    error: { light: { bg: '#FFEBEE', border: '#DB0007', text: '#DB0007', icon: '✕' }, dark: { bg: '#3A1F1F', border: '#DB0007', text: '#EF5350', icon: '✕' } },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const style = types[type][mode];

  return React.createElement(
    'div',
    {
      style: {
        backgroundColor: style.bg,
        border: `2px solid ${style.border}`,
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        maxWidth: '400px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
      },
    },
    React.createElement('span', { style: { fontSize: '18px' } }, style.icon),
    React.createElement('div', { style: { flex: 1 } },
      React.createElement('p', {
        style: {
          margin: 0,
          fontSize: '14px',
          color: style.text,
          fontFamily: 'Segoe UI, system-ui, sans-serif',
        },
      }, message)
    ),
    React.createElement(
      'button',
      {
        onClick: () => setIsVisible(false),
        style: {
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: style.text,
          fontSize: '16px',
          padding: 0,
        },
      },
      '✕'
    )
  );
};

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    isDarkMode: { control: 'boolean' },
    autoClose: { control: 'boolean' },
    duration: { control: 'number' },
    message: { control: 'text' },
  },
};

export const Info = {
  args: {
    type: 'info',
    message: 'This is an informational message.',
    autoClose: false,
  },
};

export const Success = {
  args: {
    type: 'success',
    message: 'Your action was successful!',
    autoClose: false,
  },
};

export const Warning = {
  args: {
    type: 'warning',
    message: 'Please review this important information.',
    autoClose: false,
  },
};

export const Error = {
  args: {
    type: 'error',
    message: 'An error occurred. Please try again.',
    autoClose: false,
  },
};

export const DarkMode = {
  args: {
    type: 'success',
    message: 'Dark mode toast notification.',
    isDarkMode: true,
    autoClose: false,
  },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllTypes = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' } },
      React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Toast Types'),
      React.createElement(Toast, { type: 'info', message: 'Information message', autoClose: false }),
      React.createElement(Toast, { type: 'success', message: 'Success message', autoClose: false }),
      React.createElement(Toast, { type: 'warning', message: 'Warning message', autoClose: false }),
      React.createElement(Toast, { type: 'error', message: 'Error message', autoClose: false })
    ),
};
