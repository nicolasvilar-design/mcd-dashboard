import React from 'react';

export default {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'fullscreen',
  },
};

export const SpacingScale = () => {
  const spacings = [
    { token: '0', value: '0px' },
    { token: '1', value: '4px' },
    { token: '2', value: '8px' },
    { token: '3', value: '12px' },
    { token: '4', value: '16px' },
    { token: '5', value: '20px' },
    { token: '6', value: '24px' },
    { token: '8', value: '32px' },
    { token: '12', value: '48px' },
    { token: '16', value: '64px' },
  ];

  return React.createElement(
    'div',
    { style: { padding: '40px', fontFamily: 'system-ui', maxWidth: '1000px', margin: '0 auto' } },
    React.createElement('h1', null, 'Spacing System (8-point scale)'),
    React.createElement('p', null, 'McDonald\'s Dashboard uses an 8-point spacing system based on the base unit of 4px.'),
    React.createElement(
      'div',
      { style: { marginTop: '40px', display: 'grid', gap: '32px' } },
      spacings.map((spacing) =>
        React.createElement(
          'div',
          { key: spacing.token },
          React.createElement(
            'div',
            { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' } },
            React.createElement('span', { style: { fontWeight: '600' } }, `Space-${spacing.token}`),
            React.createElement('code', null, spacing.value)
          ),
          React.createElement('div', {
            style: {
              backgroundColor: '#DA291C',
              height: spacing.value,
              minHeight: '4px',
              borderRadius: '4px',
            },
          })
        )
      )
    )
  );
};
