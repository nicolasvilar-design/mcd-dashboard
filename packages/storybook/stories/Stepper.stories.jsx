import React from 'react';

/**
 * Progress indicator item (Stepper) — pixel-perfect from Figma (node 2816:7588)
 * Horizontal steps + connector lines. Step states:
 *   pending (dotted gray circle) · active (gold half/partial) · complete (gold + ✓)
 *   error (red circle + !) · upcoming (dotted gray) · skeleton (dotted + gray bar)
 * Connector line: gold once passed, gray otherwise.
 */

const FONT = 'Speedee, system-ui, sans-serif';
const GOLD = '#ffbc0d';
const GREY = '#adadad';
const RED = '#db0007';

const StepCircle = ({ state }) => {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24' };
  switch (state) {
    case 'complete':
      return React.createElement('svg', { ...common, fill: GOLD },
        React.createElement('circle', { cx: 12, cy: 12, r: 11 }),
        React.createElement('path', { d: 'M7 12l3 3 6-6', stroke: '#292929', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }));
    case 'active':
      return React.createElement('svg', { ...common, fill: 'none' },
        React.createElement('circle', { cx: 12, cy: 12, r: 10, stroke: GOLD, strokeWidth: 2 }),
        React.createElement('path', { d: 'M12 2a10 10 0 0 1 0 20z', fill: GOLD }));
    case 'error':
      return React.createElement('svg', { ...common, fill: 'none' },
        React.createElement('circle', { cx: 12, cy: 12, r: 10, stroke: RED, strokeWidth: 2 }),
        React.createElement('path', { d: 'M12 7v6M12 16v.5', stroke: RED, strokeWidth: 2, strokeLinecap: 'round' }));
    default: // pending / upcoming
      return React.createElement('svg', { ...common, fill: 'none' },
        React.createElement('circle', { cx: 12, cy: 12, r: 10, stroke: GREY, strokeWidth: 2, strokeDasharray: '3 3' }));
  }
};

const Stepper = ({ steps = [] }) =>
  React.createElement('div', { style: { display: 'flex', alignItems: 'center', fontFamily: FONT, width: '100%' } },
    ...steps.map((s, i) => {
      const passed = s.state === 'complete' || s.state === 'active';
      const isLast = i === steps.length - 1;
      return React.createElement('div', { key: i, style: { display: 'flex', alignItems: 'center', flex: isLast ? '0 0 auto' : '1 1 0' } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 } },
          s.state === 'skeleton'
            ? React.createElement('div', { style: { width: '18px', height: '18px', borderRadius: '50%', border: `2px dashed ${GREY}` } })
            : React.createElement(StepCircle, { state: s.state }),
          s.state === 'skeleton'
            ? React.createElement('div', { style: { width: '70px', height: '10px', borderRadius: '4px', backgroundColor: '#d6d6d6' } })
            : React.createElement('span', { style: { fontSize: '13px', color: s.state === 'pending' || s.state === 'upcoming' ? '#adadad' : '#292929', whiteSpace: 'nowrap' } }, s.label || 'Item Step')
        ),
        !isLast && React.createElement('div', { style: { flex: 1, height: '2px', margin: '0 12px', backgroundColor: passed ? GOLD : '#d6d6d6' } })
      );
    })
  );

export default {
  title: 'Components/Progress Indicator (Stepper)',
  component: Stepper,
  parameters: {
    layout: 'padded',
    docs: { description: { component:
`Indicador de progreso multi-paso. Estados: pending (dotted), active/complete (gold + ✓), error (rojo + !). Conector gold al avanzar.

#### ✅ Do's
- Usalo para flujos lineales y secuenciales (checkout, onboarding).
- Mostrá claramente el paso actual y los completados.

#### 🚫 Don'ts
- No lo uses para navegación libre no secuencial.
- No muestres más de ~6 pasos a la vez.` } },
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => React.createElement('div', { style: { padding: '40px' } },
    React.createElement(Stepper, { steps: [
      { label: 'Item Step', state: 'pending' },
      { label: 'Item Step', state: 'active' },
      { label: 'Item Step', state: 'complete' },
      { label: 'Item Step', state: 'error' },
      { label: 'Item Step', state: 'upcoming' },
      { label: '', state: 'skeleton' },
    ] })
  ),
};

export const InProgress = {
  render: () => React.createElement('div', { style: { padding: '40px' } },
    React.createElement(Stepper, { steps: [
      { label: 'Personal', state: 'complete' },
      { label: 'Dirección', state: 'complete' },
      { label: 'Pago', state: 'active' },
      { label: 'Revisión', state: 'pending' },
      { label: 'Confirmación', state: 'pending' },
    ] })
  ),
};
