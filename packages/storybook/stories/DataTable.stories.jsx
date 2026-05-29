import React from 'react';

/**
 * Data Table — Read-only · pixel-perfect from Figma (node 671:25687)
 * Header cells with sort chevrons; row cells support Tag / text / toggle / icon.
 * Footer: items-per-page + range + pager. Read-only: actions are secondary (kebab).
 */

const FONT = 'Speedee, system-ui, sans-serif';

const COLOR_TAGS = {
  green:     { bg: '#E2EABF', text: '#1F6437' },
  lightblue: { bg: '#CCF0FF', text: '#006BAE' },
  gold:      { bg: '#FFBC0D', text: '#292929' },
  pink:      { bg: '#FFCEC4', text: '#9A0005' },
  grey:      { bg: '#d6d6d6', text: '#292929' },
};

const Tag = ({ text, color = 'grey' }) => {
  const c = COLOR_TAGS[color];
  return React.createElement('span', {
    style: { backgroundColor: c.bg, color: c.text, padding: '2px 10px', borderRadius: '16px', fontSize: '12px', lineHeight: '16px', fontFamily: FONT, whiteSpace: 'nowrap' },
  }, text);
};

const Kebab = () =>
  React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: '#6f6f6f' },
    React.createElement('circle', { cx: 12, cy: 5, r: 1.6 }),
    React.createElement('circle', { cx: 12, cy: 12, r: 1.6 }),
    React.createElement('circle', { cx: 12, cy: 19, r: 1.6 })
  );

const COLUMNS = ['Method', 'Url', 'Type', 'Service', 'To/From', 'Status code', 'Execution time', 'Created at', ''];

const ROWS = [
  { method: ['Post', 'pink'], url: 'http://api-mcd-ecommerce-bo.s.app/mcd/catalog/recommendat1', type: ['IN', 'lightblue'], service: ['bopcatalg', 'green'], from: 'api-mcd-ecommerce', status: ['200', 'green'], exec: '5ms', created: '2025-01-31' },
  { method: ['Get', 'lightblue'], url: 'http://api-mcd-ecommerce-bo.s.app/mcd/catalog/recommendat1', type: ['OUT', 'gold'], service: ['api', 'green'], from: 'inkecambio', status: ['400', 'gold'], exec: '18ms', created: '2025-01-30' },
  { method: ['Get', 'lightblue'], url: 'http://api-mcd-ecommerce-bo.s.app/mcd/catalog/recommendat1', type: ['OUT', 'gold'], service: ['api', 'green'], from: 'api-mcd', status: ['500', 'pink'], exec: '50ms', created: '2025-01-05' },
  { method: ['Post', 'pink'], url: 'http://api-mcd-ecommerce-bo.s.app/mcd/catalog/recommendat1', type: ['IN', 'lightblue'], service: ['mql', 'green'], from: 'inkecambio', status: ['200', 'green'], exec: '37ms', created: '2025-01-30' },
  { method: ['Delete', 'pink'], url: 'http://api-mcd-ecommerce-bo.s.app/admin/update1', type: ['IN', 'lightblue'], service: ['mql', 'green'], from: 'webhook', status: ['200', 'gold'], exec: '1.4s', created: '2025-01-25' },
];

const th = { padding: '12px 16px', textAlign: 'left', fontFamily: FONT, fontSize: '12px', fontWeight: 700, color: '#292929', borderBottom: '1px solid #d6d6d6', whiteSpace: 'nowrap' };
const td = { padding: '12px 16px', fontFamily: FONT, fontSize: '12px', color: '#292929', borderBottom: '1px solid #f0f0f0', verticalAlign: 'middle' };

const DataTable = () =>
  React.createElement('div', {
    style: { border: '1px solid #d6d6d6', borderRadius: '8px', overflow: 'hidden', maxWidth: '1100px', backgroundColor: '#FFFFFF' },
  },
    React.createElement('div', { style: { overflowX: 'auto' } },
      React.createElement('table', { style: { width: '100%', borderCollapse: 'collapse' } },
        React.createElement('thead', null,
          React.createElement('tr', null,
            ...COLUMNS.map((c, i) => React.createElement('th', { key: i, style: th },
              c && React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: '4px' } },
                c,
                React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none' },
                  React.createElement('path', { d: 'M6 9l6 6 6-6', stroke: '#6f6f6f', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' })
                )
              )
            ))
          )
        ),
        React.createElement('tbody', null,
          ...ROWS.map((r, i) => React.createElement('tr', { key: i },
            React.createElement('td', { style: td }, React.createElement(Tag, { text: r.method[0], color: r.method[1] })),
            React.createElement('td', { style: { ...td, color: '#6f6f6f', maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, r.url),
            React.createElement('td', { style: td }, React.createElement(Tag, { text: r.type[0], color: r.type[1] })),
            React.createElement('td', { style: td }, React.createElement(Tag, { text: r.service[0], color: r.service[1] })),
            React.createElement('td', { style: td }, r.from),
            React.createElement('td', { style: td }, React.createElement(Tag, { text: r.status[0], color: r.status[1] })),
            React.createElement('td', { style: td }, r.exec),
            React.createElement('td', { style: td }, r.created),
            React.createElement('td', { style: { ...td, textAlign: 'center' } }, React.createElement('button', { style: { background: 'none', border: 'none', cursor: 'pointer', padding: 0 } }, React.createElement(Kebab)))
          ))
        )
      )
    ),
    // Footer
    React.createElement('div', {
      style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '24px', padding: '12px 16px', borderTop: '1px solid #d6d6d6', fontFamily: FONT, fontSize: '12px', color: '#6f6f6f' },
    },
      React.createElement('span', null, 'Items per page: 5 ▾'),
      React.createElement('span', null, '1–5 de 6'),
      React.createElement('span', { style: { display: 'flex', gap: '12px' } },
        React.createElement('button', { style: { background: 'none', border: 'none', cursor: 'pointer', color: '#6f6f6f' } }, '‹'),
        React.createElement('button', { style: { background: 'none', border: 'none', cursor: 'pointer', color: '#292929' } }, '›')
      )
    )
  );

export default {
  title: 'Components/Data Table (Read-only)',
  component: DataTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export const Default = { render: () => React.createElement(DataTable) };
