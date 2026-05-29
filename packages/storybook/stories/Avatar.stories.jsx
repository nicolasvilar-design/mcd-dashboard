import React from 'react';

const Avatar = ({
  initials = 'AB',
  image,
  size = 'medium',
  variant = 'default',
  isDarkMode = false,
}) => {
  const sizes = {
    small: { width: '32px', height: '32px', fontSize: '12px' },
    medium: { width: '48px', height: '48px', fontSize: '16px' },
    large: { width: '64px', height: '64px', fontSize: '20px' },
  };

  const variants = {
    default: { light: '#FFBC0D', dark: '#FFBC0D' },
    secondary: { light: '#006BAE', dark: '#56AFD1' },
    success: { light: '#1F6437', dark: '#1F6437' },
  };

  const sizeStyle = sizes[size];
  const mode = isDarkMode ? 'dark' : 'light';
  const bgColor = variants[variant][mode];
  const textColor = isDarkMode ? '#292929' : '#292929';

  return React.createElement(
    'div',
    {
      style: {
        width: sizeStyle.width,
        height: sizeStyle.height,
        borderRadius: '50%',
        backgroundColor: image ? 'transparent' : bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        border: image ? `2px solid ${isDarkMode ? '#757575' : '#D6D6D6'}` : 'none',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        fontWeight: '600',
        fontSize: sizeStyle.fontSize,
        color: textColor,
      },
    },
    image
      ? React.createElement('img', {
          src: image,
          alt: initials,
          style: { width: '100%', height: '100%', objectFit: 'cover' },
        })
      : initials
  );
};

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['default', 'secondary', 'success'] },
    isDarkMode: { control: 'boolean' },
    initials: { control: 'text' },
  },
};

export const Default = {
  args: { initials: 'JD' },
};

export const WithInitials = {
  args: { initials: 'NV' },
};

export const AllSizes = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', gap: '24px', alignItems: 'center', padding: '40px' } },
      React.createElement(Avatar, { initials: 'AB', size: 'small' }),
      React.createElement(Avatar, { initials: 'AB', size: 'medium' }),
      React.createElement(Avatar, { initials: 'AB', size: 'large' })
    ),
};

export const AllVariants = {
  render: () =>
    React.createElement(
      'div',
      { style: { display: 'flex', gap: '24px', alignItems: 'center', padding: '40px' } },
      React.createElement(Avatar, { initials: 'JD', variant: 'default' }),
      React.createElement(Avatar, { initials: 'AS', variant: 'secondary' }),
      React.createElement(Avatar, { initials: 'SU', variant: 'success' })
    ),
};

export const DarkMode = {
  args: { initials: 'DM', isDarkMode: true },
  parameters: { backgrounds: { default: 'dark' } },
};
