import React, { useState } from 'react';
import { EASING, DURATION, injectMotion } from './_motion';

injectMotion();

/**
 * Motion / Microinteractions foundation.
 * Based on Emil Kowalski's design-engineering principles (animations.dev).
 */

export default {
  title: 'Foundations/Motion',
  parameters: { layout: 'fullscreen' },
};

const FONT = 'Speedee, system-ui, sans-serif';
const cell = { padding: '12px 16px', textAlign: 'left', fontFamily: FONT, fontSize: '14px', borderBottom: '1px solid #e8e8e8', color: '#292929' };
const th = { ...cell, fontWeight: 700, backgroundColor: '#f5f5f5' };

const Section = (title, children) => React.createElement('div', { style: { marginTop: '48px' } },
  React.createElement('h2', { style: { margin: '0 0 16px 0', fontFamily: FONT } }, title), children);

const DemoBtn = ({ label = 'Presioná' }) =>
  React.createElement('button', {
    className: 'mcd-pressable',
    style: { height: '40px', padding: '0 16px', borderRadius: '8px', border: 'none', backgroundColor: '#ffbc0d', color: '#292929', fontFamily: FONT, fontSize: '14px', cursor: 'pointer',
      transition: `background-color ${DURATION.press}ms ${EASING.out}` },
  }, label);

const OriginDropdown = () => {
  const [open, setOpen] = useState(false);
  return React.createElement('div', { style: { position: 'relative', display: 'inline-block' } },
    React.createElement('button', { className: 'mcd-pressable', onClick: () => setOpen((o) => !o),
      style: { height: '40px', padding: '0 16px', borderRadius: '8px', border: '1px solid #292929', background: '#fff', fontFamily: FONT, fontSize: '14px', cursor: 'pointer' } }, open ? 'Cerrar' : 'Abrir dropdown ▾'),
    open && React.createElement('div', { className: 'mcd-enter',
      style: { '--mcd-origin': 'top left', position: 'absolute', top: '100%', left: 0, marginTop: '6px', width: '200px', background: '#fff', border: '1px solid #d6d6d6', borderRadius: '8px', boxShadow: '0px 8px 16px rgba(41,41,41,0.16)', overflow: 'hidden', zIndex: 5 } },
      ...['Opción 1', 'Opción 2', 'Opción 3'].map((o) => React.createElement('div', { key: o, style: { padding: '10px 16px', fontFamily: FONT, fontSize: '14px', cursor: 'pointer' } }, o))
    )
  );
};

