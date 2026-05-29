import React from 'react';

export default {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ColorPalette = () => {
  const colors = [
    { name: 'McDonald\'s Black', hex: '#292929', usage: 'Primary text, UI elements' },
    { name: 'McDonald\'s Red', hex: '#DA291C', usage: 'Primary actions, brand' },
    { name: 'McDonald\'s Green', hex: '#1F6437', usage: 'Success states' },
    { name: 'White', hex: '#FFFFFF', usage: 'Default background' },
    { name: 'Light Gray', hex: '#F5F5F5', usage: 'Subtle backgrounds' },
    { name: 'Medium Gray', hex: '#E8E8E8', usage: 'Borders, dividers' },
    { name: 'Dark Gray', hex: '#757575', usage: 'Secondary text' },
    { name: 'Success Green', hex: '#4CAF50', usage: 'Positive feedback' },
    { name: 'Warning Yellow', hex: '#FFC107', usage: 'Cautionary feedback' },
    { name: 'Error Red', hex: '#F44336', usage: 'Error feedback' },
    { name: 'Info Blue', hex: '#2196F3', usage: 'Informational feedback' },
  ];

  return React.createElement(
    'div',
    { style: { padding: '40px', fontFamily: 'system-ui' } },
    React.createElement('h1', null, 'McDonald\'s Dashboard Color Palette'),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px', marginTop: '40px' } },
      colors.map((color) =>
        React.createElement(
          'div',
          { key: color.hex, style: { border: '1px solid #E8E8E8', borderRadius: '8px', overflow: 'hidden' } },
          React.createElement('div', { style: { backgroundColor: color.hex, height: '120px' } }),
          React.createElement(
            'div',
            { style: { padding: '16px' } },
            React.createElement('h3', { style: { margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' } }, color.name),
            React.createElement('code', { style: { display: 'block', fontSize: '12px', color: '#757575', marginBottom: '8px' } }, color.hex),
            React.createElement('p', { style: { margin: 0, fontSize: '12px', color: '#757575' } }, color.usage)
          )
        )
      )
    )
  );
};
