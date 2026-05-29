import React from 'react';

/**
 * Calendar — pixel-perfect from Figma (node 4298:13517)
 * Month grid (Lunes–Domingo). Day cells hold colored event tags:
 *   green = confirmado · yellow = pendiente · red/pink = cancelado.
 * Today is marked with a filled circle on the day number. "+N más" on overflow.
 */

const FONT = 'Speedee, system-ui, sans-serif';
const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const EVENT = {
  confirmado: { bg: '#E2EABF', text: '#1F6437' },
  pendiente:  { bg: '#FFF1C2', text: '#7A5B00' },
  cancelado:  { bg: '#FFCEC4', text: '#9A0005' },
};

const Event = ({ label, type }) => {
  const c = EVENT[type];
  return React.createElement('div', {
    style: {
      backgroundColor: c.bg, color: c.text, borderRadius: '4px', padding: '2px 6px',
      fontSize: '10px', lineHeight: '14px', fontFamily: FONT, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
    },
  }, label);
};

// Representative month: 1st falls on Wednesday, 31 days, today = 16
const buildMonth = () => {
  const cells = [];
  const offset = 2; // Mon,Tue empty before day 1 (Wed)
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= 31; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
};

const EVENTS_BY_DAY = {
  2: [['[nombre cumple…]', 'confirmado']],
  6: [['[nombre cumple…]', 'pendiente'], ['[nombre…]', 'cancelado']],
  9: [['[nombre cumple…]', 'confirmado']],
  16: [['[nombre…]', 'confirmado'], ['[nombre…]', 'pendiente'], ['[nombre…]', 'cancelado']],
  17: [['[nombre cumple…]', 'pendiente']],
  20: [['[nombre…]', 'confirmado'], ['[nombre…]', 'cancelado']],
  23: [['[nombre cumple…]', 'cancelado']],
  25: [['[nombre cumple…]', 'confirmado']],
};
const TODAY = 16;

const Calendar = () => {
  const cells = buildMonth();
  return React.createElement('div', {
    style: { border: '1px solid #d6d6d6', borderRadius: '8px', overflow: 'hidden', maxWidth: '900px', backgroundColor: '#FFFFFF', fontFamily: FONT },
  },
    // week header
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', backgroundColor: '#f9f9f9', borderBottom: '1px solid #d6d6d6' } },
      ...DAYS.map((d) => React.createElement('div', { key: d, style: { padding: '12px 8px', fontSize: '12px', fontWeight: 700, color: '#292929', textAlign: 'left' } }, d))
    ),
    // day grid
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' } },
      ...cells.map((day, i) => {
        const events = day ? (EVENTS_BY_DAY[day] || []) : [];
        const shown = events.slice(0, 2);
        const extra = events.length - shown.length;
        return React.createElement('div', {
          key: i,
          style: {
            minHeight: '96px', borderRight: (i % 7 !== 6) ? '1px solid #f0f0f0' : 'none',
            borderBottom: '1px solid #f0f0f0', padding: '6px', display: 'flex', flexDirection: 'column', gap: '3px',
            backgroundColor: day ? '#FFFFFF' : '#f9f9f9',
          },
        },
          day && React.createElement('div', { style: { display: 'flex', justifyContent: 'flex-start' } },
            React.createElement('span', {
              style: {
                fontSize: '12px', color: day === TODAY ? '#FFFFFF' : '#292929',
                backgroundColor: day === TODAY ? '#292929' : 'transparent',
                width: '20px', height: '20px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: day === TODAY ? 700 : 400,
              },
            }, day)
          ),
          ...shown.map(([label, type], k) => React.createElement(Event, { key: k, label, type })),
          extra > 0 && React.createElement('span', { style: { fontSize: '10px', color: '#0F62FE', cursor: 'pointer' } }, `Ver ${extra} más`)
        );
      })
    )
  );
};

const Legend = () =>
  React.createElement('div', { style: { display: 'flex', gap: '16px', marginBottom: '16px', fontFamily: FONT, fontSize: '12px' } },
    ...[['Confirmado', 'confirmado'], ['Pendiente', 'pendiente'], ['Cancelado', 'cancelado']].map(([l, t]) =>
      React.createElement('span', { key: t, style: { display: 'inline-flex', alignItems: 'center', gap: '6px' } },
        React.createElement('span', { style: { width: '12px', height: '12px', borderRadius: '3px', backgroundColor: EVENT[t].bg, border: `1px solid ${EVENT[t].text}` } }),
        l
      )
    )
  );

export default {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export const Month = {
  render: () => React.createElement('div', { style: { padding: '24px' } },
    React.createElement(Legend),
    React.createElement(Calendar)
  ),
};
