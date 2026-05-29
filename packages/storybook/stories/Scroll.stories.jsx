import React from 'react';

/**
 * Scroll — pixel-perfect from Figma (node 5700:4423)
 * Custom scrollbar for content exceeding the viewport (vertical / horizontal).
 * Thin rounded thumb (#adadad) on a subtle track; track transparent / layer-02.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const scrollbarCSS = `
.mcd-scroll::-webkit-scrollbar { width: 8px; height: 8px; }
.mcd-scroll::-webkit-scrollbar-track { background: transparent; }
.mcd-scroll::-webkit-scrollbar-thumb { background: #d6d6d6; border-radius: 8px; }
.mcd-scroll::-webkit-scrollbar-thumb:hover { background: #adadad; }
.mcd-scroll { scrollbar-width: thin; scrollbar-color: #d6d6d6 transparent; }
`;

const Scroll = ({ direction = 'vertical' }) => {
  const isV = direction === 'vertical';
  return React.createElement(React.Fragment, null,
    React.createElement('style', null, scrollbarCSS),
    React.createElement('div', {
      className: 'mcd-scroll',
      style: {
        width: isV ? '320px' : '420px', height: isV ? '320px' : '120px',
        overflowY: isV ? 'auto' : 'hidden', overflowX: isV ? 'hidden' : 'auto',
        border: '1px solid #d6d6d6', borderRadius: '8px', padding: '16px', boxSizing: 'border-box',
        fontFamily: FONT, fontSize: '14px', color: '#292929', backgroundColor: '#FFFFFF',
      },
    },
      isV
        ? React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
            ...Array.from({ length: 20 }, (_, i) => React.createElement('p', { key: i, style: { margin: 0 } }, `Contenido de la fila ${i + 1} — el scroll aparece cuando el contenido supera el alto del contenedor.`)))
        : React.createElement('div', { style: { display: 'flex', gap: '12px', width: '1200px' } },
            ...Array.from({ length: 12 }, (_, i) => React.createElement('div', { key: i, style: { minWidth: '120px', height: '72px', backgroundColor: '#f9f9f9', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, `Card ${i + 1}`)))
    )
  );
};

export default {
  title: 'Components/Scroll',
  component: Scroll,
  parameters: {
    layout: 'padded',
    docs: { description: { component:
`Scrollbar custom fino para contenido que supera el viewport (vertical / horizontal). Thumb \`#d6d6d6\` redondeado.

#### ✅ Do's
- Usalo cuando el contenido excede el contenedor; mantené el thumb visible.
- Preferí scroll vertical; el horizontal con indicio claro.

#### 🚫 Don'ts
- No ocultes del todo el scrollbar (perjudica la descubribilidad).
- No fuerces scroll horizontal sin necesidad.` } },
  },
  tags: ['autodocs'],
  argTypes: { direction: { control: 'select', options: ['vertical', 'horizontal'] } },
};

export const Vertical = { args: { direction: 'vertical' } };
export const Horizontal = { args: { direction: 'horizontal' } };
