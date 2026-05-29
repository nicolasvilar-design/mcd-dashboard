import React, { useState } from 'react';
import { EASING, DURATION, injectMotion } from './_motion';

injectMotion();

/**
 * FAB — Floating Action Button · pixel-perfect from Figma (node 3124:6304)
 *
 * Sizes:  Small = 32px · Medium = 48px (circular)
 * Styles: Primary (gold), Secondary (white), Tipografia (initials avatar)
 * States: enabled, hovered, focused, pressed
 * Elevation/Bordered Down: drop-shadow (0,8) blur 16 · rgba(41,41,41,0.16)
 * Tokens: button-primary #FFBC0D, hover #FFD46A, pressed #C08800,
 *         button-secondary-hover #d6d6d6, border-01 #292929
 */

const ELEVATION = '0px 8px 16px rgba(41, 41, 41, 0.16)';

const STYLE_SPEC = {
  primary: {
    enabled: { bg: '#FFBC0D', border: 'none',               fg: '#292929' },
    hovered: { bg: '#FFD46A', border: 'none',               fg: '#292929' },
    focused: { bg: '#FFBC0D', border: '1px solid #292929',  fg: '#292929' },
    pressed: { bg: '#C08800', border: 'none',               fg: '#292929' },
  },
  secondary: {
    enabled: { bg: '#FFFFFF', border: '1px solid #d6d6d6',  fg: '#292929' },
    hovered: { bg: '#d6d6d6', border: 'none',               fg: '#292929' },
    focused: { bg: '#d6d6d6', border: '1px solid #292929',  fg: '#292929' },
    pressed: { bg: '#FFFFFF', border: '1px solid #292929',  fg: '#292929' },
  },
};

const SIZES = { small: 32, medium: 48 };

