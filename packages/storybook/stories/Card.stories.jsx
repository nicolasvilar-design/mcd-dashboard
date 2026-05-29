import React from 'react';

const Card = ({
  title,
  description,
  image,
  variant = 'default',
  interactive = false,
  isDarkMode = false,
  children,
}) => {
  const modes = {
    light: {
      background: '#FFFFFF',
      border: '#D6D6D6',
      text: '#292929',
      secondaryText: '#757575',
      hoverBackground: '#F9F9F9',
      shadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    },
    dark: {
      background: '#2A2A2A',
      border: '#4B4B4B',
      text: '#FFFFFF',
      secondaryText: '#ADADAD',
      hoverBackground: '#333333',
      shadow: '0px 2px 12px rgba(0, 0, 0, 0.3)',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const baseStyles = {
    backgroundColor: colors.background,
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    padding: '24px',
    cursor: interactive ? 'pointer' : 'default',
    transition: interactive ? 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
    boxShadow: colors.shadow,
  };

  return React.createElement(
    'div',
    { style: baseStyles },
    image && React.createElement('img', {
      src: image,
      alt: title,
      style: {
        width: '100%',
        height: '160px',
        objectFit: 'cover',
        borderRadius: '4px',
        marginBottom: '16px',
      },
    }),
    title && React.createElement('h3', {
      style: {
        margin: '0 0 12px 0',
        fontSize: '18px',
        fontWeight: '600',
        fontFamily: 'Speedee, system-ui, sans-serif',
        color: colors.text,
      },
    }, title),
    description && React.createElement('p', {
      style: {
        margin: '0 0 16px 0',
        fontSize: '14px',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        color: colors.secondaryText,
        lineHeight: '1.5',
      },
    }, description),
    children,
  );
};

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'highlighted'],
    },
    interactive: {
      control: 'boolean',
    },
    isDarkMode: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    title: 'Card Title',
    description: 'This is a sample card component with title and description text.',
  },
};

export const WithAction = {
  args: {
    title: 'Action Card',
    description: 'Cards can include action buttons for user interactions.',
  },
  render: (args) => {
    return React.createElement(
      Card,
      args,
      React.createElement('button', {
        style: {
          padding: '8px 16px',
          backgroundColor: '#FFBC0D',
          border: 'none',
          borderRadius: '4px',
          fontWeight: '600',
          cursor: 'pointer',
          fontFamily: 'Segoe UI, system-ui, sans-serif',
          color: '#292929',
        },
      }, 'Learn More')
    );
  },
};

export const Interactive = {
  args: {
    title: 'Interactive Card',
    description: 'Hover over this card to see the interactive state.',
    interactive: true,
  },
};

export const DarkMode = {
  args: {
    title: 'Dark Mode Card',
    description: 'Cards adapt to dark mode with adjusted colors and contrast.',
    isDarkMode: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const AllStates = {
  render: () => {
    return React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', gap: '32px' } },
      React.createElement(
        'div',
        null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Light Mode Cards'),
        React.createElement(
          'div',
          { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' } },
          React.createElement(Card, {
            title: 'Default Card',
            description: 'Standard card with title and description.',
          }),
          React.createElement(Card, {
            title: 'Interactive Card',
            description: 'This card responds to user interactions.',
            interactive: true,
          }),
          React.createElement(
            Card,
            { title: 'Card with Action', description: 'Card with an action button.' },
            React.createElement('button', {
              style: {
                padding: '8px 16px',
                backgroundColor: '#FFBC0D',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'Segoe UI, system-ui, sans-serif',
              },
            }, 'Action Button')
          ),
        ),
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode Cards'),
        React.createElement(
          'div',
          { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
          React.createElement(Card, {
            title: 'Dark Card',
            description: 'Standard card in dark mode.',
            isDarkMode: true,
          }),
          React.createElement(Card, {
            title: 'Dark Interactive',
            description: 'Interactive card in dark mode.',
            interactive: true,
            isDarkMode: true,
          }),
        ),
      ),
    );
  },
};
