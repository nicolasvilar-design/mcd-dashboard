import React, { useState } from 'react';
import { injectMotion } from './_motion';

injectMotion();

/**
 * Dropdown — pixel-perfect from Figma (node 3124:6302)
 * Input base: underline field (bottom border) + "Menu item" + chevron.
 * States: enabled, hovered (#d6d6d6), focused, pressed, active, disabled, error, skeleton.
 * Opens Dropdown-ListMenu (list of "Menu option" rows).
 */

const FONT = 'Speedee, system-ui, sans-serif';

const Chevron = ({ open }) => React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', style: { transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' } },
  React.createElement('path', { d: 'M6 9l6 6 6-6', stroke: '#292929', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }));

const Dropdown = ({ label = 'Menu item', options = [], state = 'enabled', placeholder = 'Menu item', interactive = false }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const disabled = state === 'disabled';
  const error = state === 'error';
  const skeleton = state === 'skeleton';

  if (skeleton) return React.createElement('div', { style: { width: '240px', height: '40px', borderRadius: '4px', backgroundColor: '#d6d6d6' } });

  let bg = 'transparent';
  if (state === 'hovered' || state === 'focused') bg = '#d6d6d6';

  const borderColor = error ? '#db0007' : '#292929';

  return React.createElement('div', { style: { position: 'relative', width: '240px', fontFamily: FONT } },
    React.createElement('button', {
      onClick: () => interactive && !disabled && setOpen((o) => !o), disabled,
      style: {
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px',
        padding: '8px', backgroundColor: bg, border: 'none', borderBottom: `${error || state === 'focused' ? 2 : 1}px solid ${borderColor}`,
        cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: FONT, fontSize: '14px', letterSpacing: '-0.15px',
        color: disabled ? '#adadad' : '#292929', boxSizing: 'border-box',
      },
    },
      React.createElement('span', null, selected || label || placeholder),
      React.createElement(Chevron, { open: open || state === 'pressed' || state === 'active' })
    ),
    error && React.createElement('span', { style: { fontSize: '12px', color: '#db0007', padding: '4px 8px', display: 'block' } }, 'Supporting text'),
    open && React.createElement('div', {
      className: 'mcd-enter',
      style: { '--mcd-origin': 'top center', position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '2px', backgroundColor: '#fff', border: '1px solid #d6d6d6', borderRadius: '4px', boxShadow: '0px 8px 16px rgba(41,41,41,0.16)', zIndex: 10, maxHeight: '240px', overflowY: 'auto' },
    },
      ...options.map((o, i) => React.createElement('div', {
        key: i, onClick: () => { setSelected(o); setOpen(false); },
        style: { padding: '12px 16px', fontSize: '14px', color: '#292929', cursor: 'pointer', borderBottom: i < options.length - 1 ? '1px solid #f9f9f9' : 'none', backgroundColor: selected === o ? '#f9f9f9' : '#fff' },
        onMouseEnter: (e) => (e.currentTarget.style.backgroundColor = '#f9f9f9'),
        onMouseLeave: (e) => (e.currentTarget.style.backgroundColor = selected === o ? '#f9f9f9' : '#fff'),
      }, o))
    )
  );
};

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
    docs: { description: { component:
`Selector de una opción. Campo estilo underline + lista de opciones.

**Microinteracción:** la lista entra origin-aware (escala desde el campo) con ease-out, 200ms.

#### ✅ Do's
- Usalo para 5+ opciones; para 2–4 considerá Radio o Segmented button.
- Mostrá supporting text en rojo para el estado error.

#### 🚫 Don'ts
- No lo uses para acciones (es selección, no menú de comandos).
- No abras la lista hacia arriba si hay espacio abajo.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'active', 'disabled', 'error', 'skeleton'] },
    label: { control: 'text' },
  },
};

const opts = ['Menu option', 'Menu option', 'Menu option', 'Menu option', 'Menu option'];

export const Default = { args: { label: 'Menu item', options: opts, interactive: true } };
export const Error = { args: { label: 'Menu item', state: 'error', options: opts } };
export const Disabled = { args: { label: 'Menu item', state: 'disabled', options: opts } };

export const AllStates = {
  render: () => {
    const states = ['enabled', 'hovered', 'focused', 'pressed', 'active', 'disabled', 'error', 'skeleton'];
    return React.createElement('div', { style: { padding: '40px', fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: '20px' } },
      React.createElement('h2', { style: { margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Dropdown — states'),
      ...states.map((st) => React.createElement('div', { key: st, style: { display: 'flex', alignItems: 'flex-start', gap: '24px' } },
        React.createElement('span', { style: { width: '70px', fontSize: '12px', color: '#6f6f6f', paddingTop: '10px' } }, st),
        React.createElement(Dropdown, { label: 'Menu item', state: st, options: opts })
      ))
    );
  },
};
