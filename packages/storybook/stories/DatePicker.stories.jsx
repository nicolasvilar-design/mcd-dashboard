import React, { useState } from 'react';

/**
 * Date Picker — pixel-perfect from Figma (node 4298:13516)
 * Input (calendar icon) + dropdown calendar. Selected day = gold (#FFBC0D) circle.
 * Month nav (‹ Enero de 2020 ›), weekday headers (Lu..Do), Guardar action.
 * Range variant: two months side-by-side with gold range highlight + Aceptar.
 */

const FONT = 'Speedee, system-ui, sans-serif';
const WD = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

const CalIcon = ({ color = '#292929' }) =>
  React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' },
    React.createElement('rect', { x: 4, y: 5, width: 16, height: 16, rx: 2, stroke: color, strokeWidth: 1.6 }),
    React.createElement('line', { x1: 4, y1: 9, x2: 20, y2: 9, stroke: color, strokeWidth: 1.6 }),
    React.createElement('line', { x1: 8, y1: 3, x2: 8, y2: 6, stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' }),
    React.createElement('line', { x1: 16, y1: 3, x2: 16, y2: 6, stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' })
  );

const monthCells = (offset, days) => {
  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
};

const Day = ({ day, selected, inRange, onClick }) => {
  if (!day) return React.createElement('div', { style: { width: '32px', height: '32px' } });
  return React.createElement('button', {
    onClick,
    style: {
      width: '32px', height: '32px', border: 'none', cursor: 'pointer', fontFamily: FONT, fontSize: '12px',
      borderRadius: selected ? '50%' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: selected ? '#FFBC0D' : (inRange ? '#FFF1C2' : 'transparent'),
      color: '#292929', fontWeight: selected ? 700 : 400,
    },
  }, day);
};

const MonthGrid = ({ title, offset, days, selected, range, onSelect }) =>
  React.createElement('div', { style: { fontFamily: FONT } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 4px' } },
      React.createElement('button', { style: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: '#292929' } }, '‹'),
      React.createElement('span', { style: { fontSize: '14px', fontWeight: 700, color: '#292929' } }, title),
      React.createElement('button', { style: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: '#292929' } }, '›')
    ),
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(7, 32px)', gap: '2px' } },
      ...WD.map((w) => React.createElement('div', { key: w, style: { width: '32px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#6f6f6f', fontWeight: 700 } }, w)),
      ...monthCells(offset, days).map((d, i) => React.createElement(Day, {
        key: i, day: d,
        selected: d && selected === d,
        inRange: d && range && d > range[0] && d < range[1],
        onClick: () => d && onSelect && onSelect(d),
      }))
    )
  );

const GoldButton = ({ children }) =>
  React.createElement('button', {
    style: { backgroundColor: '#FFBC0D', color: '#292929', border: 'none', borderRadius: '4px', padding: '8px 24px', fontFamily: FONT, fontSize: '14px', fontWeight: 700, cursor: 'pointer' },
  }, children);

const DatePicker = ({ label = 'Label' }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(12);
  return React.createElement('div', { style: { fontFamily: FONT, width: '280px', position: 'relative' } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', padding: '8px' } },
      React.createElement('span', { style: { fontSize: '14px', color: '#292929', letterSpacing: '-0.15px' } }, label)
    ),
    React.createElement('div', {
      onClick: () => setOpen((o) => !o),
      style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', backgroundColor: '#f9f9f9', borderRadius: '4px', padding: '8px', cursor: 'pointer' },
    },
      React.createElement('span', { style: { fontSize: '14px', color: '#6f6f6f' } }, 'dd/mm/aaaa'),
      React.createElement(CalIcon)
    ),
    open && React.createElement('div', {
      style: { marginTop: '8px', border: '1px solid #d6d6d6', borderRadius: '8px', padding: '12px', boxShadow: '0px 8px 16px rgba(41,41,41,0.16)', backgroundColor: '#FFFFFF', display: 'inline-block' },
    },
      React.createElement(MonthGrid, { title: 'Enero de 2020', offset: 2, days: 31, selected, onSelect: setSelected }),
      React.createElement('div', { style: { display: 'flex', justifyContent: 'flex-end', marginTop: '12px' } }, React.createElement(GoldButton, null, 'Guardar'))
    )
  );
};

const RangePicker = () => {
  const [range] = useState([8, 18]);
  return React.createElement('div', {
    style: { border: '1px solid #d6d6d6', borderRadius: '8px', padding: '16px', boxShadow: '0px 8px 16px rgba(41,41,41,0.16)', backgroundColor: '#FFFFFF', display: 'inline-block', fontFamily: FONT },
  },
    React.createElement('div', { style: { textAlign: 'center', fontSize: '14px', fontWeight: 700, marginBottom: '12px', color: '#292929' } }, 'Seleccioná una Fecha de inicio'),
    React.createElement('div', { style: { display: 'flex', gap: '32px' } },
      React.createElement(MonthGrid, { title: 'Enero de 2020', offset: 2, days: 31, selected: range[0], range }),
      React.createElement(MonthGrid, { title: 'Febrero de 2020', offset: 5, days: 29, selected: null, range: null })
    ),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' } },
      React.createElement('span', { style: { fontSize: '12px', color: '#6f6f6f' } }, 'Período de fecha • 10 días'),
      React.createElement(GoldButton, null, 'Aceptar')
    )
  );
};

export default {
  title: 'Components/Date Picker',
  component: DatePicker,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export const Single = { render: () => React.createElement('div', { style: { padding: '24px' } }, React.createElement(DatePicker)) };
export const Range = { render: () => React.createElement('div', { style: { padding: '24px' } }, React.createElement(RangePicker)) };
