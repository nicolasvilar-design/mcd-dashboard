import React from 'react';

export default {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component:
'Escala de espaciado base 8px. La escala canónica del DS vive en `_tokens.js` (`space`): 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64. Los valores Figma se nombran -000/-050/100/200/300/400/500.' } },
  },
};

export const SpacingScale = () => {
  const spacings = [
    { token: '0', value: '0px', base: '0', usage: 'No space', example: 'Adjacent elements when needed' },
    { token: '1', value: '4px', base: '1x', usage: 'Minimum gap', example: 'Icon to text, tight pairs' },
    { token: '2', value: '8px', base: '2x', usage: 'XS gap', example: 'Small component gaps' },
    { token: '3', value: '12px', base: '3x', usage: 'Small gap', example: 'Form field spacing' },
    { token: '4', value: '16px', base: '4x', usage: 'Base spacing', example: 'Standard component padding, section gaps' },
    { token: '5', value: '20px', base: '5x', usage: 'Medium gap', example: 'Card padding, component spacing' },
    { token: '6', value: '24px', base: '6x', usage: 'Large gap', example: 'Large section margins, containers' },
    { token: '7', value: '28px', base: '7x', usage: 'Extra large', example: 'Between major sections' },
    { token: '8', value: '32px', base: '8x', usage: 'XL spacing', example: 'Major section gaps, grid gutters' },
    { token: '9', value: '36px', base: '9x', usage: 'XXL spacing', example: 'Large content spacing' },
    { token: '10', value: '40px', base: '10x', usage: 'Page spacing', example: 'Top/bottom page margins' },
    { token: '12', value: '48px', base: '12x', usage: 'Large container', example: 'Container padding, major separation' },
    { token: '14', value: '56px', base: '14x', usage: 'Extra large container', example: 'Page-level spacing' },
    { token: '16', value: '64px', base: '16x', usage: 'XXL container', example: 'Full page sections' },
    { token: '20', value: '80px', base: '20x', usage: 'Huge spacing', example: 'Major page-level gaps' },
    { token: '24', value: '96px', base: '24x', usage: 'Maximum spacing', example: 'Large page sections' },
  ];

  return React.createElement(
    'div',
    { style: { padding: '60px', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto' } },
    React.createElement('h1', { style: { margin: '0 0 16px 0' } }, 'Spacing System'),
    React.createElement(
      'p',
      { style: { margin: '0 0 48px 0', fontSize: '16px', color: '#757575', maxWidth: '900px' } },
      'McDonald\'s Dashboard utiliza un sistema de espaciado 8px base (múltiplos de 4px y 8px) que asegura consistencia, escalabilidad y un diseño harmonioso. Todo espaciado debe usar tokens en lugar de valores arbitrarios.'
    ),

    // Spacing Table
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, 'Complete Spacing Scale'),
    React.createElement(
      'table',
      { style: { width: '100%', borderCollapse: 'collapse', marginBottom: '48px' } },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          { style: { backgroundColor: '#F5F5F5', borderBottom: '2px solid #E8E8E8' } },
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Token'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Pixels'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Base'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Use Case'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Example'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Visual'),
        )
      ),
      React.createElement(
        'tbody',
        null,
        spacings.map((spacing) =>
          React.createElement(
            'tr',
            { key: spacing.token, style: { borderBottom: '1px solid #E8E8E8' } },
            React.createElement('td', { style: { padding: '16px', fontWeight: '600', color: '#292929' } }, 'space-', spacing.token),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, spacing.value),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, spacing.base),
            React.createElement('td', { style: { padding: '16px', color: '#757575', fontWeight: '500' } }, spacing.usage),
            React.createElement('td', { style: { padding: '16px', color: '#757575', fontSize: '13px' } }, spacing.example),
            React.createElement(
              'td',
              { style: { padding: '16px' } },
              React.createElement('div', {
                style: {
                  backgroundColor: '#FFBC0D',
                  height: spacing.value,
                  minHeight: '2px',
                  borderRadius: '2px',
                  width: '120px',
                },
              })
            )
          )
        )
      )
    ),

    // Spacing Guidelines
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, 'Spacing Guidelines'),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginBottom: '48px' } },
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' } }, 'Padding (Internal Spacing)'),
        React.createElement('ul', { style: { margin: '0 0 0 24px', lineHeight: 2 } },
          React.createElement('li', null, React.createElement('strong', null, 'Buttons:'), ' space-3 (12px)'),
          React.createElement('li', null, React.createElement('strong', null, 'Form fields:'), ' space-4 (16px)'),
          React.createElement('li', null, React.createElement('strong', null, 'Cards:'), ' space-5 to space-6 (20-24px)'),
          React.createElement('li', null, React.createElement('strong', null, 'Containers:'), ' space-6 to space-8 (24-32px)'),
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' } }, 'Margin (External Spacing)'),
        React.createElement('ul', { style: { margin: '0 0 0 24px', lineHeight: 2 } },
          React.createElement('li', null, React.createElement('strong', null, 'Between elements:'), ' space-4 (16px)'),
          React.createElement('li', null, React.createElement('strong', null, 'Section separation:'), ' space-6 to space-8 (24-32px)'),
          React.createElement('li', null, React.createElement('strong', null, 'Major blocks:'), ' space-12+ (48px+)'),
          React.createElement('li', null, React.createElement('strong', null, 'Page top/bottom:'), ' space-10 to space-12 (40-48px)'),
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' } }, 'Grid Gaps (Flex/Grid)'),
        React.createElement('ul', { style: { margin: '0 0 0 24px', lineHeight: 2 } },
          React.createElement('li', null, React.createElement('strong', null, 'Compact:'), ' space-2 to space-3 (8-12px)'),
          React.createElement('li', null, React.createElement('strong', null, 'Standard:'), ' space-4 to space-6 (16-24px)'),
          React.createElement('li', null, React.createElement('strong', null, 'Loose:'), ' space-8+ (32px+)'),
          React.createElement('li', null, React.createElement('strong', null, 'Grid gutter:'), ' space-8 (32px) standard'),
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' } }, 'Responsive Adjustments'),
        React.createElement('ul', { style: { margin: '0 0 0 24px', lineHeight: 2 } },
          React.createElement('li', null, React.createElement('strong', null, 'Mobile (320px):'), ' -25% (use space-2, 4, 6)'),
          React.createElement('li', null, React.createElement('strong', null, 'Tablet (672px):'), ' 100% (standard scale)'),
          React.createElement('li', null, React.createElement('strong', null, 'Desktop (1056px+):'), ' 100% (standard scale)'),
          React.createElement('li', null, React.createElement('strong', null, 'Max (1784px):'), ' +25% optional (space-10, 12)'),
        )
      )
    ),

    // Visual Examples
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, 'Common Layout Patterns'),
    React.createElement(
      'div',
      { style: { display: 'grid', gap: '32px' } },
      // Form example
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' } }, 'Form Layout'),
        React.createElement(
          'div',
          { style: { backgroundColor: '#F5F5F5', padding: '32px', borderRadius: '8px', border: '1px solid #E8E8E8' } },
          React.createElement(
            'div',
            { style: { marginBottom: '24px' } },
            React.createElement('label', { style: { display: 'block', marginBottom: '8px', fontWeight: '500', color: '#292929' } }, 'Email'),
            React.createElement('input', {
              type: 'text',
              placeholder: 'email@example.com',
              style: {
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #E8E8E8',
                borderRadius: '4px',
                fontFamily: 'system-ui',
              },
            })
          ),
          React.createElement(
            'div',
            { style: { marginBottom: '24px' } },
            React.createElement('label', { style: { display: 'block', marginBottom: '8px', fontWeight: '500', color: '#292929' } }, 'Message'),
            React.createElement('textarea', {
              placeholder: 'Your message...',
              style: {
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #E8E8E8',
                borderRadius: '4px',
                fontFamily: 'system-ui',
                minHeight: '100px',
              },
            })
          ),
          React.createElement('button', {
            style: {
              padding: '12px 24px',
              backgroundColor: '#FFBC0D',
              border: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
            },
          }, 'Submit')
        ),
        React.createElement('p', { style: { margin: '16px 0 0 0', fontSize: '12px', color: '#757575' } }, 'Form field margin: space-6 (24px) | Field padding: space-3 (12px) | Label gap: space-2 (8px)')
      ),
      // Card example
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' } }, 'Card Component'),
        React.createElement(
          'div',
          { style: { backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '8px', border: '1px solid #E8E8E8', maxWidth: '300px' } },
          React.createElement('h4', { style: { margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' } }, 'Card Title'),
          React.createElement('p', { style: { margin: '0 0 16px 0', fontSize: '14px', color: '#757575', lineHeight: 1.5 } }, 'Card description with space-4 margin below for action button.'),
          React.createElement('button', {
            style: {
              padding: '8px 16px',
              backgroundColor: '#FFBC0D',
              border: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
            },
          }, 'Action')
        ),
        React.createElement('p', { style: { margin: '16px 0 0 0', fontSize: '12px', color: '#757575' } }, 'Card padding: space-5 (20px) | Title gap: space-3 (12px) | Content gap: space-4 (16px)')
      )
    ),

    // Best Practices
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, '📋 Best Practices'),
    React.createElement(
      'ul',
      { style: { margin: '0 0 32px 24px', lineHeight: 1.8 } },
      React.createElement('li', null, React.createElement('strong', null, 'Siempre usa tokens:'), ' Nunca valores arbitrarios de espaciado'),
      React.createElement('li', null, React.createElement('strong', null, 'Consistencia:'), ' Usa los mismos tokens en patrones similares'),
      React.createElement('li', null, React.createElement('strong', null, 'Respeto al grid:'), ' Mantén múltiplos de 4px'),
      React.createElement('li', null, React.createElement('strong', null, 'Breathing room:'), ' Más espaciado para destacar elementos importantes'),
      React.createElement('li', null, React.createElement('strong', null, 'Responsive:'), ' Reduce espaciado en mobile, mantén en desktop'),
    )
  );
};
