import React, { useState } from 'react';

/**
 * Link — pixel-perfect from Figma (node 847:3503)
 * Figma's Link component is a back-navigation link: ← Label, #292929 text + arrow.
 * Also supports an inline text link using link-primary (#0f62fe).
 * Variants: back (default, with arrow) · inline · external. States: enabled/hover/disabled.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const ArrowLeft = ({ color }) => React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
  React.createElement('path', { d: 'M19 12H5M5 12l6-6M5 12l6 6', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }));

const Link = ({ label = 'Label', variant = 'back', disabled = false, href = '#', onClick }) => {
  const [hover, setHover] = useState(false);

  const isInline = variant === 'inline' || variant === 'external';
  const baseColor = isInline ? '#0f62fe' : '#292929';
  const hoverColor = isInline ? '#054ADA' : '#000000';
  const color = disabled ? '#adadad' : (hover ? hoverColor : baseColor);

  return React.createElement('a', {
    href: disabled ? undefined : href,
    onClick: disabled ? (e) => e.preventDefault() : onClick,
    target: variant === 'external' && !disabled ? '_blank' : undefined,
    rel: variant === 'external' && !disabled ? 'noopener noreferrer' : undefined,
    onMouseEnter: () => !disabled && setHover(true), onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex', alignItems: 'center', gap: '8px', color,
      fontFamily: FONT, fontSize: '14px', fontWeight: 700, letterSpacing: '-0.15px',
      textDecoration: isInline && (hover || !disabled) ? (hover ? 'underline' : 'none') : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer', transition: 'color 150ms cubic-bezier(0.4,0,0.2,1)',
    },
  },
    variant === 'back' && React.createElement(ArrowLeft, { color }),
    React.createElement('span', null, label),
    variant === 'external' && !disabled && React.createElement('span', null, '↗')
  );
};

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: { description: { component:
`Enlace. Back-link (← Label, \`#292929\`) para volver; inline azul \`#0f62fe\` para links en texto; external con ↗.

#### ✅ Do's
- Back-link para navegación "atrás"; inline para referencias en contenido.
- External abre en pestaña nueva con indicador ↗.

#### 🚫 Don'ts
- No uses link para acciones destructivas o primarias (usá Button).
- No subrayes permanentemente si rompe la lectura del texto.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['back', 'inline', 'external'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const Back = { args: { label: 'Label', variant: 'back' } };
export const Inline = { args: { label: 'Inline link', variant: 'inline' } };
export const External = { args: { label: 'External link', variant: 'external' } };
export const Disabled = { args: { label: 'Label', variant: 'back', disabled: true } };

export const AllVariants = {
  render: () => React.createElement('div', { style: { padding: '40px', fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' } },
    React.createElement(Link, { label: 'Label', variant: 'back' }),
    React.createElement(Link, { label: 'Inline link', variant: 'inline' }),
    React.createElement(Link, { label: 'External link', variant: 'external' }),
    React.createElement(Link, { label: 'Disabled', variant: 'back', disabled: true })
  ),
};
