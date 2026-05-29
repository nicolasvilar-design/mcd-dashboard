import React from 'react';

export default {
  title: 'Foundations/Grids & Layouts',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ResponsiveGrids = () => {
  const breakpoints = [
    {
      name: 'Small',
      width: '320px',
      columns: 4,
      columnWidth: 'auto',
      type: 'stretch',
      margin: '16px',
      gutter: '32px',
      useCase: 'Mobile phones, small screens',
    },
    {
      name: 'Medium',
      width: '672px',
      columns: 8,
      columnWidth: 'auto',
      type: 'stretch',
      margin: '32px',
      gutter: '32px',
      useCase: 'Tablets in portrait mode',
    },
    {
      name: 'Large',
      width: '1056px',
      columns: 8,
      columnWidth: 'auto',
      type: 'stretch',
      margin: '32px',
      gutter: '32px',
      useCase: 'Tablets in landscape, small desktops',
    },
    {
      name: 'X-Large',
      width: '1312px',
      columns: 8,
      columnWidth: 'auto',
      type: 'stretch',
      margin: '32px',
      gutter: '32px',
      useCase: 'Standard desktops',
    },
    {
      name: 'Max',
      width: '1584px',
      columns: 8,
      columnWidth: 'auto',
      type: 'stretch',
      margin: '32px',
      gutter: '32px',
      useCase: 'Large desktops',
    },
    {
      name: 'Max Plus',
      width: '1784px',
      columns: 16,
      columnWidth: '66px',
      type: 'center',
      margin: '66px',
      gutter: '32px',
      useCase: 'Ultra-wide displays, enterprise',
    },
  ];

  return React.createElement(
    'div',
    { style: { padding: '60px', fontFamily: 'system-ui', backgroundColor: '#FFFFFF' } },
    React.createElement('h1', { style: { margin: '0 0 16px 0' } }, 'Responsive Grid System'),
    React.createElement(
      'p',
      { style: { margin: '0 0 48px 0', fontSize: '16px', color: '#757575', maxWidth: '800px' } },
      'McDonald\'s Dashboard utiliza un sistema de grillas responsive adaptado a 6 breakpoints. El gutter consistente (32px) garantiza armonía visual en todos los tamaños.'
    ),

    // Breakpoints Table
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, 'Breakpoints'),
    React.createElement(
      'table',
      { style: { width: '100%', borderCollapse: 'collapse', marginBottom: '48px' } },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          { style: { borderBottom: '2px solid #E8E8E8', backgroundColor: '#F5F5F5' } },
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Breakpoint'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Width'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Columns'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Col Width'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Type'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Margin'),
          React.createElement('th', { style: { padding: '16px', textAlign: 'left', fontWeight: '600', color: '#292929' } }, 'Gutter'),
        )
      ),
      React.createElement(
        'tbody',
        null,
        breakpoints.map((bp) =>
          React.createElement(
            'tr',
            { key: bp.name, style: { borderBottom: '1px solid #E8E8E8' } },
            React.createElement(
              'td',
              { style: { padding: '16px', fontWeight: '600', color: '#292929' } },
              bp.name
            ),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, bp.width),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, bp.columns),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, bp.columnWidth),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, bp.type),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, bp.margin),
            React.createElement('td', { style: { padding: '16px', color: '#757575' } }, bp.gutter)
          )
        )
      )
    ),

    // Visual representations
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, 'Visual Grid Examples'),
    breakpoints.slice(0, 4).map((bp) =>
      React.createElement(
        'div',
        { key: bp.name, style: { marginBottom: '48px' } },
        React.createElement('h3', { style: { margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600', color: '#292929' } }, bp.name, ' (', bp.width, ')'),
        React.createElement('p', { style: { margin: '0 0 16px 0', fontSize: '14px', color: '#757575' } }, bp.useCase),
        React.createElement(
          'div',
          { style: { backgroundColor: '#F5F5F5', padding: '24px', borderRadius: '8px', border: '1px solid #E8E8E8' } },
          React.createElement(
            'div',
            {
              style: {
                display: 'grid',
                gridTemplateColumns: `repeat(${bp.columns}, 1fr)`,
                gap: '16px',
                backgroundColor: '#FFFFFF',
                padding: `0 ${bp.margin}`,
              },
            },
            ...Array.from({ length: bp.columns }).map((_, i) =>
              React.createElement(
                'div',
                {
                  key: i,
                  style: {
                    backgroundColor: '#FFBC0D',
                    height: '120px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#292929',
                    fontWeight: '600',
                  },
                },
                `Col ${i + 1}`
              )
            )
          ),
          React.createElement(
            'p',
            { style: { margin: '16px 0 0 0', fontSize: '12px', color: '#757575' } },
            'Gutter: ',
            bp.gutter,
            ' | Margin: ',
            bp.margin
          )
        )
      )
    ),

    // Layout patterns
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, 'Common Layout Patterns'),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' } },
      // Single column pattern
      React.createElement(
        'div',
        null,
        React.createElement('h4', { style: { margin: '0 0 16px 0', color: '#292929' } }, 'Full Width'),
        React.createElement(
          'div',
          { style: { backgroundColor: '#F5F5F5', padding: '24px', borderRadius: '8px' } },
          React.createElement('div', {
            style: {
              backgroundColor: '#FFBC0D',
              height: '80px',
              borderRadius: '4px',
              marginBottom: '12px',
            },
          }),
          React.createElement('p', { style: { margin: 0, fontSize: '12px', color: '#757575' } }, 'Spans all columns')
        )
      ),
      // Two column pattern
      React.createElement(
        'div',
        null,
        React.createElement('h4', { style: { margin: '0 0 16px 0', color: '#292929' } }, '2 Column Split'),
        React.createElement(
          'div',
          { style: { backgroundColor: '#F5F5F5', padding: '24px', borderRadius: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' } },
          React.createElement('div', { style: { backgroundColor: '#FFBC0D', height: '80px', borderRadius: '4px' } }),
          React.createElement('div', { style: { backgroundColor: '#D6D6D6', height: '80px', borderRadius: '4px' } })
        )
      ),
      // Sidebar pattern
      React.createElement(
        'div',
        null,
        React.createElement('h4', { style: { margin: '0 0 16px 0', color: '#292929' } }, 'Sidebar Layout'),
        React.createElement(
          'div',
          { style: { backgroundColor: '#F5F5F5', padding: '24px', borderRadius: '8px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '16px' } },
          React.createElement('div', { style: { backgroundColor: '#D6D6D6', height: '120px', borderRadius: '4px' } }),
          React.createElement('div', { style: { backgroundColor: '#FFBC0D', height: '120px', borderRadius: '4px' } })
        )
      ),
      // Asymmetric pattern
      React.createElement(
        'div',
        null,
        React.createElement('h4', { style: { margin: '0 0 16px 0', color: '#292929' } }, '3 Column (2-1-1)'),
        React.createElement(
          'div',
          { style: { backgroundColor: '#F5F5F5', padding: '24px', borderRadius: '8px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px' } },
          React.createElement('div', { style: { backgroundColor: '#FFBC0D', height: '80px', borderRadius: '4px' } }),
          React.createElement('div', { style: { backgroundColor: '#D6D6D6', height: '80px', borderRadius: '4px' } }),
          React.createElement('div', { style: { backgroundColor: '#D6D6D6', height: '80px', borderRadius: '4px' } })
        )
      )
    ),

    // Best practices
    React.createElement('h2', { style: { marginTop: '48px', marginBottom: '24px' } }, '📋 Best Practices'),
    React.createElement(
      'ul',
      { style: { margin: '0 0 32px 24px', lineHeight: 1.8 } },
      React.createElement('li', null, React.createElement('strong', null, 'Always use the grid:'), ' No valores arbitrarios de ancho'),
      React.createElement('li', null, React.createElement('strong', null, 'Respeta los márgenes:'), ' Mantén 16px (Small) o 32px (Medium+) en los lados'),
      React.createElement('li', null, React.createElement('strong', null, 'Gutter consistente:'), ' Usa 32px entre columnas'),
      React.createElement('li', null, React.createElement('strong', null, 'Responsive first:'), ' Diseña mobile primero, luego expande'),
      React.createElement('li', null, React.createElement('strong', null, 'Alineación:'), ' Usa align-items center para contenido vertical'),
      React.createElement('li', null, React.createElement('strong', null, 'Overflow handling:'), ' Los elementos pueden reflow dentro de la grilla'),
    )
  );
};
