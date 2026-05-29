import React from 'react';

const EmptyState = ({
  icon = '📭',
  title = 'No items',
  description = 'There are no items to display.',
  actionLabel,
  isDarkMode = false,
  onAction,
}) => {
  const colors = isDarkMode
    ? { text: '#FFFFFF', secondaryText: '#ADADAD', bg: '#1A1A1A' }
    : { text: '#292929', secondaryText: '#757575', bg: '#F9F9F9' };

  return React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 24px',
        backgroundColor: colors.bg,
        borderRadius: '8px',
        border: `1px solid ${isDarkMode ? '#4B4B4B' : '#D6D6D6'}`,
        textAlign: 'center',
        minHeight: '300px',
      },
    },
    React.createElement('div', { style: { fontSize: '64px', marginBottom: '16px' } }, icon),
    React.createElement('h3', {
      style: {
        margin: '0 0 12px 0',
        fontSize: '20px',
        fontWeight: '600',
        color: colors.text,
        fontFamily: 'Speedee, system-ui, sans-serif',
      },
    }, title),
    React.createElement('p', {
      style: {
        margin: '0 0 24px 0',
        fontSize: '14px',
        color: colors.secondaryText,
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        maxWidth: '400px',
      },
    }, description),
    actionLabel && React.createElement(
      'button',
      {
        onClick: onAction,
        style: {
          padding: '8px 24px',
          backgroundColor: '#FFBC0D',
          color: '#292929',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: '600',
          fontFamily: 'Segoe UI, system-ui, sans-serif',
          fontSize: '14px',
        },
      },
      actionLabel
    )
  );
};

export default {
  title: 'Components/Empty State',
  component: EmptyState,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    isDarkMode: { control: 'boolean' },
    icon: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    actionLabel: { control: 'text' },
  },
};

export const Default = {
  args: {
    icon: '📭',
    title: 'No results',
    description: 'We couldn\'t find what you\'re looking for.',
  },
};

export const WithAction = {
  args: {
    icon: '🎉',
    title: 'Ready to get started?',
    description: 'Create your first item to begin.',
    actionLabel: 'Create Item',
  },
};

export const NoData = {
  args: {
    icon: '📊',
    title: 'No data available',
    description: 'There\'s no data to display yet. Check back later.',
  },
};

export const DarkMode = {
  args: {
    isDarkMode: true,
    title: 'Empty in dark mode',
    description: 'This is an empty state component in dark mode.',
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
        React.createElement(EmptyState, {
          icon: '📭',
          title: 'No items',
          description: 'There are no items to display.',
          actionLabel: 'Create New',
        })
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement(EmptyState, {
          icon: '📭',
          title: 'No items',
          description: 'There are no items to display.',
          isDarkMode: true,
          actionLabel: 'Create New',
        })
      )
    ),
};
