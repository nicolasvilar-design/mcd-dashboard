import React, { useState } from 'react';
import { EASING, DURATION, injectMotion } from './_motion';

injectMotion();

/**
 * Checkbox — pixel-perfect from Figma (node 4298:13515)
 * Unchecked: white box, #292929 border. Checked: GOLD #ffbc0d box + #292929 check, BOLD label.
 * Disabled: #d6d6d6 box, #adadad border/label. Focus: 2px #0f62fe border.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const Check = () => React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none' },
  React.createElement('path', { d: 'M5 12l5 5L19 7', stroke: '#292929', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' }));

const Checkbox = ({ label = 'Checkbox label', checked = false, state = 'enabled', interactive = false, onChange }) => {
  const [on, setOn] = useState(checked);
  const value = interactive ? on : checked;
  const disabled = state === 'disabled';
  const focused = state === 'focused';

  let bg = '#ffffff', border = '2px solid #292929';
  if (disabled) { bg = value ? '#ffe49e' : '#d6d6d6'; border = '2px solid #adadad'; }
  else if (value) { bg = '#ffbc0d'; border = '2px solid #ffbc0d'; }
  if (focused) border = '2px solid #0f62fe';

  const handle = () => { if (interactive && !disabled) { setOn((o) => { onChange?.(!o); return !o; }); } };

  return React.createElement('label', {
    onClick: handle,
    className: disabled ? undefined : 'mcd-pressable',
    style: { display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: disabled ? 'not-allowed' : 'pointer' },
  },
    React.createElement('span', {
      style: { width: '20px', height: '20px', borderRadius: '4px', backgroundColor: bg, border, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', flexShrink: 0,
        transition: `background-color ${DURATION.press}ms ${EASING.out}, border-color ${DURATION.press}ms ${EASING.out}` },
    }, value && !disabled && React.createElement(Check)),
    React.createElement('span', {
      style: { fontFamily: FONT, fontSize: '14px', letterSpacing: '-0.15px', color: disabled ? '#adadad' : '#292929', fontWeight: value ? 700 : 400 },
    }, label)
  );
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: { description: { component:
`Casilla de selección múltiple. Checked = gold \`#ffbc0d\` + check negro + label bold.

#### ✅ Do's
- Usalo cuando se pueden elegir varias opciones de una lista.
- Mostrá el label en bold al estar marcado (refuerza el estado).

#### 🚫 Don'ts
- No lo uses para selección única (usá Radio Button).
- No uses verde/azul para el check — el color del sistema es gold.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    state: { control: 'select', options: ['enabled', 'focused', 'disabled'] },
    label: { control: 'text' },
    interactive: { control: 'boolean' },
  },
};

export const Unchecked = { args: { checked: false } };
export const Checked = { args: { checked: true } };
export const Focused = { args: { checked: false, state: 'focused' } };
export const Disabled = { args: { checked: false, state: 'disabled' } };
export const Interactive = { args: { checked: false, interactive: true } };

export const AllStates = {
  render: () => React.createElement('div', { style: { padding: '40px', fontFamily: FONT, display: 'grid', gridTemplateColumns: 'repeat(2, auto)', gap: '24px 48px', justifyContent: 'start' } },
    React.createElement(Checkbox, { checked: false }),
    React.createElement(Checkbox, { checked: false, state: 'disabled' }),
    React.createElement(Checkbox, { checked: false, state: 'focused' }),
    React.createElement(Checkbox, { checked: false }),
    React.createElement(Checkbox, { checked: true }),
    React.createElement(Checkbox, { checked: true })
  ),
};
