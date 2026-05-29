import React from 'react';
import { EASING, DURATION, injectMotion } from './_motion';

injectMotion();

/**
 * Button — pixel-perfect from Figma (node 4298:13512)
 *
 * Exact tokens:
 *   Primary:   enabled #ffbc0d · hover #ffd46a · pressed #c08800 · disabled #ffe49e · text #292929
 *   Secondary: bg #ffffff · stroke #292929 · hover/focus #d6d6d6 · text #292929 · disabled #d6d6d6
 *   Red:       enabled #db0007 · hover #ff161d · pressed #b20006 · disabled #ffe7e8 · text #ffffff
 *   text-disabled #adadad · Font Label02 = Speedee Regular 14/16, -0.15px
 *   Sizes (height): small 32 · medium 40 (Spaces/500) · large 48
 */

const FONT = 'Speedee, system-ui, sans-serif';

const COLORS = {
  primary: {
    light: { enabled: '#ffbc0d', hovered: '#ffd46a', focused: '#ffbc0d', pressed: '#c08800', disabled: '#ffe49e', text: '#292929', stroke: 'transparent', focusStroke: '#292929' },
    dark:  { enabled: '#ffbc0d', hovered: '#ffd46a', focused: '#ffbc0d', pressed: '#c08800', disabled: '#ffe49e', text: '#292929', stroke: 'transparent', focusStroke: '#ffffff' },
  },
  secondary: {
    light: { enabled: '#ffffff', hovered: '#d6d6d6', focused: '#d6d6d6', pressed: '#ffffff', disabled: '#d6d6d6', text: '#292929', stroke: '#292929', focusStroke: '#292929' },
    dark:  { enabled: '#4b4b4b', hovered: '#666666', focused: '#4b4b4b', pressed: '#4b4b4b', disabled: '#4b4b4b', text: '#ffffff', stroke: '#ffffff', focusStroke: '#ffffff' },
  },
  delete: {
    light: { enabled: '#db0007', hovered: '#ff161d', focused: '#db0007', pressed: '#b20006', disabled: '#ffe7e8', text: '#ffffff', stroke: 'transparent', focusStroke: '#292929' },
    dark:  { enabled: '#db0007', hovered: '#ff161d', focused: '#db0007', pressed: '#b20006', disabled: '#ffe7e8', text: '#ffffff', stroke: '#ffffff', focusStroke: '#ffffff' },
  },
};

const SIZES = {
  small:  { height: '32px', padding: '0 12px', fontSize: '14px' },
  medium: { height: '40px', padding: '0 16px', fontSize: '14px' },
  large:  { height: '48px', padding: '0 24px', fontSize: '16px' },
};

