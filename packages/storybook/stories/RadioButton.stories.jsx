import React, { useState } from 'react';
import { EASING, DURATION, injectMotion } from './_motion';

injectMotion();

/**
 * Radio Button — pixel-perfect from Figma (node 5644:4541)
 * Selected = GOLD #ffbc0d circle + #292929 checkmark, BOLD label (not a blue dot).
 * Modes: Filled (bordered container) / Unfilled. States: default, disabled, focus.
 * Disabled selected = #ffe49e. Focus = 2px #0f62fe ring.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const Check = () => React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none' },
  React.createElement('path', { d: 'M5 12l5 5L19 7', stroke: '#292929', strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' }));

const Radio = ({ label = 'Radiobutton label', selected = false, state = 'default', fill = 'unfilled', name, value, onSelect }) => {
  const disabled = state === 'disabled';
  const focused = state === 'focus';

  let bg = '#ffffff', border = '2px solid #292929';
  if (disabled) { bg = selected ? '#ffe49e' : '#ffffff'; border = '2px solid #adadad'; }
  else if (selected) { bg = '#ffbc0d'; border = '2px solid #ffbc0d'; }
  if (focused) border = '2px solid #0f62fe';

  const circle = React.createElement('span', {
    style: { width: '20px', height: '20px', borderRadius: '50%', backgroundColor: bg, border, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', flexShrink: 0,
      transition: `background-color ${DURATION.press}ms ${EASING.out}, border-color ${DURATION.press}ms ${EASING.out}` },
  }, selected && !disabled && React.createElement(Check));

  const row = React.createElement('label', {
    onClick: () => !disabled && onSelect && onSelect(value),
    className: disabled ? undefined : 'mcd-pressable',
    style: { display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: disabled ? 'not-allowed' : 'pointer' },
  },
    circle,
    React.createElement('span', { style: { fontFamily: FONT, fontSize: '14px', letterSpacing: '-0.15px', color: disabled ? '#adadad' : '#292929', fontWeight: selected ? 700 : 400 } }, label)
  );

  if (fill === 'filled') {
    return React.createElement('div', {
      style: { border: `1px solid ${focused ? '#0f62fe' : '#d6d6d6'}`, borderRadius: '8px', padding: '12px 16px', display: 'inline-flex' },
    }, row);
  }
  return row;
};

export default {
  title: 'Components/Radio Button',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: { description: { component:
`Selección única dentro de un grupo. Selected = círculo gold \`#ffbc0d\` + checkmark + label bold.

#### ✅ Do's
- Usalo para elegir UNA opción de una lista corta (2–6).
- Agrupá con un \`name\` común para selección excluyente.

#### 🚫 Don'ts
- No lo uses para selección múltiple (usá Checkbox).
- No dejes un grupo sin opción por defecto si siempre debe haber una elegida.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    state: { control: 'select', options: ['default', 'disabled', 'focus'] },
    fill: { control: 'select', options: ['unfilled', 'filled'] },
    label: { control: 'text' },
  },
};

export const Unselected = { args: { selected: false } };
export const Selected = { args: { selected: true } };
export const Filled = { args: { selected: true, fill: 'filled' } };

export const RadioGroup = {
  render: () => {
    const [sel, setSel] = useState('1');
    return React.createElement('div', { style: { padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' } },
      ...['1', '2', '3'].map((v) => React.createElement(Radio, { key: v, label: `Option ${v}`, value: v, selected: sel === v, onSelect: setSel }))
    );
  },
};

export const AllStates = {
  render: () => {
    const Col = (fill, title) => React.createElement('div', null,
      React.createElement('h4', { style: { fontSize: '13px', color: '#6f6f6f', margin: '0 0 12px 0' } }, title),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
        React.createElement(Radio, { fill, selected: false, state: 'default' }),
        React.createElement(Radio, { fill, selected: false, state: 'disabled' }),
        React.createElement(Radio, { fill, selected: false, state: 'focus' }),
        React.createElement(Radio, { fill, selected: true, state: 'default' }),
        React.createElement(Radio, { fill, selected: true, state: 'disabled' }),
        React.createElement(Radio, { fill, selected: true, state: 'focus' })
      )
    );
    return React.createElement('div', { style: { padding: '40px', fontFamily: FONT, display: 'flex', gap: '64px' } },
      Col('filled', 'Filled'),
      Col('unfilled', 'Unfilled')
    );
  },
};
