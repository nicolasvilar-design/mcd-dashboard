import React, { useState } from 'react';
import { injectMotion } from './_motion';

injectMotion();

/**
 * Pagination — pixel-perfect from Figma (node 787:27330)
 * Pattern: "Item por página: [select ▾]   X–Y de Z   ‹ ›"
 * (Figma's Pagination is the items-per-page footer control, not a numbered page list.)
 */

const FONT = 'Speedee, system-ui, sans-serif';
const PER_PAGE_OPTIONS = [5, 10, 20, 30, 40, 50, 60, 100];

const Chevron = ({ open }) => React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', style: { transform: open ? 'rotate(180deg)' : 'none' } },
  React.createElement('path', { d: 'M6 9l6 6 6-6', stroke: '#292929', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }));

const PerPageSelect = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  return React.createElement('div', { style: { position: 'relative' } },
    React.createElement('button', {
      onClick: () => setOpen((o) => !o),
      style: {
        display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: open ? '#d6d6d6' : '#ffffff',
        border: '1px solid #d6d6d6', borderRadius: '4px', padding: '6px 10px', cursor: 'pointer',
        fontFamily: FONT, fontSize: '14px', color: '#292929',
      },
    }, value, React.createElement(Chevron, { open })),
    open && React.createElement('div', {
      style: { position: 'absolute', bottom: '100%', left: 0, marginBottom: '4px', backgroundColor: '#fff', border: '1px solid #d6d6d6', borderRadius: '4px', boxShadow: '0px 8px 16px rgba(41,41,41,0.16)', zIndex: 10, maxHeight: '200px', overflowY: 'auto' },
    },
      ...PER_PAGE_OPTIONS.map((o) => React.createElement('div', {
        key: o, onClick: () => { onChange(o); setOpen(false); },
        style: { padding: '8px 16px', fontFamily: FONT, fontSize: '14px', color: '#292929', cursor: 'pointer', backgroundColor: o === value ? '#f9f9f9' : '#fff', minWidth: '60px' },
        onMouseEnter: (e) => (e.currentTarget.style.backgroundColor = '#f9f9f9'),
        onMouseLeave: (e) => (e.currentTarget.style.backgroundColor = o === value ? '#f9f9f9' : '#fff'),
      }, o))
    )
  );
};

const Pagination = ({ total = 61, defaultPerPage = 50 }) => {
  const [perPage, setPerPage] = useState(defaultPerPage);
  const [page, setPage] = useState(1);
  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, total);
  const lastPage = Math.ceil(total / perPage);

  const arrow = (dir, dis, onClick) => React.createElement('button', {
    onClick: dis ? undefined : onClick, disabled: dis,
    className: dis ? undefined : 'mcd-pressable',
    style: { background: 'none', border: 'none', cursor: dis ? 'not-allowed' : 'pointer', color: dis ? '#adadad' : '#292929', fontSize: '18px', padding: '4px 8px' },
  }, dir === 'prev' ? '‹' : '›');

  return React.createElement('div', {
    style: { display: 'inline-flex', alignItems: 'center', gap: '24px', fontFamily: FONT, fontSize: '14px', color: '#292929' },
  },
    React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: '8px' } },
      'Item por página:', React.createElement(PerPageSelect, { value: perPage, onChange: (v) => { setPerPage(v); setPage(1); } })),
    React.createElement('span', null, `${start}–${end} de ${total}`),
    React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center' } },
      arrow('prev', page <= 1, () => setPage((p) => p - 1)),
      arrow('next', page >= lastPage, () => setPage((p) => p + 1)))
  );
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
    docs: { description: { component:
`Control de paginación de tablas: "Item por página" (select) + rango X–Y de Z + ‹ ›.

#### ✅ Do's
- Deshabilitá ‹ en la primera página y › en la última.
- Mantené visible el total de resultados.

#### 🚫 Don'ts
- No la uses como lista numerada de muchas páginas.
- No escondas el selector de items por página.` } },
  },
  tags: ['autodocs'],
  argTypes: { total: { control: 'number' }, defaultPerPage: { control: 'number' } },
};

export const Default = { render: () => React.createElement('div', { style: { padding: '40px' } }, React.createElement(Pagination, { total: 61, defaultPerPage: 50 })) };
