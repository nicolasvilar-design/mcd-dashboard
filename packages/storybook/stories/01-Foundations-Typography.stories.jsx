import React from 'react';

export default {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
  },
};

export const TypographyScale = () => {
  return React.createElement(
    'div',
    { style: { padding: '40px', fontFamily: 'system-ui', maxWidth: '1000px', margin: '0 auto' } },
    React.createElement('h1', null, 'Typography System'),
    React.createElement('h2', { style: { marginTop: '40px' } }, 'Headlines'),
    React.createElement(
      'div',
      { style: { display: 'grid', gap: '24px' } },
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0' } }, 'H1 - 28px'),
        React.createElement('h1', { style: { margin: 0, fontSize: '28px', fontWeight: 400 } }, 'Main Page Title')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0' } }, 'H2 - 24px'),
        React.createElement('h2', { style: { margin: 0, fontSize: '24px', fontWeight: 400 } }, 'Section Header')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0' } }, 'H3 - 24px'),
        React.createElement('h3', { style: { margin: 0, fontSize: '24px', fontWeight: 400 } }, 'Content Heading')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0' } }, 'H4 - 20px'),
        React.createElement('h4', { style: { margin: 0, fontSize: '20px', fontWeight: 400 } }, 'Subsection')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0' } }, 'H5 - 18px'),
        React.createElement('h5', { style: { margin: 0, fontSize: '18px', fontWeight: 500 } }, 'Block Title')
      )
    ),
    React.createElement('h2', { style: { marginTop: '40px' } }, 'Body Styles'),
    React.createElement(
      'div',
      { style: { display: 'grid', gap: '16px' } },
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0' } }, 'Body-01 - 16px'),
        React.createElement('p', { style: { margin: 0, fontSize: '16px', lineHeight: 1.5 } }, 'This is main content text. Used for primary body content throughout the dashboard.')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0' } }, 'Body-02 - 14px'),
        React.createElement('p', { style: { margin: 0, fontSize: '14px', lineHeight: 1.5 } }, 'This is secondary content text. Used for supporting information and descriptions.')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0' } }, 'Body-03 - 12px'),
        React.createElement('p', { style: { margin: 0, fontSize: '12px', lineHeight: 1.5 } }, 'This is small text. Used for hints, captions, and small supporting information.')
      )
    )
  );
};
