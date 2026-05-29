import React, { useState } from 'react';

/**
 * Card (Card_list) — pixel-perfect from Figma (node 4298:13547)
 * "Tabla interactiva / Lista de gestión": horizontal management row card.
 * Left: title + code + status Tag + "Tipo: ...". Middle: created/modified dates.
 * Right: status link + Toggle + kebab menu.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const TAG = {
  pendiente: { bg: '#FFF1C2', text: '#7A5B00' },
  confirmado: { bg: '#E2EABF', text: '#1F6437' },
  cancelado: { bg: '#FFCEC4', text: '#9A0005' },
};

const Tag = ({ text, type }) => {
  const c = TAG[type] || TAG.pendiente;
  return React.createElement('span', { style: { backgroundColor: c.bg, color: c.text, padding: '2px 10px', borderRadius: '16px', fontSize: '11px', lineHeight: '16px', fontFamily: FONT, whiteSpace: 'nowrap' } }, text);
};

const Toggle = ({ on: onProp }) => {
  const [on, setOn] = useState(onProp);
  return React.createElement('button', {
    onClick: () => setOn((o) => !o),
    style: { width: '40px', height: '22px', borderRadius: '22px', backgroundColor: on ? '#ffbc0d' : '#adadad', border: 'none', position: 'relative', cursor: 'pointer', flexShrink: 0, padding: 0 },
  }, React.createElement('span', { style: { position: 'absolute', top: '2px', left: on ? '20px' : '2px', width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#fff', transition: 'left 150ms', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' } }));
};

const Kebab = () => React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: '#6f6f6f' },
  React.createElement('circle', { cx: 12, cy: 5, r: 1.6 }), React.createElement('circle', { cx: 12, cy: 12, r: 1.6 }), React.createElement('circle', { cx: 12, cy: 19, r: 1.6 }));

const CalIcon = () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none' },
  React.createElement('rect', { x: 4, y: 5, width: 16, height: 16, rx: 2, stroke: '#6f6f6f', strokeWidth: 1.6 }), React.createElement('line', { x1: 4, y1: 9, x2: 20, y2: 9, stroke: '#6f6f6f', strokeWidth: 1.6 }));

const CardListItem = ({ title = 'PEDIDO/ESTADO/V N°', code = 'Código: MCD-00000-01', status = 'pendiente', statusLabel = 'Pendiente', type = 'Por método de pago', created = '01 enero 2020', modified = '01 enero 2020', linkText = 'Pendiente de pago', linkColor = '#0f62fe', toggleOn = true }) =>
  React.createElement('div', {
    style: { display: 'flex', alignItems: 'center', gap: '24px', padding: '16px', border: '1px solid #d6d6d6', borderRadius: '8px', backgroundColor: '#fff', fontFamily: FONT },
  },
    // left
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '4px', flex: '1 1 0', minWidth: 0 } },
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
        React.createElement('span', { style: { fontSize: '13px', fontWeight: 700, color: '#292929' } }, title),
        React.createElement(Tag, { text: statusLabel, type: status })),
      React.createElement('span', { style: { fontSize: '11px', color: '#6f6f6f' } }, code),
      React.createElement('span', { style: { fontSize: '11px', color: '#6f6f6f' } }, `Tipo: ${type}`)
    ),
    // middle dates
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px', color: '#6f6f6f' } },
      React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: '6px' } }, React.createElement(CalIcon), `Creado: ${created}`),
      React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: '6px' } }, React.createElement(CalIcon), `Modificado: ${modified}`)
    ),
    // right
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
      React.createElement('span', { style: { fontSize: '12px', color: linkColor, fontWeight: 700 } }, linkText),
      React.createElement(Toggle, { on: toggleOn }),
      React.createElement('button', { style: { background: 'none', border: 'none', cursor: 'pointer', padding: 0 } }, React.createElement(Kebab))
    )
  );

export default {
  title: 'Components/Card (List)',
  component: CardListItem,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['pendiente', 'confirmado', 'cancelado'] },
    title: { control: 'text' },
    statusLabel: { control: 'text' },
  },
};

export const Default = { render: (args) => React.createElement('div', { style: { padding: '24px', maxWidth: '900px' } }, React.createElement(CardListItem, args)), args: {} };

export const ManagementList = {
  render: () => React.createElement('div', { style: { padding: '24px', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '12px' } },
    React.createElement(CardListItem, { status: 'pendiente', statusLabel: 'Pendiente', linkText: 'Pendiente de pago', linkColor: '#7A5B00', toggleOn: true }),
    React.createElement(CardListItem, { status: 'confirmado', statusLabel: 'Confirmado', linkText: 'Activo', linkColor: '#1F6437', toggleOn: true }),
    React.createElement(CardListItem, { status: 'cancelado', statusLabel: 'Cancelado', linkText: 'Pago rechazado', linkColor: '#db0007', toggleOn: false }),
    React.createElement(CardListItem, { status: 'pendiente', statusLabel: 'Pendiente', linkText: 'Esperando', linkColor: '#0f62fe', toggleOn: true })
  ),
};
