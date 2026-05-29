import React, { useState } from 'react';

/**
 * TextField — Pixel-perfect rebuild from Figma
 * Source: [DashBoard] Fuondation · node 857:22444
 *
 * Design tokens (exact from Figma):
 *   Spaces:  -050=4 · 100=8 · 200=16 · 300=24 · 400=32
 *   Color/Layer/layer-02   #f9f9f9  (default input background)
 *   Color/Layer/layer-03   #d6d6d6  (disabled background)
 *   Color/Background/bg-01 #ffffff  (active/error/success background)
 *   Color/Text/text-primary   #292929
 *   Color/Text/text-secondary #6f6f6f  (placeholder / supporting)
 *   Color/Text/text-disabled  #adadad
 *   Color/Support/support-error   #db0007
 *   Color/Support/support-Success #1f6437
 *   Radius: 4px · Padding: 8px · Font: Speedee Regular 14/16, -0.15px
 */

// Inline SVG icons (24px) matching Figma's Search / Close
const SearchIcon = ({ color = '#6f6f6f' }) =>
  React.createElement(
    'svg',
    { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
    React.createElement('circle', { cx: 11, cy: 11, r: 6, stroke: color, strokeWidth: 1.6 }),
    React.createElement('line', { x1: 15.5, y1: 15.5, x2: 20, y2: 20, stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' })
  );

const CloseIcon = ({ color = '#6f6f6f' }) =>
  React.createElement(
    'svg',
    { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
    React.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18, stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' }),
    React.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18, stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' })
  );

// Exact per-state visual spec, mirrored from the Figma screenshot + tokens
const STATE_SPEC = {
  default:  { bg: '#f9f9f9', border: 'none',                placeholder: '#6f6f6f', icon: '#6f6f6f' },
  hovered:  { bg: '#ffffff', border: '1px solid #d6d6d6',   placeholder: '#6f6f6f', icon: '#6f6f6f' },
  focused:  { bg: '#f9f9f9', border: '1px solid #d6d6d6',   placeholder: '#6f6f6f', icon: '#6f6f6f' },
  pressed:  { bg: '#f9f9f9', border: '1px solid #292929',   placeholder: '#6f6f6f', icon: '#292929' },
  typing:   { bg: '#ffffff', border: '2px solid #292929',   placeholder: '#292929', icon: '#292929' },
  complete: { bg: '#f9f9f9', border: '1px solid #d6d6d6',   placeholder: '#292929', icon: '#292929' },
  error:    { bg: '#ffffff', border: '1px solid #db0007',   placeholder: '#6f6f6f', icon: '#6f6f6f' },
  success:  { bg: '#ffffff', border: '1px solid #1f6437',   placeholder: '#6f6f6f', icon: '#6f6f6f' },
  disabled: { bg: '#d6d6d6', border: 'none',                placeholder: '#adadad', icon: '#adadad' },
};

const FONT = 'Speedee, system-ui, sans-serif';

const TextField = ({
  label = 'Label',
  text = 'Input text',
  state = 'default',
  iconLeft = true,
  iconRight = true,
  supportingText,
  showCantidad = false,
  cantidad = 4,
  width = 321,
}) => {
  const spec = STATE_SPEC[state] || STATE_SPEC.default;
  const isError = state === 'error';
  const supportColor = isError ? '#db0007' : '#6f6f6f';

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: 0, width: typeof width === 'number' ? `${width}px` : width } },

    // Label (padding 8px)
    React.createElement(
      'div',
      { style: { display: 'flex', alignItems: 'center', padding: '8px' } },
      React.createElement('span', {
        style: { fontFamily: FONT, fontWeight: 400, fontSize: '14px', lineHeight: '16px', letterSpacing: '-0.15px', color: '#292929' },
      }, label)
    ),

    // input-text box
    React.createElement(
      'div',
      {
        style: {
          display: 'flex', alignItems: 'center', gap: '8px', padding: '8px',
          backgroundColor: spec.bg, borderRadius: '4px', border: spec.border, width: '100%', boxSizing: 'border-box',
        },
      },
      iconLeft && React.createElement(SearchIcon, { color: spec.icon }),
      React.createElement('div', { style: { flex: '1 1 0', minWidth: 0, height: '24px', display: 'flex', alignItems: 'center' } },
        React.createElement('span', {
          style: { fontFamily: FONT, fontWeight: 400, fontSize: '14px', lineHeight: '16px', letterSpacing: '-0.15px', color: spec.placeholder },
        }, state === 'typing' ? 'Item…' : text),
        state === 'typing' && React.createElement('span', {
          style: { width: '1px', height: '16px', backgroundColor: '#292929', marginLeft: '1px' },
        })
      ),
      showCantidad && React.createElement('div', {
        style: { backgroundColor: '#ffbc0d', borderRadius: '16px', padding: '4px', minWidth: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
      },
        React.createElement('span', { style: { fontFamily: FONT, fontWeight: 400, fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.15px', color: '#292929' } }, cantidad)
      ),
      iconRight && React.createElement(CloseIcon, { color: spec.icon })
    ),

    // supporting text (always shown in error; optional otherwise)
    (supportingText || isError) && React.createElement(
      'div',
      { style: { display: 'flex', alignItems: 'center', padding: '8px' } },
      React.createElement('span', {
        style: { fontFamily: FONT, fontWeight: 400, fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.15px', color: supportColor },
      }, supportingText || 'Supporting text')
    )
  );
};

export default {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'padded',
    docs: { description: { component:
`Campo de texto de una línea. Estilo *filled* (\`#f9f9f9\`, radio 4px, Speedee 14/16). 9 estados: default, hover, focus, pressed, active-typing, complete, error, success, disabled. Slots de icono izq/der, badge de cantidad y supporting text. Para multilínea usá **TextField/Text Area**.

#### ✅ Do's
- Label siempre visible arriba; placeholder como ejemplo, no como label.
- Supporting text en rojo (\`#db0007\`) para error; verde para success.
- Icono izquierdo para contexto (buscar), derecho para acción (limpiar).

#### 🚫 Don'ts
- No uses el placeholder como única etiqueta (desaparece al escribir).
- No deshabilites por validación — mostrá el error y guiá.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['default', 'hovered', 'focused', 'pressed', 'typing', 'complete', 'error', 'success', 'disabled'] },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
    showCantidad: { control: 'boolean' },
    label: { control: 'text' },
    text: { control: 'text' },
    supportingText: { control: 'text' },
  },
};

export const Default = { args: { label: 'Label', text: 'Input text', state: 'default' } };
export const Focused = { args: { label: 'Label', text: 'Input text', state: 'focused' } };
export const ActiveTyping = { args: { label: 'Label', state: 'typing' } };
export const ErrorState = { args: { label: 'Label', text: 'Input text', state: 'error', supportingText: 'Supporting text' } };
export const Success = { args: { label: 'Label', text: 'Input text', state: 'success' } };
export const Disabled = { args: { label: 'Label', text: 'Input text', state: 'disabled' } };
export const WithCantidad = { args: { label: 'Label', text: 'Input text', state: 'default', showCantidad: true, cantidad: 4 } };

export const AllStates = {
  render: () => {
    const states = [
      ['enabled', 'default'], ['hovered', 'hovered'], ['focused', 'focused'], ['pressed', 'pressed'],
      ['active - typing', 'typing'], ['complete', 'complete'], ['error', 'error'], ['success', 'success'], ['disabled', 'disabled'],
    ];
    return React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '420px' } },
      React.createElement('h2', { style: { margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold', fontFamily: FONT } }, 'TextField — All States'),
      ...states.map(([labelTxt, st]) =>
        React.createElement('div', { key: st, style: { display: 'flex', flexDirection: 'column', gap: '4px' } },
          React.createElement('span', { style: { fontSize: '12px', color: '#6f6f6f', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' } }, labelTxt),
          React.createElement(TextField, { state: st, supportingText: st === 'error' ? 'Supporting text' : undefined })
        )
      )
    );
  },
};
