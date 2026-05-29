import React from 'react';
import { injectMotion } from './_motion';

injectMotion();

/**
 * Tag — pixel-perfect from Figma (node 857:22446)
 * Fill mode: Fill (layer-03 #d6d6d6) | Outline (white + 1px #292929 border)
 * Content: icon+text | icon | text
 * Tag-operations: closable (X) variant for very long text descriptions
 * Color tags: green, light-blue, gold, pink (soft palette). Dark mode → adjust text manually.
 */

const FONT = 'Speedee, system-ui, sans-serif';

// McDonald's arches mark
const MIcon = ({ color = '#292929', size = 16 }) =>
  React.createElement(
    'svg',
    { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' },
    React.createElement('path', {
      d: 'M7 19V8c0-2 3-2 3 0v5m0-5c0-2 4-2 4 0v11m0-11c0-2 3-2 3 0v11',
      stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round',
    })
  );

const CloseIcon = ({ color = '#292929', size = 14 }) =>
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' },
    React.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18, stroke: color, strokeWidth: 1.8, strokeLinecap: 'round' }),
    React.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18, stroke: color, strokeWidth: 1.8, strokeLinecap: 'round' })
  );

const COLOR_TAGS = {
  green:     { bg: '#E2EABF', text: '#1F6437' },
  lightblue: { bg: '#CCF0FF', text: '#006BAE' },
  gold:      { bg: '#FFBC0D', text: '#292929' },
  pink:      { bg: '#FFCEC4', text: '#9A0005' },
};

const Tag = ({
  text = 'Text',
  fill = 'fill',          // 'fill' | 'outline'
  content = 'icon-text',  // 'icon-text' | 'icon' | 'text'
  color,                  // optional key of COLOR_TAGS
  closable = false,
  onClose,
}) => {
  let bg, fg, border;
  if (color && COLOR_TAGS[color]) {
    bg = COLOR_TAGS[color].bg; fg = COLOR_TAGS[color].text; border = 'none';
  } else if (fill === 'outline') {
    bg = '#FFFFFF'; fg = '#292929'; border = '1px solid #292929';
  } else {
    bg = '#d6d6d6'; fg = '#292929'; border = 'none';
  }

  const showIcon = content === 'icon-text' || content === 'icon';
  const showText = content === 'icon-text' || content === 'text';

  return React.createElement(
    'div',
    {
      style: {
        display: 'inline-flex', alignItems: 'center', gap: '4px',
        backgroundColor: bg, color: fg, border,
        padding: '4px 8px', borderRadius: '16px',
        fontFamily: FONT, fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.15px',
      },
    },
    closable && React.createElement(
      'button',
      { onClick: onClose, className: 'mcd-pressable', style: { background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' } },
      React.createElement(CloseIcon, { color: fg })
    ),
    showIcon && React.createElement(MIcon, { color: color === 'gold' ? '#DB0007' : fg, size: 16 }),
    showText && React.createElement('span', null, text)
  );
};

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: { description: { component:
`Etiqueta de estado/categoría. Fill (énfasis) / Outline (sutil), color tags semánticos, variante closable (operations).

#### ✅ Do's
- Usá color tags para estados (verde=ok, rojo=error, etc.).
- Closable solo cuando el tag representa un filtro removible.

#### 🚫 Don'ts
- No uses tags como botones de acción.
- No abuses de los colores: pierden significado.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    fill: { control: 'select', options: ['fill', 'outline'] },
    content: { control: 'select', options: ['icon-text', 'icon', 'text'] },
    color: { control: 'select', options: [undefined, 'green', 'lightblue', 'gold', 'pink'] },
    closable: { control: 'boolean' },
    text: { control: 'text' },
  },
};

export const Fill = { args: { text: 'Text', fill: 'fill', content: 'icon-text' } };
export const Outline = { args: { text: 'Text', fill: 'outline', content: 'icon-text' } };
export const TextOnly = { args: { text: 'Text', content: 'text' } };
export const IconOnly = { args: { content: 'icon' } };

const Cell = (label, node) =>
  React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
    React.createElement('span', { style: { width: '90px', fontSize: '12px', color: '#6f6f6f', fontFamily: FONT } }, label),
    node
  );

export const AllVariants = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: '40px' } },
      React.createElement('div', { style: { display: 'flex', gap: '64px' } },
        React.createElement('div', null,
          React.createElement('h3', { style: { fontSize: '14px', margin: '0 0 16px 0' } }, 'State + Fill'),
          React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
            Cell('Icon + text', React.createElement(Tag, { fill: 'fill', content: 'icon-text' })),
            Cell('Icon', React.createElement(Tag, { fill: 'fill', content: 'icon' })),
            Cell('Text', React.createElement(Tag, { fill: 'fill', content: 'text' })),
          )
        ),
        React.createElement('div', null,
          React.createElement('h3', { style: { fontSize: '14px', margin: '0 0 16px 0' } }, 'State + Outline'),
          React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
            Cell('Icon + text', React.createElement(Tag, { fill: 'outline', content: 'icon-text' })),
            Cell('Icon', React.createElement(Tag, { fill: 'outline', content: 'icon' })),
            Cell('Text', React.createElement(Tag, { fill: 'outline', content: 'text' })),
          )
        )
      ),
      React.createElement('div', null,
        React.createElement('h3', { style: { fontSize: '14px', margin: '0 0 8px 0' } }, 'Tag-operations'),
        React.createElement('p', { style: { fontSize: '12px', color: '#6f6f6f', margin: '0 0 16px 0' } }, 'Uso exclusivo en casos de texto muy extensos que deban ser mostrados.'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' } },
          React.createElement(Tag, { fill: 'fill', content: 'text', text: 'Tag content with a long text description', closable: true }),
          React.createElement(Tag, { fill: 'outline', content: 'text', text: 'Tag content with a long text description', closable: true }),
        )
      ),
      React.createElement('div', null,
        React.createElement('h3', { style: { fontSize: '14px', margin: '0 0 16px 0' } }, 'Uso de tag con colores'),
        React.createElement('div', { style: { display: 'flex', gap: '12px' } },
          React.createElement(Tag, { color: 'green', content: 'icon-text' }),
          React.createElement(Tag, { color: 'lightblue', content: 'icon-text' }),
          React.createElement(Tag, { color: 'gold', content: 'icon-text' }),
          React.createElement(Tag, { color: 'pink', content: 'icon-text' }),
        )
      )
    ),
};
