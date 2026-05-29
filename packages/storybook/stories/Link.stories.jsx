import React, { useState } from 'react';

const Link = ({
  label = 'Link',
  href = '#',
  disabled = false,
  isDarkMode = false,
  external = false,
  underline = 'hover',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colors = isDarkMode ? '#56AFD1' : '#0F62FE';
  const hoverColor = isDarkMode ? '#8AC6D1' : '#054ADA';
  const disabledColor = isDarkMode ? '#757575' : '#ADADAD';

  const getTextDecoration = () => {
    if (disabled) return 'none';
    if (underline === 'always') return 'underline';
    if (underline === 'hover' && isHovered) return 'underline';
    return 'none';
  };

  return React.createElement(
    'a',
    {
      href: disabled ? undefined : href,
      onClick: disabled ? (e) => e.preventDefault() : onClick,
      target: external && !disabled ? '_blank' : undefined,
      rel: external && !disabled ? 'noopener noreferrer' : undefined,
      onMouseEnter: () => !disabled && setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        color: disabled ? disabledColor : (isHovered ? hoverColor : colors),
        textDecoration: getTextDecoration(),
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: disabled ? 0.6 : 1,
      },
    },
    label,
    external && !disabled && React.createElement('span', { style: { marginLeft: '4px' } }, '↗')
  );
};

export default {
  title: 'Components/Link',
  component: Link,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isDarkMode: { control: 'boolean' },
    external: { control: 'boolean' },
    underline: { control: 'select', options: ['hover', 'always', 'never'] },
    label: { control: 'text' },
    href: { control: 'text' },
  },
};

export const Default = {
  args: { label: 'Click me', href: '#' },
};

export const External = {
  args: { label: 'External link', href: 'https://example.com', external: true },
};

export const Disabled = {
  args: { label: 'Disabled link', disabled: true },
};

export const AlwaysUnderlined = {
  args: { label: 'Always underlined', underline: 'always' },
};

export const NeverUnderlined = {
  args: { label: 'Never underlined', underline: 'never' },
};

export const DarkMode = {
  args: { label: 'Dark mode link', isDarkMode: true },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllStates = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', gap: '24px' } },
      React.createElement('div', null,
        React.createElement('p', { style: { margin: '0 0 12px 0', fontWeight: '600' } }, 'Light Mode'),
        React.createElement('div', { style: { display: 'flex', gap: '24px' } },
          React.createElement(Link, { label: 'Default' }),
          React.createElement(Link, { label: 'External', external: true }),
          React.createElement(Link, { label: 'Disabled', disabled: true })
        )
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('p', { style: { margin: '0 0 12px 0', fontWeight: '600', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement('div', { style: { display: 'flex', gap: '24px' } },
          React.createElement(Link, { label: 'Default', isDarkMode: true }),
          React.createElement(Link, { label: 'External', external: true, isDarkMode: true }),
          React.createElement(Link, { label: 'Disabled', disabled: true, isDarkMode: true })
        )
      )
    ),
};
