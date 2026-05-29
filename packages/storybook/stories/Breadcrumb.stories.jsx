import React from 'react';

const Breadcrumb = ({
  items = [],
  isDarkMode = false,
  onNavigate,
}) => {
  const modes = {
    light: {
      text: '#292929',
      linkText: '#006BAE',
      separator: '#ADADAD',
    },
    dark: {
      text: '#FFFFFF',
      linkText: '#56AFD1',
      separator: '#757575',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  return React.createElement(
    'nav',
    { style: { fontFamily: 'system-ui', fontSize: '14px' } },
    React.createElement(
      'ol',
      { style: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' } },
      items.map((item, index) =>
        React.createElement(
          React.Fragment,
          { key: index },
          index > 0 && React.createElement('span', { style: { color: colors.separator, margin: '0 4px' } }, '/'),
          index === items.length - 1
            ? React.createElement('span', { style: { color: colors.text, fontWeight: '500' } }, item.label)
            : React.createElement(
                'button',
                {
                  onClick: () => onNavigate?.(item.href),
                  style: {
                    background: 'none',
                    border: 'none',
                    color: colors.linkText,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontFamily: 'system-ui',
                    fontSize: '14px',
                  },
                },
                item.label
              )
        )
      )
    )
  );
};

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    isDarkMode: { control: 'boolean' },
  },
};

const sampleItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops', href: '/products/electronics/laptops' },
];

export const Default = {
  args: { items: sampleItems },
};

export const SimpleNav = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Settings', href: '/settings' },
    ],
  },
};

export const DarkMode = {
  args: { items: sampleItems, isDarkMode: true },
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
        React.createElement(Breadcrumb, { items: sampleItems })
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement(Breadcrumb, { items: sampleItems, isDarkMode: true })
      )
    ),
};