const Button = ({ variant = 'primary', size = 'medium', state = 'enabled', children = 'Label', isDarkMode = false }) => {
  const mode = isDarkMode ? 'dark' : 'light';
  const c = COLORS[variant][mode];
  const sz = SIZES[size];
  const disabled = state === 'disabled';
  const bg = c[state];
  const textColor = disabled ? '#adadad' : c.text;

  // border: secondary always has stroke; focused state adds focus ring on all variants
  let border = 'none';
  if (c.stroke !== 'transparent') border = `1px solid ${c.stroke}`;
  if (state === 'focused') border = `2px solid ${c.focusStroke}`;

  return React.createElement('button', {
    disabled,
    className: disabled ? undefined : 'mcd-pressable',
    style: {
      height: sz.height, padding: sz.padding, fontSize: sz.fontSize,
      fontFamily: FONT, fontWeight: 400, lineHeight: '16px', letterSpacing: '-0.15px',
      backgroundColor: bg, color: textColor, border, borderRadius: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      // Microinteraction: scale(0.97) on :active via .mcd-pressable. Specific props only (no `all`).
      transition: `background-color ${DURATION.press}ms ${EASING.out}, border-color ${DURATION.press}ms ${EASING.out}, color ${DURATION.press}ms ${EASING.out}`,
      boxSizing: 'border-box',
    },
  }, children);
};

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: { description: { component:
`Botón de acción. 3 variantes (primary/secondary/delete) × 5 estados.

**Microinteracción:** \`scale(0.97)\` en \`:active\` con ease-out fuerte (\`cubic-bezier(0.23,1,0.32,1)\`, ${DURATION.press}ms) para feedback de presión inmediato. Respeta \`prefers-reduced-motion\`.

#### ✅ Do's
- Una sola acción primaria (gold) por vista; el resto secundarias.
- Mantené el CTA habilitado por defecto; marcá errores en el formulario, no deshabilites el botón.
- Verbo de acción claro y corto en el label ("Guardar", "Crear restaurante").

#### 🚫 Don'ts
- No uses \`delete\` (rojo) para acciones no destructivas.
- No deshabilites por errores de validación — guiá al usuario.
- No animes botones disparados por teclado de forma repetida; el press feedback alcanza.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'delete'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'disabled'] },
    isDarkMode: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Primary = { args: { variant: 'primary', children: 'Label' } };
export const Secondary = { args: { variant: 'secondary', children: 'Label' } };
export const Delete = { args: { variant: 'delete', children: 'Label' } };
export const Disabled = { args: { variant: 'primary', state: 'disabled', children: 'Label' } };

const STATES = ['enabled', 'hovered', 'focused', 'pressed', 'disabled'];
const VARIANTS = [['Primary', 'primary'], ['Secondary', 'secondary'], ['Delete', 'delete']];

const Matrix = ({ isDarkMode }) =>
  React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '90px repeat(3, 1fr)', gap: '16px', alignItems: 'center' } },
    React.createElement('span', null),
    ...VARIANTS.map(([label]) => React.createElement('span', { key: label, style: { fontSize: '13px', fontWeight: 700, color: isDarkMode ? '#fff' : '#292929', fontFamily: FONT } }, label)),
    ...STATES.flatMap((st) => [
      React.createElement('span', { key: `${st}-l`, style: { fontSize: '12px', color: isDarkMode ? '#adadad' : '#6f6f6f', fontFamily: FONT } }, st),
      ...VARIANTS.map(([, v]) => React.createElement('div', { key: `${st}-${v}` }, React.createElement(Button, { variant: v, state: st, isDarkMode, children: 'Label' }))),
    ])
  );

export const AllStates = {
  render: () => React.createElement('div', { style: { padding: '40px', fontFamily: FONT } },
    React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Button — 3 variants × 5 states'),
    React.createElement(Matrix, { isDarkMode: false })
  ),
};

export const DarkMode = {
  render: () => React.createElement('div', { style: { padding: '40px', fontFamily: FONT, backgroundColor: '#1a1a1a', borderRadius: '8px' } },
    React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#fff' } }, 'Button — Dark mode'),
    React.createElement(Matrix, { isDarkMode: true })
  ),
  parameters: { backgrounds: { default: 'dark' } },
};

export const Behavior = {
  render: () => React.createElement('div', { style: { padding: '40px', fontFamily: FONT, maxWidth: '760px' } },
    React.createElement('h2', null, 'Comportamiento de los botones'),
    React.createElement('p', { style: { color: '#0F62FE', fontWeight: 700 } }, 'Los CTA estarán siempre en estado habilitado por defecto, salvo en casos puntuales (roles o acciones ya realizadas).'),
    React.createElement('h3', { style: { marginTop: '24px' } }, 'En formularios'),
    React.createElement('ul', null,
      React.createElement('li', null, 'Si faltan campos obligatorios o hay errores, estos se marcarán para guiar al usuario.'),
      React.createElement('li', null, 'No se deshabilitará el CTA, para permitir reintentar sin buscar cómo reactivarlo.')),
    React.createElement('h3', { style: { marginTop: '24px' } }, 'Uso del estado deshabilitado'),
    React.createElement('ul', null,
      React.createElement('li', null, 'Restricciones por rol: el usuario no tiene permiso para ejecutar la acción.'),
      React.createElement('li', null, 'Acción no repetible: ya fue realizada y no es posible volver a ejecutarla.'),
      React.createElement('li', null, 'Debe ser visualmente distinto y no responder a interacciones.'))
  ),
};
