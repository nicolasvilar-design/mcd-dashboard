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
    { style: { padding: '40px', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto' } },
    React.createElement('h1', null, 'Typography System'),
    React.createElement('p', { style: { fontSize: '16px', color: '#757575', marginBottom: '32px' } }, 'McDonald\'s Dashboard utiliza dos familias tipográficas: Speedee para headings y Segoe UI para body.'),

    // Font Families
    React.createElement('h2', { style: { marginTop: '40px', marginBottom: '24px' } }, 'Familias Tipográficas'),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' } },
      React.createElement(
        'div',
        { style: { padding: '24px', backgroundColor: '#F5F5F5', borderRadius: '8px', border: '1px solid #E8E8E8' } },
        React.createElement('h3', { style: { margin: '0 0 12px 0', fontSize: '16px' } }, 'Headings: Speedee'),
        React.createElement('p', { style: { margin: 0, fontSize: '14px', fontFamily: '"Speedee", sans-serif', color: '#292929' } }, 'Primary font for H1-H5')
      ),
      React.createElement(
        'div',
        { style: { padding: '24px', backgroundColor: '#F5F5F5', borderRadius: '8px', border: '1px solid #E8E8E8' } },
        React.createElement('h3', { style: { margin: '0 0 12px 0', fontSize: '16px' } }, 'Body: Segoe UI'),
        React.createElement('p', { style: { margin: 0, fontSize: '14px', fontFamily: '"Segoe UI", Roboto, sans-serif', color: '#292929' } }, 'Primary font for body text')
      )
    ),

    // Headlines
    React.createElement('h2', { style: { marginTop: '40px', marginBottom: '24px' } }, 'Headlines'),
    React.createElement(
      'div',
      { style: { display: 'grid', gap: '24px' } },
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0', fontWeight: '600' } }, 'H1 - 28px / Speedee / Weight 400'),
        React.createElement('h1', { style: { margin: 0, fontSize: '28px', fontWeight: 400, fontFamily: '"Speedee", sans-serif' } }, 'Main Page Title')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0', fontWeight: '600' } }, 'H2 - 24px / Speedee / Weight 400'),
        React.createElement('h2', { style: { margin: 0, fontSize: '24px', fontWeight: 400, fontFamily: '"Speedee", sans-serif' } }, 'Section Header')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0', fontWeight: '600' } }, 'H3 - 24px / Speedee / Weight 400'),
        React.createElement('h3', { style: { margin: 0, fontSize: '24px', fontWeight: 400, fontFamily: '"Speedee", sans-serif' } }, 'Content Heading')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0', fontWeight: '600' } }, 'H4 - 20px / Speedee / Weight 400'),
        React.createElement('h4', { style: { margin: 0, fontSize: '20px', fontWeight: 400, fontFamily: '"Speedee", sans-serif' } }, 'Subsection')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0', fontWeight: '600' } }, 'H5 - 18px / Speedee / Weight 500'),
        React.createElement('h5', { style: { margin: 0, fontSize: '18px', fontWeight: 500, fontFamily: '"Speedee", sans-serif' } }, 'Block Title')
      )
    ),

    // Body Styles
    React.createElement('h2', { style: { marginTop: '40px', marginBottom: '24px' } }, 'Body Styles'),
    React.createElement(
      'div',
      { style: { display: 'grid', gap: '16px' } },
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0', fontWeight: '600' } }, 'Body-01 - 16px / Segoe UI / Weight 400 / Line 1.5'),
        React.createElement('p', { style: { margin: 0, fontSize: '16px', lineHeight: 1.5, fontFamily: '"Segoe UI", Roboto, sans-serif' } }, 'This is main content text. Used for primary body content throughout the dashboard.')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0', fontWeight: '600' } }, 'Body-02 - 14px / Segoe UI / Weight 400 / Line 1.5'),
        React.createElement('p', { style: { margin: 0, fontSize: '14px', lineHeight: 1.5, fontFamily: '"Segoe UI", Roboto, sans-serif' } }, 'This is secondary content text. Used for supporting information and descriptions.')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { style: { fontSize: '12px', color: '#757575', margin: '0 0 8px 0', fontWeight: '600' } }, 'Body-03 - 12px / Segoe UI / Weight 400 / Line 1.5'),
        React.createElement('p', { style: { margin: 0, fontSize: '12px', lineHeight: 1.5, fontFamily: '"Segoe UI", Roboto, sans-serif' } }, 'This is small text. Used for hints, captions, and small supporting information.')
      )
    )
  );
};
