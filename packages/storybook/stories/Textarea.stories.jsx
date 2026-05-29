import React, { useState, useRef } from 'react';
import { EASING, DURATION, injectMotion } from './_motion';

/**
 * Text Area — pixel-perfect from Figma (TextField section, node 2723:28041)
 * Part of the TextField family. Types: Default · Focus · Error · Warning · Disabled.
 * Filled style: layer-02 (#f9f9f9) bg, 4px radius, 8px padding, Speedee 14/16 -0.15px.
 * Microinteraction: focus border + bg crossfade with strong ease-out (no movement).
 */

injectMotion();

const FONT = 'Speedee, system-ui, sans-serif';

const TYPE_SPEC = {
  default: { bg: '#f9f9f9', border: '1px solid transparent', support: '#6f6f6f' },
  focus:   { bg: '#ffffff', border: '2px solid #292929',     support: '#6f6f6f' },
  error:   { bg: '#ffffff', border: '1px solid #db0007',     support: '#db0007' },
  warning: { bg: '#ffffff', border: '1px solid #fe8234',     support: '#fe8234' },
  disabled:{ bg: '#d6d6d6', border: '1px solid transparent', support: '#adadad' },
};

const TextArea = ({
  label = 'Label',
  placeholder = 'Input text',
  value: controlled,
  type = 'default',
  rows = 4,
  maxLength,
  supportingText,
  width = 328,
}) => {
  const [value, setValue] = useState(controlled || '');
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  const disabled = type === 'disabled';
  // when uncontrolled & focused, surface the focus visual (unless an error/warning type is forced)
  const effective = focused && type === 'default' ? 'focus' : type;
  const spec = TYPE_SPEC[effective];

  const v = controlled !== undefined ? controlled : value;
  const showSupport = supportingText || type === 'error' || type === 'warning';
  const supportMsg = supportingText || (type === 'error' ? 'Mensaje de error' : type === 'warning' ? 'Mensaje de advertencia' : '');

  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 0, width: typeof width === 'number' ? `${width}px` : width } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', padding: '8px' } },
      React.createElement('span', { style: { fontFamily: FONT, fontSize: '14px', lineHeight: '16px', letterSpacing: '-0.15px', color: disabled ? '#adadad' : '#292929' } }, label)
    ),
    React.createElement('textarea', {
      ref,
      placeholder,
      value: v,
      disabled,
      rows,
      maxLength,
      onChange: (e) => { setValue(e.target.value); },
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      style: {
        width: '100%', boxSizing: 'border-box', resize: 'vertical', minHeight: `${rows * 20 + 16}px`,
        padding: '8px', backgroundColor: spec.bg, border: spec.border, borderRadius: '4px',
        fontFamily: FONT, fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.15px',
        color: disabled ? '#adadad' : '#292929', outline: 'none',
        // Microinteraction: only animate color/border/bg — never layout. Reduced-motion safe.
        transition: `border-color ${DURATION.dropdown}ms ${EASING.out}, background-color ${DURATION.dropdown}ms ${EASING.out}`,
      },
    }),
    (showSupport || maxLength) && React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', padding: '8px' } },
      React.createElement('span', { style: { fontFamily: FONT, fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.15px', color: spec.support } }, showSupport ? supportMsg : ''),
      maxLength && React.createElement('span', { style: { fontFamily: FONT, fontSize: '12px', color: v.length >= maxLength ? '#db0007' : '#6f6f6f' } }, `${v.length}/${maxLength}`)
    )
  );
};

export default {
  title: 'Components/TextField/Text Area',
  component: TextArea,
  parameters: {
    layout: 'padded',
    docs: { description: { component:
`**Text Area** — campo multilínea de la familia TextField. Mismo estilo *filled* (\`#f9f9f9\`, radio 4px, Speedee 14/16).

#### ✅ Do's
- Usalo cuando el contenido esperado supera una línea (descripciones, comentarios, notas).
- Mostrá contador \`x/max\` cuando haya \`maxLength\`; ponelo en rojo al llegar al límite.
- Permití redimensionar en vertical (\`resize: vertical\`) y dejá una altura mínima cómoda.

#### 🚫 Don'ts
- No lo uses para datos de una sola línea (usá **TextField**).
- No animes el alto en focus — solo borde/fondo (evita reflow y mareo).
- No deshabilites el resize horizontal con texto largo sin necesidad.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'focus', 'error', 'warning', 'disabled'] },
    rows: { control: { type: 'range', min: 2, max: 10 } },
    maxLength: { control: 'number' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    supportingText: { control: 'text' },
  },
};

export const Default = { args: { label: 'Label', placeholder: 'Input text' } };
export const Focus = { args: { label: 'Label', type: 'focus', value: 'Texto en edición' } };
export const ErrorState = { args: { label: 'Label', type: 'error', supportingText: 'Este campo es obligatorio' } };
export const Warning = { args: { label: 'Label', type: 'warning', supportingText: 'Revisá el contenido ingresado' } };
export const Disabled = { args: { label: 'Label', type: 'disabled', value: 'Contenido deshabilitado' } };
export const WithCounter = { args: { label: 'Bio', placeholder: 'Contanos sobre vos…', maxLength: 200, rows: 3 } };

export const AllTypes = {
  render: () => {
    const types = [['Default', 'default'], ['Focus', 'focus'], ['Error', 'error'], ['Warning', 'warning'], ['Disabled', 'disabled']];
    return React.createElement('div', { style: { padding: '40px', fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' } },
      React.createElement('h2', { style: { margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Text Area — All Types'),
      ...types.map(([labelTxt, t]) => React.createElement('div', { key: t, style: { display: 'flex', flexDirection: 'column', gap: '4px' } },
        React.createElement('span', { style: { fontSize: '12px', color: '#6f6f6f', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' } }, labelTxt),
        React.createElement(TextArea, { type: t, supportingText: t === 'error' ? 'Mensaje de error' : t === 'warning' ? 'Mensaje de advertencia' : undefined })
      ))
    );
  },
};