const PencilIcon = ({ color = '#292929', size = 16 }) =>
  React.createElement(
    'svg',
    { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' },
    React.createElement('path', {
      d: 'M4 20h4l10-10a2 2 0 0 0-3-3L5 17v3z M13.5 6.5l3 3',
      stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round',
    })
  );

const FAB = ({
  variant = 'primary',
  size = 'medium',
  state = 'enabled',
  style = 'icon', // 'icon' | 'tipografia'
  initials = 'RA',
  floating = true,
}) => {
  const px = SIZES[size];
  const spec = (STYLE_SPEC[variant] || STYLE_SPEC.primary)[state];
  const iconSize = size === 'small' ? 16 : 22;

  return React.createElement(
    'button',
    {
      className: 'mcd-pressable mcd-hover-lift',
      style: {
        width: `${px}px`, height: `${px}px`, borderRadius: '50%',
        backgroundColor: spec.bg, border: spec.border,
        boxShadow: floating ? ELEVATION : 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', padding: 0,
        // Floating element: subtle hover-lift + press scale, specific props only.
        transition: `background-color ${DURATION.press}ms ${EASING.out}, transform ${DURATION.press}ms ${EASING.out}, box-shadow ${DURATION.press}ms ${EASING.out}`,
        fontFamily: 'Speedee, system-ui, sans-serif',
      },
    },
    style === 'tipografia'
      ? React.createElement('span', {
          style: { fontSize: size === 'small' ? '12px' : '16px', fontWeight: 400, color: spec.fg, letterSpacing: '-0.15px' },
        }, initials)
      : React.createElement(PencilIcon, { color: spec.fg, size: iconSize })
  );
};

export default {
  title: 'Components/FAB',
  component: FAB,
  parameters: {
    layout: 'centered',
    docs: { description: { component:
`Floating Action Button — acción principal flotante. Small (32px) / Medium (48px).

**Microinteracción:** hover-lift sutil (\`translateY(-1px)\`, solo en punteros finos) + \`scale(0.97)\` al presionar, con ease-out fuerte.

#### ✅ Do's
- Reservalo para LA acción principal de la pantalla (crear, agregar).
- Mantené la sombra de elevación para comunicar que flota sobre el contenido.
- Usá el menú desplegable (FAB + ListMenu) para 2+ acciones rápidas.

#### 🚫 Don'ts
- No pongas varios FAB compitiendo en una misma vista.
- No lo uses para acciones secundarias o destructivas.
- No quites la sombra: sin elevación deja de leerse como flotante.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['small', 'medium'] },
    state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed'] },
    style: { control: 'select', options: ['icon', 'tipografia'] },
    floating: { control: 'boolean' },
    initials: { control: 'text' },
  },
};

export const PrimaryMedium = { args: { variant: 'primary', size: 'medium', state: 'enabled' } };
export const SecondaryMedium = { args: { variant: 'secondary', size: 'medium', state: 'enabled' } };
export const Tipografia = { args: { variant: 'primary', size: 'medium', style: 'tipografia', initials: 'RA' } };

const StateRow = (label, variant, size, style) =>
  React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
    React.createElement('span', { style: { width: '70px', fontSize: '12px', color: '#6f6f6f', fontFamily: 'Speedee, sans-serif' } }, label),
    ...['enabled', 'hovered', 'focused', 'pressed'].map((st) =>
      React.createElement(FAB, { key: st, variant, size, state: st, style })
    )
  );

export const AllStates = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'Speedee, system-ui', display: 'flex', flexDirection: 'column', gap: '40px' } },
      React.createElement('h2', { style: { margin: 0, fontSize: '24px', fontWeight: 'bold' } }, 'FAB — enabled · hovered · focused · pressed'),
      React.createElement('div', null,
        React.createElement('h3', { style: { fontSize: '14px', color: '#6f6f6f', margin: '0 0 16px 0' } }, 'Small (32px)'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          StateRow('Primary', 'primary', 'small', 'icon'),
          StateRow('Secondary', 'secondary', 'small', 'icon'),
          StateRow('Tipografía', 'primary', 'small', 'tipografia'),
        )
      ),
      React.createElement('div', null,
        React.createElement('h3', { style: { fontSize: '14px', color: '#6f6f6f', margin: '0 0 16px 0' } }, 'Medium (48px)'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          StateRow('Primary', 'primary', 'medium', 'icon'),
          StateRow('Secondary', 'secondary', 'medium', 'icon'),
        )
      )
    ),
};

// FAB + DropDown-ListMenu (from Figma "FaB + DropDown-ListMenu")
const FabMenu = ({ position = 'down', align = 'left' }) => {
  const options = ['Menu option', 'Menu option', 'Menu option', 'Menu option', 'Menu option', 'Menu option'];
  const menu = React.createElement('div', {
    style: {
      display: 'flex', flexDirection: 'column', width: '200px',
      border: '1px solid #d6d6d6', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#FFFFFF',
    },
  },
    ...options.map((o, i) =>
      React.createElement('div', {
        key: i,
        style: {
          padding: '12px 16px', fontSize: '14px', fontFamily: 'Speedee, sans-serif', color: '#292929',
          borderBottom: i < options.length - 1 ? '1px solid #f9f9f9' : 'none', cursor: 'pointer',
        },
      }, o)
    )
  );
  const fab = React.createElement(FAB, { variant: 'primary', size: 'small', style: 'tipografia', initials: 'RA' });
  return React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '8px', alignItems: align === 'right' ? 'flex-end' : 'flex-start' },
  },
    position === 'up' ? menu : fab,
    position === 'up' ? fab : menu
  );
};

export const WithDropdownMenu = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'Speedee, system-ui' } },
      React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '20px', fontWeight: 'bold' } }, 'FAB + DropDown-ListMenu'),
      React.createElement('div', { style: { display: 'flex', gap: '48px' } },
        React.createElement(FabMenu, { position: 'down', align: 'left' }),
        React.createElement(FabMenu, { position: 'down', align: 'right' })
      )
    ),
};
