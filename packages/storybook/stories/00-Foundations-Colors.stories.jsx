import React from 'react';

export default {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ColorPalette = () => {
  const colors = [
    // Primary Brand Colors
    { name: 'McDonald\'s Gold', hex: '#FFBC0D', usage: 'Primary actions, brand highlight', category: 'PRIMARY' },
    { name: 'McDonald\'s Red', hex: '#DB0007', usage: 'Delete actions, destructive operations', category: 'PRIMARY' },
    { name: 'McDonald\'s Black', hex: '#292929', usage: 'Primary text, UI elements, titles', category: 'PRIMARY' },
    { name: 'McDonald\'s Green', hex: '#1F6437', usage: 'Success states, positive feedback', category: 'PRIMARY' },
    { name: 'White', hex: '#FFFFFF', usage: 'Default background, cards', category: 'PRIMARY' },

    // Secondary Colors
    { name: 'Blue', hex: '#006BAE', usage: 'Secondary actions, information', category: 'SECONDARY' },
    { name: 'Orange', hex: '#FE8234', usage: 'Warning states, alerts', category: 'SECONDARY' },
    { name: 'Dark Blue', hex: '#103C82', usage: 'Deep information states', category: 'SECONDARY' },
    { name: 'Light Blue', hex: '#56AFD1', usage: 'Light information backgrounds', category: 'SECONDARY' },
    { name: 'Fuschia', hex: '#9A0A4D', usage: 'Emphasis, highlights', category: 'SECONDARY' },
    { name: 'Beige', hex: '#B69A81', usage: 'Neutral accent, subtle backgrounds', category: 'SECONDARY' },

    // Neutral Colors
    { name: 'Ivory', hex: '#F9F9F9', usage: 'Page backgrounds, light surfaces', category: 'NEUTRAL' },
    { name: 'Light Grey', hex: '#D6D6D6', usage: 'Borders, secondary backgrounds', category: 'NEUTRAL' },
    { name: 'Grey', hex: '#ADADAD', usage: 'Disabled text, secondary content', category: 'NEUTRAL' },
    { name: 'Dark Grey', hex: '#6F6F6F', usage: 'Body text, descriptions', category: 'NEUTRAL' },

    // Disabled States
    { name: 'Gold Disabled', hex: '#FFE49E', usage: 'Disabled primary buttons', category: 'DISABLED' },
    { name: 'Blue Disabled', hex: '#CCF0FF', usage: 'Disabled info states', category: 'DISABLED' },
    { name: 'Purple Disabled', hex: '#EEE3FF', usage: 'Disabled purple elements', category: 'DISABLED' },
    { name: 'Red Disabled', hex: '#FFCEC4', usage: 'Disabled delete actions', category: 'DISABLED' },
    { name: 'Green Disabled', hex: '#E2EABF', usage: 'Disabled success states', category: 'DISABLED' },

    // Semantic States
    { name: 'Dark Red', hex: '#9A0005', usage: 'Pressed/active delete states', category: 'SEMANTIC' },
    { name: 'Accent Gold', hex: '#C08B00', usage: 'Hover/focus gold states', category: 'SEMANTIC' },
    { name: 'Accent Grey', hex: '#959595', usage: 'Hover/focus grey states', category: 'SEMANTIC' },
    { name: 'Accent Red', hex: '#FA4D56', usage: 'Hover/focus red states', category: 'SEMANTIC' },

    // Link States
    { name: 'Link', hex: '#0F62FE', usage: 'Default link color', category: 'LINKS' },
    { name: 'Link Hover', hex: '#054ADA', usage: 'Hovered link color', category: 'LINKS' },
    { name: 'Link Visited', hex: '#8a3ffc', usage: 'Visited link color', category: 'LINKS' },
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
