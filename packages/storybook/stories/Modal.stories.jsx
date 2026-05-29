import React, { useState } from 'react';
import { injectMotion } from './_motion';

injectMotion();

/**
 * Modal — pixel-perfect from Figma (node 3124:6301)
 * Card dialog: [optional eyebrow text] · Título · close(X) · body · footer (secondary + primary gold).
 * Sizes small/medium/large. Optional image panel variant.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const Btn = ({ variant = 'primary', children, onClick }) => React.createElement('button', {
  onClick,
  style: {
    height: '40px', padding: '0 16px', borderRadius: '8px', fontFamily: FONT, fontSize: '14px', letterSpacing: '-0.15px',
    cursor: 'pointer', border: variant === 'secondary' ? '1px solid #292929' : 'none',
    backgroundColor: variant === 'secondary' ? '#ffffff' : '#ffbc0d', color: '#292929',
  },
}, children);

const Modal = ({ title = 'Título', optionalText = 'Optional text', body, isOpen = true, size = 'medium', onClose }) => {
  if (!isOpen) return null;
  const widths = { small: 360, medium: 460, large: 640 };
  return React.createElement('div', {
    className: 'mcd-overlay-enter',
    style: { position: 'fixed', inset: 0, backgroundColor: 'rgba(41,41,41,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
  },
    React.createElement('div', {
      className: 'mcd-modal-enter',
      style: { backgroundColor: '#fff', borderRadius: '8px', width: `${widths[size]}px`, maxWidth: '92vw', boxShadow: '0px 8px 16px rgba(41,41,41,0.16)', fontFamily: FONT, overflow: 'hidden' },
    },
      React.createElement('div', { style: { padding: '24px 24px 0 24px' } },
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
          React.createElement('div', null,
            optionalText && React.createElement('div', { style: { fontSize: '12px', color: '#6f6f6f', marginBottom: '4px' } }, optionalText),
            React.createElement('h2', { style: { margin: 0, fontSize: '20px', fontWeight: 700, color: '#292929' } }, title)
          ),
          React.createElement('button', { onClick: onClose, style: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#292929', lineHeight: 1 } }, '✕')
        )
      ),
      React.createElement('div', { style: { padding: '16px 24px 24px 24px', fontSize: '14px', color: '#292929', lineHeight: '20px' } },
        body || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'),
      React.createElement('div', { style: { display: 'flex', gap: '12px', justifyContent: 'flex-end', padding: '0 24px 24px 24px' } },
        React.createElement(Btn, { variant: 'secondary', onClick: onClose }, 'Label'),
        React.createElement(Btn, { variant: 'primary', onClick: onClose }, 'Label')
      )
    )
  );
};

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component:
`Diálogo modal centrado con overlay. Header (eyebrow + título + X), body, footer (secundario + primario gold).

**Microinteracción:** el modal escala desde el centro (NO origin-aware) + overlay con fade, ease-out.

#### ✅ Do's
- Reservalo para decisiones que requieren foco (confirmaciones, formularios cortos).
- Acción primaria a la derecha; permití cerrar con X y click en overlay.

#### 🚫 Don'ts
- No anides modales ni metas flujos largos (usá una página).
- No animes desde un trigger — los modales quedan centrados.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    title: { control: 'text' },
    optionalText: { control: 'text' },
  },
};

export const Default = { args: { isOpen: true, title: 'Título', optionalText: 'Optional text' } };
export const TitleOnly = { args: { isOpen: true, title: 'Título', optionalText: '' } };
export const Large = { args: { isOpen: true, size: 'large', title: 'Título', optionalText: 'Optional text' } };

export const Interactive = {
  render: () => {
    const [open, setOpen] = useState(false);
    return React.createElement('div', { style: { padding: '40px' } },
      React.createElement(Btn, { onClick: () => setOpen(true) }, 'Abrir modal'),
      React.createElement(Modal, { isOpen: open, onClose: () => setOpen(false) })
    );
  },
};
