import React from 'react';

export default {
  title: 'Foundations/Effects & Animations',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Shadows = () => {
  return React.createElement(
    'div',
    { style: { padding: '40px', fontFamily: 'system-ui', maxWidth: '1000px', margin: '0 auto' } },
    React.createElement('h1', null, 'Effects & Animations'),
    React.createElement('h2', null, 'Elevation Shadows'),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginTop: '24px' } },
      React.createElement(
        'div',
        null,
        React.createElement('h3', null, 'Raised Down'),
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 16px 0' } }, '0px 2px 8px rgba(0, 0, 0, 0.12)'),
        React.createElement('div', {
          style: {
            height: '100px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)',
          },
        })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h3', null, 'Raised Up'),
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 16px 0' } }, '0px -2px 8px rgba(0, 0, 0, 0.12)'),
        React.createElement('div', {
          style: {
            height: '100px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.12)',
          },
        })
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h3', null, 'Floating'),
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 16px 0' } }, '0px 8px 24px rgba(0, 0, 0, 0.16)'),
        React.createElement('div', {
          style: {
            height: '100px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.16)',
          },
        })
      )
    ),
    React.createElement('h2', { style: { marginTop: '40px' } }, 'Animation Timings'),
    React.createElement(
      'table',
      { style: { width: '100%', marginTop: '24px', borderCollapse: 'collapse' } },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          { style: { borderBottom: '2px solid #E8E8E8' } },
          React.createElement('th', { style: { padding: '12px', textAlign: 'left', fontWeight: '600' } }, 'Duration'),
          React.createElement('th', { style: { padding: '12px', textAlign: 'left', fontWeight: '600' } }, 'Easing'),
          React.createElement('th', { style: { padding: '12px', textAlign: 'left', fontWeight: '600' } }, 'Usage')
        )
      ),
      React.createElement(
        'tbody',
        null,
        React.createElement(
          'tr',
          { style: { borderBottom: '1px solid #E8E8E8' } },
          React.createElement('td', { style: { padding: '12px' } }, '150ms'),
          React.createElement('td', { style: { padding: '12px' } }, 'cubic-bezier(0.4, 0, 0.2, 1)'),
          React.createElement('td', { style: { padding: '12px' } }, 'Hover states, quick feedback')
        ),
        React.createElement(
          'tr',
          { style: { borderBottom: '1px solid #E8E8E8' } },
          React.createElement('td', { style: { padding: '12px' } }, '300ms'),
          React.createElement('td', { style: { padding: '12px' } }, 'cubic-bezier(0.4, 0, 0.2, 1)'),
          React.createElement('td', { style: { padding: '12px' } }, 'Normal transitions, modal open/close')
        ),
        React.createElement(
          'tr',
          null,
          React.createElement('td', { style: { padding: '12px' } }, '500ms'),
          React.createElement('td', { style: { padding: '12px' } }, 'cubic-bezier(0.4, 0, 0.2, 1)'),
          React.createElement('td', { style: { padding: '12px' } }, 'Complex animations, page transitions')
        )
      )
    )
  );
};
