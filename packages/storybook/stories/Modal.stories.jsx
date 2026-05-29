import React, { useState } from 'react';

const Modal = ({
  title,
  children,
  isOpen = false,
  isDarkMode = false,
  onClose,
  size = 'medium',
}) => {
  const modes = {
    light: {
      overlay: 'rgba(0, 0, 0, 0.5)',
      background: '#FFFFFF',
      text: '#292929',
      border: '#D6D6D6',
    },
    dark: {
      overlay: 'rgba(0, 0, 0, 0.7)',
      background: '#2A2A2A',
      text: '#FFFFFF',
      border: '#4B4B4B',
    },
  };

  const sizes = {
    small: '400px',
    medium: '600px',
    large: '800px',
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  if (!isOpen) return null;

  return React.createElement(
    'div',
    {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.overlay,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      },
    },
    React.createElement(
      'div',
      {
        style: {
          backgroundColor: colors.background,
          borderRadius: '8px',
          width: sizes[size],
          maxWidth: '90vw',
          boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
        },
      },
      React.createElement(
        'div',
        { style: { padding: '24px', borderBottom: `1px solid ${colors.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
        React.createElement('h2', { style: { margin: 0, fontSize: '20px', fontWeight: 'bold', color: colors.text } }, title),
        React.createElement(
          'button',
          {
            onClick: onClose,
            style: {
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: colors.text,
            },
          },
          '✕'
        )
      ),
      React.createElement('div', { style: { padding: '24px', color: colors.text } }, children),
      React.createElement(
        'div',
        { style: { padding: '24px', borderTop: `1px solid ${colors.border}`, display: 'flex', gap: '12px', justifyContent: 'flex-end' } },
        React.createElement(
          'button',
          {
            onClick: onClose,
            style: {
              padding: '8px 24px',
              backgroundColor: '#D6D6D6',
              color: '#292929',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
            },
          },
          'Cancel'
        ),
        React.createElement(
          'button',
          {
            onClick: onClose,
            style: {
              padding: '8px 24px',
              backgroundColor: '#FFBC0D',
              color: '#292929',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
            },
          },
          'Confirm'
        )
      )
    )
  );
};

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    isDarkMode: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    title: { control: 'text' },
  },
};

export const Closed = {
  args: {
    title: 'Modal Title',
    isOpen: false,
  },
};

export const Open = {
  args: {
    title: 'Confirm Action',
    isOpen: true,
    children: 'Are you sure you want to delete this item? This action cannot be undone.',
  },
};

export const DarkMode = {
  args: {
    title: 'Dark Modal',
    isOpen: true,
    isDarkMode: true,
    children: 'This is a modal in dark mode.',
  },
};

export const AllSizes = {
  render: () => {
    const [openSize, setOpenSize] = useState('medium');

    return React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui' } },
      React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Modal Sizes'),
      React.createElement(
        'div',
        { style: { display: 'flex', gap: '12px', marginBottom: '32px' } },
        ['small', 'medium', 'large'].map((size) =>
          React.createElement(
            'button',
            {
              key: size,
              onClick: () => setOpenSize(size),
              style: {
                padding: '8px 16px',
                backgroundColor: openSize === size ? '#FFBC0D' : '#D6D6D6',
                color: '#292929',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600',
                textTransform: 'capitalize',
              },
            },
            size
          )
        )
      ),
      React.createElement(Modal, {
        title: `Modal - ${openSize.toUpperCase()}`,
        isOpen: true,
        size: openSize,
        children: `This is a ${openSize} modal. It demonstrates different modal sizes for various use cases.`,
      })
    );
  },
};
