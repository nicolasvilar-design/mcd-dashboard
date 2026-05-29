import React, { useState, useEffect } from 'react';

/**
 * Progress bar — pixel-perfect from Figma (node 2635:5413)
 * Linear: track #d6d6d6, fill BLUE #0f62fe (default). Complete = green #1f6437 + ✓,
 * Error = red #db0007 + ✕. Optional label + helper text. Also indeterminate circular.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const FILL = { default: '#0f62fe', success: '#1f6437', error: '#db0007' };

const StatusIcon = ({ type }) => {
  if (type === 'success') return React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: '#1f6437' },
    React.createElement('circle', { cx: 12, cy: 12, r: 10 }), React.createElement('path', { d: 'M7 12l3 3 6-6', stroke: '#fff', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }));
  if (type === 'error') return React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: '#db0007' },
    React.createElement('circle', { cx: 12, cy: 12, r: 10 }), React.createElement('path', { d: 'M8 8l8 8M16 8l-8 8', stroke: '#fff', strokeWidth: 2, strokeLinecap: 'round' }));
  return null;
};

const ProgressBar = ({ value = 50, status = 'default', label, helper, showLabel = true }) => {
  const pct = Math.min(Math.max(value, 0), 100);
  const fill = FILL[status] || FILL.default;
  return React.createElement('div', { style: { width: '100%', fontFamily: FONT } },
    showLabel && (label || status !== 'default') && React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' } },
      React.createElement('span', { style: { fontSize: '14px', color: '#292929' } }, label || ''),
      React.createElement(StatusIcon, { type: status })
    ),
    React.createElement('div', { style: { width: '100%', height: '6px', backgroundColor: '#d6d6d6', borderRadius: '0', overflow: 'hidden' } },
      React.createElement('div', { style: { height: '100%', width: `${status === 'success' || status === 'error' ? 100 : pct}%`, backgroundColor: fill, transition: 'width 300ms cubic-bezier(0.4,0,0.2,1)' } })
    ),
    helper && React.createElement('span', { style: { fontSize: '12px', color: '#6f6f6f', marginTop: '6px', display: 'block' } }, helper)
  );
};

const Spinner = ({ onDark = false }) => {
  const css = `@keyframes mcdspin { to { transform: rotate(360deg); } }`;
  const color = onDark ? '#ffffff' : '#0f62fe';
  return React.createElement(React.Fragment, null,
    React.createElement('style', null, css),
    React.createElement('div', { style: { width: '40px', height: '40px', borderRadius: '50%', border: `4px solid ${onDark ? 'rgba(255,255,255,0.25)' : '#d6d6d6'}`, borderTopColor: color, animation: 'mcdspin 0.9s linear infinite' } })
  );
};

export default {
  title: 'Components/Progress bar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
    docs: { description: { component:
`Indicador de progreso lineal. Fill azul \`#0f62fe\`; success verde + ✓, error rojo + ✕. Spinner circular para indeterminado.

#### ✅ Do's
- Usá azul para progreso; verde/rojo solo para resultado final.
- Acompañá con label y helper text cuando demore.

#### 🚫 Don'ts
- No uses gold (es el color de selección del sistema).
- No uses keyframes reiniciables para progreso dinámico (usá transición de width lineal).` } },
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    status: { control: 'select', options: ['default', 'success', 'error'] },
    label: { control: 'text' },
    helper: { control: 'text' },
  },
};

export const Default = { args: { value: 40, label: 'Puede demorar unos minutos', helper: 'Optional helper text' } };
export const Success = { args: { value: 100, status: 'success', label: 'Puede demorar unos minutos', helper: 'Optional helper text' } };
export const ErrorState = { args: { value: 100, status: 'error', label: 'Puede demorar unos minutos', helper: 'Optional helper text' } };

export const AllStates = {
  render: () => React.createElement('div', { style: { padding: '40px', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '24px', fontFamily: FONT } },
    ...[0, 20, 50, 80].map((v) => React.createElement(ProgressBar, { key: v, value: v, label: 'Puede demorar unos minutos', helper: 'Optional helper text' })),
    React.createElement(ProgressBar, { status: 'success', label: 'Puede demorar unos minutos', helper: 'Optional helper text' }),
    React.createElement(ProgressBar, { status: 'error', label: 'Puede demorar unos minutos', helper: 'Optional helper text' })
  ),
};

export const CircularIndeterminate = {
  render: () => React.createElement('div', { style: { padding: '40px', display: 'flex', gap: '48px', alignItems: 'center' } },
    React.createElement('div', null, React.createElement(Spinner), React.createElement('p', { style: { fontFamily: FONT, fontSize: '12px', color: '#6f6f6f' } }, 'Blue · fondo claro')),
    React.createElement('div', { style: { backgroundColor: '#1a1a1a', padding: '24px', borderRadius: '8px' } }, React.createElement(Spinner, { onDark: true }), React.createElement('p', { style: { fontFamily: FONT, fontSize: '12px', color: '#fff' } }, 'White · fondo oscuro'))
  ),
};

export const Animated = {
  render: () => {
    const [p, setP] = useState(0);
    useEffect(() => { const t = setInterval(() => setP((x) => (x >= 100 ? 0 : x + 2)), 60); return () => clearInterval(t); }, []);
    return React.createElement('div', { style: { padding: '40px', maxWidth: '420px' } }, React.createElement(ProgressBar, { value: p, label: 'Puede demorar unos minutos', helper: 'Optional helper text' }));
  },
};
