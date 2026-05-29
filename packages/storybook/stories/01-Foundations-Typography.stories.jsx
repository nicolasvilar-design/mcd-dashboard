import React from 'react';

export default {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
  },
};

export const TypographyScale = () => {
  const typographyScale = [
    // Display
    { level: 'Display 01', size: '68px', weight: 700, lineHeight: '80px', spacing: '-0.22%', family: 'Speedee', usage: 'Hero titles, main page headlines' },
    { level: 'Display 02', size: '56px', weight: 700, lineHeight: '60px', spacing: '-0.42%', family: 'Speedee', usage: 'Large section headings' },

    // Headlines
    { level: 'Headline 01', size: '48px', weight: 700, lineHeight: '56px', spacing: '-0.47%', family: 'Speedee', usage: 'Page titles' },
    { level: 'Headline 02', size: '40px', weight: 700, lineHeight: '48px', spacing: '-0.52%', family: 'Speedee', usage: 'Major section titles' },
    { level: 'Headline 03', size: '32px', weight: 700, lineHeight: '40px', spacing: '-0.63%', family: 'Speedee', usage: 'Section headers' },
    { level: 'Headline 04', size: '28px', weight: 700, lineHeight: '36px', spacing: '-0.73%', family: 'Speedee', usage: 'Subsection headers' },
    { level: 'Headline 05', size: '24px', weight: 700, lineHeight: '32px', spacing: '-0.84%', family: 'Speedee', usage: 'Card titles, component headers' },
    { level: 'Headline 06', size: '20px', weight: 700, lineHeight: '28px', spacing: '-1.05%', family: 'Speedee', usage: 'Small section titles' },

    // Body
    { level: 'Body 01', size: '18px', weight: 400, lineHeight: '28px', spacing: '-0.22%', family: 'Segoe UI', usage: 'Long-form body text' },
    { level: 'Body 02', size: '16px', weight: 400, lineHeight: '24px', spacing: '-0.31%', family: 'Segoe UI', usage: 'Regular body text, descriptions' },
    { level: 'Body 03', size: '14px', weight: 400, lineHeight: '20px', spacing: '-0.42%', family: 'Segoe UI', usage: 'Small body text, secondary info' },
    { level: 'Body 04', size: '12px', weight: 400, lineHeight: '16px', spacing: '-1.25%', family: 'Segoe UI', usage: 'Captions, small text, metadata' },

    // Labels
    { level: 'Label 01', size: '14px', weight: 600, lineHeight: '20px', spacing: '-0.42%', family: 'Segoe UI', usage: 'Form labels, button text' },
    { level: 'Label 02', size: '12px', weight: 600, lineHeight: '16px', spacing: '-1.25%', family: 'Segoe UI', usage: 'Small labels, tags, badges' },
  ];

  return React.createElement(
    'div',
    { style: { padding: '60px', fontFamily: 'system-ui', maxWidth: '1400px', margin: '0 auto' } },
    React.createElement('h1', { style: { margin: '0 0 16px 0' } }, 'Typography System'),
    React.createElement(
      'p',
      { style: { margin: '0 0 48px 0', fontSize: '16px', color: '#757575', maxWidth: '900px' } },
      'McDonald\'s Dashboard utiliza dos familias tipográficas principales: Speedee (Speedee-Bold en headings) para títulos y jerarquía, y Segoe UI para contenido de cuerpo. El sistema incluye escales Display, Headline, Body y Label para crear una jerarquía visual clara.'
    ),

    // Font Families
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, 'Familias Tipográficas'),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '48px' } },
      React.createElement(
        'div',
        { style: { padding: '32px', backgroundColor: '#F5F5F5', borderRadius: '8px', border: '1px solid #E8E8E8' } },
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' } }, 'Speedee (Headings)'),
        React.createElement('p', { style: { margin: '0 0 12px 0', fontSize: '14px', fontFamily: '"Speedee", sans-serif', color: '#292929', fontWeight: 'bold' } }, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        React.createElement('p', { style: { margin: '0', fontSize: '13px', color: '#757575' } }, 'Bold weight (700) for all headlines. Creates strong visual hierarchy and emphasis.')
      ),
      React.createElement(
        'div',
        { style: { padding: '32px', backgroundColor: '#F5F5F5', borderRadius: '8px', border: '1px solid #E8E8E8' } },
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' } }, 'Segoe UI (Body)'),
        React.createElement('p', { style: { margin: '0 0 12px 0', fontSize: '14px', fontFamily: '"Segoe UI", sans-serif', color: '#292929' } }, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        React.createElement('p', { style: { margin: '0', fontSize: '13px', color: '#757575' } }, 'Regular weight (400) for body, semi-bold (600) for labels. Optimized for readability.')
      )
    ),

    // Typography Table
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, 'Complete Type Scale'),
    React.createElement(
      'table',
      { style: { width: '100%', borderCollapse: 'collapse', marginBottom: '48px' } },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          { style: { backgroundColor: '#F5F5F5', borderBottom: '2px solid #E8E8E8' } },
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Style'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Size'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Weight'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Line Height'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Letter Spacing'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Family'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Usage'),
        )
      ),
      React.createElement(
        'tbody',
        null,
        typographyScale.map((style) =>
          React.createElement(
            'tr',
            { key: style.level, style: { borderBottom: '1px solid #E8E8E8' } },
            React.createElement('td', { style: { padding: '16px', fontWeight: '600', color: '#292929' } }, style.level),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, style.size),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, style.weight),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, style.lineHeight),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, style.spacing),
            React.createElement('td', { style: { padding: '16px', color: '#757575', fontFamily: style.family } }, style.family),
            React.createElement('td', { style: { padding: '16px', color: '#757575', fontSize: '13px' } }, style.usage)
          )
        )
      )
    ),

    // Visual Examples
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, 'Visual Examples'),
    React.createElement(
      'div',
      { style: { display: 'grid', gap: '32px' } },
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' } }, 'Speedee Headlines'),
        React.createElement('div', { style: { fontSize: '68px', fontFamily: '"Speedee", sans-serif', fontWeight: 700, lineHeight: 1.2, margin: '16px 0' } }, 'Display 01'),
        React.createElement('div', { style: { fontSize: '40px', fontFamily: '"Speedee", sans-serif', fontWeight: 700, lineHeight: 1.3, margin: '16px 0' } }, 'Headline 02'),
        React.createElement('div', { style: { fontSize: '28px', fontFamily: '"Speedee", sans-serif', fontWeight: 700, lineHeight: 1.3, margin: '16px 0' } }, 'Headline 04'),
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' } }, 'Segoe UI Body & Labels'),
        React.createElement('div', { style: { fontSize: '18px', fontFamily: '"Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.5, margin: '16px 0', maxWidth: '600px' } }, 'This is Body 01 text. It\'s used for long-form content and main body text throughout the dashboard. It provides excellent readability on all screen sizes.'),
        React.createElement('div', { style: { fontSize: '14px', fontFamily: '"Segoe UI", sans-serif', fontWeight: 600, lineHeight: 1.4, margin: '16px 0' } }, 'Label 01 - Form Labels & Buttons'),
        React.createElement('div', { style: { fontSize: '12px', fontFamily: '"Segoe UI", sans-serif', fontWeight: 600, lineHeight: 1.3, margin: '16px 0', color: '#757575' } }, 'Label 02 - Small labels, tags, and captions'),
      )
    ),

    // Best Practices
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, '📋 Best Practices'),
    React.createElement(
      'ul',
      { style: { margin: '0 0 32px 24px', lineHeight: 1.8 } },
      React.createElement('li', null, React.createElement('strong', null, 'Jerarquía clara:'), ' Usa la escala completa, no saltes niveles'),
      React.createElement('li', null, React.createElement('strong', null, 'Legibilidad:'), ' Mantén line-height mínimo de 1.5 para body text'),
      React.createElement('li', null, React.createElement('strong', null, 'Contraste:'), ' Asegúrate que el color del texto cumpla WCAG AA (4.5:1)'),
      React.createElement('li', null, React.createElement('strong', null, 'Responsive:'), ' En mobile, reduce tamaños pero mantén proporciones'),
      React.createElement('li', null, React.createElement('strong', null, 'Espaciado:'), ' Usa spacing tokens entre elementos tipográficos'),
    )
  );
};
