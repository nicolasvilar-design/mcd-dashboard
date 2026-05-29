import React from 'react';

export default {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Intro = () => {
  return React.createElement(
    'div',
    { style: { padding: '60px', fontFamily: 'system-ui', maxWidth: '1000px', margin: '0 auto', lineHeight: 1.6 } },
    React.createElement('h1', { style: { fontSize: '48px', margin: '0 0 24px 0', color: '#292929' } }, '🍔 McDonald\'s Dashboard Design System'),
    React.createElement('p', { style: { fontSize: '18px', color: '#757575', margin: '0 0 32px 0' } }, 'Documentación completa de componentes, tokens y patrones para el Dashboard McDonald\'s.'),

    React.createElement('h2', { style: { fontSize: '28px', margin: '48px 0 24px 0', color: '#292929', borderBottom: '2px solid #FFC600', paddingBottom: '12px' } }, '📦 Foundations'),
    React.createElement('p', { style: { fontSize: '16px', color: '#757575', margin: '0 0 16px 0' } }, 'Sistema de diseño base con tokens reutilizables:'),
    React.createElement(
      'ul',
      { style: { margin: '0 0 32px 24px', paddingLeft: 0 } },
      React.createElement('li', { style: { marginBottom: '8px' } }, React.createElement('strong', null, 'Colors:'), ' Paleta primaria (amarillo), secundaria (gris), neutral y estados'),
      React.createElement('li', { style: { marginBottom: '8px' } }, React.createElement('strong', null, 'Typography:'), ' Speedee (headings), Segoe UI (body), escalas H1-H5'),
      React.createElement('li', { style: { marginBottom: '8px' } }, React.createElement('strong', null, 'Spacing:'), ' Sistema 8-point, escalable y consistente'),
      React.createElement('li', null, React.createElement('strong', null, 'Effects:'), ' Shadows, borders, y animaciones 150ms-500ms')
    ),

    React.createElement('h2', { style: { fontSize: '28px', margin: '48px 0 24px 0', color: '#292929', borderBottom: '2px solid #FFC600', paddingBottom: '12px' } }, '🎛️ Components'),
    React.createElement('p', { style: { fontSize: '16px', color: '#757575', margin: '0 0 16px 0' } }, 'Componentes reutilizables y accesibles:'),
    React.createElement(
      'ul',
      { style: { margin: '0 0 32px 24px', paddingLeft: 0 } },
      React.createElement('li', { style: { marginBottom: '8px' } }, 'Button (3 variants, 3 sizes)'),
      React.createElement('li', { style: { marginBottom: '8px' } }, 'Card, Checkbox, Toggle'),
      React.createElement('li', { style: { marginBottom: '8px' } }, 'Input, Radio Button, Dropdown'),
      React.createElement('li', null, 'And more coming soon...')
    ),

    React.createElement('h2', { style: { fontSize: '28px', margin: '48px 0 24px 0', color: '#292929', borderBottom: '2px solid #FFC600', paddingBottom: '12px' } }, '📋 Status'),
    React.createElement(
      'div',
      { style: { backgroundColor: '#F5F5F5', padding: '24px', borderRadius: '8px', border: '1px solid #E8E8E8' } },
      React.createElement('p', { style: { margin: '0 0 12px 0', fontWeight: '600', color: '#292929' } }, '🚀 Phase 1: Foundations & Core Components'),
      React.createElement('p', { style: { margin: 0, fontSize: '14px', color: '#757575' } }, 'Tokens documentation ✅ | Button component ✅ | Card component 🔄')
    )
  );
};
