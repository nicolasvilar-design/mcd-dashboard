import React, { useState } from 'react';
import { injectMotion } from './_motion';

injectMotion();

const ORIGIN = { top: 'bottom center', bottom: 'top center', left: 'right center', right: 'left center' };

/**
 * Tooltip — pixel-perfect from Figma (node 2713:5222)
 * Always dark (#292929) with white text, 4px radius, caret pointing to the element.
 * Positions: top/bottom/left/right. Sizes: small (1 line) / big (multi-line).
 * Sits 4px from the anchor element.
 */

const FONT = 'Speedee, system-ui, sans-serif';
const BG = '#292929';
const GAP = 4;

const caret = (position) => {
  const base = { position: 'absolute', width: 0, height: 0 };
  switch (position) {
    case 'top':    return { ...base, bottom: '-6px', left: '50%', transform: 'translateX(-50%)', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: `6px solid ${BG}` };
    case 'bottom': return { ...base, top: '-6px', left: '50%', transform: 'translateX(-50%)', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: `6px solid ${BG}` };
    case 'left':   return { ...base, right: '-6px', top: '50%', transform: 'translateY(-50%)', borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: `6px solid ${BG}` };
    case 'right':  return { ...base, left: '-6px', top: '50%', transform: 'translateY(-50%)', borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderRight: `6px solid ${BG}` };
    default: return base;
  }
};

const bubblePos = (position) => {
  switch (position) {
    case 'top':    return { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: `${GAP + 6}px` };
    case 'bottom': return { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: `${GAP + 6}px` };
    case 'left':   return { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: `${GAP + 6}px` };
    case 'right':  return { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: `${GAP + 6}px` };
    default: return {};
  }
};

const Tooltip = ({ text = 'Tooltip', position = 'top', size = 'small', children, alwaysVisible = false }) => {
  const [show, setShow] = useState(false);
  const visible = alwaysVisible || show;
  const isBig = size === 'big';

  return React.createElement('div', { style: { position: 'relative', display: 'inline-block' },
    onMouseEnter: () => setShow(true), onMouseLeave: () => setShow(false) },
    children,
    visible && React.createElement('div', {
      className: 'mcd-tip-enter',
      style: {
        '--mcd-origin': ORIGIN[position],
        position: 'absolute', backgroundColor: BG, color: '#ffffff', borderRadius: '4px',
        padding: isBig ? '8px 12px' : '6px 10px', fontFamily: FONT, fontSize: '12px', lineHeight: '16px',
        letterSpacing: '-0.15px', whiteSpace: isBig ? 'normal' : 'nowrap', maxWidth: isBig ? '200px' : 'none',
        zIndex: 1000, ...bubblePos(position),
      },
    },
      text,
      React.createElement('span', { style: caret(position) })
    )
  );
};

const Anchor = (label = 'Hover me') =>
  React.createElement('button', { style: { padding: '8px 16px', backgroundColor: '#ffbc0d', border: 'none', borderRadius: '8px', cursor: 'pointer', fontFamily: FONT, fontSize: '14px' } }, label);

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: { description: { component:
`Información contextual al hacer hover. Dark \`#292929\` + texto blanco + caret.

**Microinteracción:** entra escalando desde el caret (origin-aware) con ease-out, 160ms.

#### ✅ Do's
- Texto breve; usá el tamaño *big* solo para explicaciones de varias líneas.
- Posicioná a 4px del elemento, apuntando con el caret.

#### 🚫 Don'ts
- No metas información esencial solo en el tooltip (no accesible en touch).
- No lo uses para contenido interactivo (usá Popover/Modal).` } },
  },
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    size: { control: 'select', options: ['small', 'big'] },
    text: { control: 'text' },
  },
};

export const Default = { args: { text: 'Tooltip', position: 'top', children: Anchor() } };
export const Big = { args: { text: 'Uso de cuatro líneas de texto para descripciones más extensas dentro del tooltip.', size: 'big', position: 'top', children: Anchor() } };

export const AllPositions = {
  render: () => React.createElement('div', { style: { padding: '80px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '64px', justifyItems: 'center', fontFamily: FONT } },
    ...['top', 'right', 'left', 'bottom'].map((p) =>
      React.createElement(Tooltip, { key: p, text: 'Tooltip', position: p, alwaysVisible: true, children: Anchor(p) })
    )
  ),
};
