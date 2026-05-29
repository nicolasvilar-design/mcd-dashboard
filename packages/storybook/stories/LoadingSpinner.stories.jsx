import React from 'react';

const LoadingSpinner = ({
  size = 'medium',
  isDarkMode = false,
  label,
}) => {
  const sizes = {
    small: { width: '24px', height: '24px', borderWidth: '2px' },
    medium: { width: '40px', height: '40px', borderWidth: '3px' },
    large: { width: '56px', height: '56px', borderWidth: '4px' },
  };

  const colors = isDarkMode ? '#FFBC0D' : '#FFBC0D';
  const sizeStyle = sizes[size];

  const spinnerStyles = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', fontFamily: 'system-ui' } },
    React.createElement(
      'style',
      null,
      spinnerStyles
    ),
    React.createElement('div', {
      style: {
        width: sizeStyle.width,
        height: sizeStyle.height,
        border: `${sizeStyle.borderWidth} solid ${isDarkMode ? '#4B4B4B' : '#E8E8E8'}`,
        borderTop: `${sizeStyle.borderWidth} solid ${colors}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      },
    }),
    label && React.createElement('span', {
      style: {
        fontSize: '14px',
        color: isDarkMode ? '#FFFFFF' : '#292929',
        fontWeight: '500',
      },
    }, label)
  );
};

export default {
  title: 'Components/Loading Spinner',
  component: LoadingSpinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    isDarkMode: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const Small = {
  args: { size: 'small' },
};

export const Medium = {
  args: { size: 'medium' },
};

export const Large = {
  args: { size: 'large' },
};

export const WithLabel = {
  args: { size: 'medium', label: 'Loading...' },
};

export const DarkMode = {
  args: { size: 'medium', isDarkMode: true, label: 'Loading in dark mode' },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllSizes = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', gap: '48px', alignItems: 'flex-start' } },
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 24px 0', fontSize: '16px', fontWeight: '600' } }, 'Small'),
        React.createElement(LoadingSpinner, { size: 'small', label: 'Small' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 24px 0', fontSize: '16px', fontWeight: '600' } }, 'Medium'),
        React.createElement(LoadingSpinner, { size: 'medium', label: 'Medium' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 24px 0', fontSize: '16px', fontWeight: '600' } }, 'Large'),
        React.createElement(LoadingSpinner, { size: 'large', label: 'Large' })
      )
    ),
};