export const MotionSystem = () =>
  React.createElement('div', { style: { padding: '60px', fontFamily: FONT, maxWidth: '1100px', margin: '0 auto', color: '#292929' } },
    React.createElement('h1', { style: { margin: '0 0 16px 0' } }, 'Motion & Microinteractions'),
    React.createElement('p', { style: { margin: '0 0 8px 0', color: '#6f6f6f', maxWidth: '760px' } },
      'Las microinteracciones del dashboard siguen los principios de Emil Kowalski (animations.dev): curvas de easing fuertes y personalizadas, feedback de presión inmediato, entradas con ease-out, popovers origin-aware, y respeto por prefers-reduced-motion. Los detalles invisibles, en conjunto, hacen que la interfaz se sienta bien.'),

    Section('Easing curves',
      React.createElement('table', { style: { width: '100%', borderCollapse: 'collapse' } },
        React.createElement('thead', null, React.createElement('tr', null,
          React.createElement('th', { style: th }, 'Token'), React.createElement('th', { style: th }, 'cubic-bezier'), React.createElement('th', { style: th }, 'Uso'))),
        React.createElement('tbody', null,
          React.createElement('tr', null, React.createElement('td', { style: cell }, 'ease-out'), React.createElement('td', { style: { ...cell, fontFamily: 'monospace' } }, EASING.out), React.createElement('td', { style: cell }, 'Entradas/salidas de UI (feedback inmediato)')),
          React.createElement('tr', null, React.createElement('td', { style: cell }, 'ease-in-out'), React.createElement('td', { style: { ...cell, fontFamily: 'monospace' } }, EASING.inOut), React.createElement('td', { style: cell }, 'Movimiento/morph en pantalla')),
          React.createElement('tr', null, React.createElement('td', { style: cell }, 'drawer'), React.createElement('td', { style: { ...cell, fontFamily: 'monospace' } }, EASING.drawer), React.createElement('td', { style: cell }, 'Drawers / sheets (iOS-like)')),
          React.createElement('tr', null, React.createElement('td', { style: cell }, 'hover'), React.createElement('td', { style: { ...cell, fontFamily: 'monospace' } }, 'ease'), React.createElement('td', { style: cell }, 'Cambios de color / hover')))
      )
    ),

    Section('Duraciones (UI < 300ms)',
      React.createElement('table', { style: { width: '100%', borderCollapse: 'collapse' } },
        React.createElement('thead', null, React.createElement('tr', null,
          React.createElement('th', { style: th }, 'Elemento'), React.createElement('th', { style: th }, 'Duración'))),
        React.createElement('tbody', null,
          ...[['Press feedback (botón)', `${DURATION.press}ms`], ['Tooltips / popovers chicos', `${DURATION.tooltip}ms`], ['Dropdowns / selects', `${DURATION.dropdown}ms`], ['Modales / drawers', `${DURATION.modal}ms`]]
            .map(([a, b]) => React.createElement('tr', { key: a }, React.createElement('td', { style: cell }, a), React.createElement('td', { style: { ...cell, fontFamily: 'monospace' } }, b))))
      )
    ),

    Section('Probalo',
      React.createElement('div', { style: { display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' } },
        React.createElement('div', null, React.createElement('p', { style: { fontSize: '13px', color: '#6f6f6f' } }, 'Press feedback — scale(0.97) :active'), React.createElement(DemoBtn)),
        React.createElement('div', null, React.createElement('p', { style: { fontSize: '13px', color: '#6f6f6f' } }, 'Origin-aware dropdown — escala desde el trigger'), React.createElement(OriginDropdown))
      )
    ),

    Section("Do's & Don'ts",
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' } },
        React.createElement('div', { style: { border: '1px solid #1f6437', borderRadius: '8px', padding: '20px' } },
          React.createElement('h3', { style: { margin: '0 0 12px 0', color: '#1f6437' } }, '✅ Do'),
          React.createElement('ul', { style: { margin: 0, paddingLeft: '20px', lineHeight: 1.8 } },
            React.createElement('li', null, 'Usá curvas custom fuertes; las de CSS por defecto son débiles.'),
            React.createElement('li', null, 'scale(0.97) en :active para feedback de presión.'),
            React.createElement('li', null, 'Entradas con ease-out (se sienten instantáneas).'),
            React.createElement('li', null, 'Popovers que escalan desde su trigger (origin-aware).'),
            React.createElement('li', null, 'Animá solo transform y opacity (GPU).'),
            React.createElement('li', null, 'Respetá prefers-reduced-motion (mantené fades, sacá movimiento).'))),
        React.createElement('div', { style: { border: '1px solid #db0007', borderRadius: '8px', padding: '20px' } },
          React.createElement('h3', { style: { margin: '0 0 12px 0', color: '#db0007' } }, '🚫 Don\'t'),
          React.createElement('ul', { style: { margin: 0, paddingLeft: '20px', lineHeight: 1.8 } },
            React.createElement('li', null, React.createElement('code', null, 'transition: all'), ' — especificá las props exactas.'),
            React.createElement('li', null, 'Animar desde ', React.createElement('code', null, 'scale(0)'), ' — empezá en 0.95 + opacity.'),
            React.createElement('li', null, React.createElement('code', null, 'ease-in'), ' en UI — se siente lento.'),
            React.createElement('li', null, 'Animar acciones de teclado repetidas (command palette).'),
            React.createElement('li', null, 'Duraciones > 300ms en UI.'),
            React.createElement('li', null, 'Animar width/height/margin (reflow) — usá transform.')))
      )
    )
  );
