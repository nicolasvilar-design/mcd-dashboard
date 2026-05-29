import React from 'react';
import { color } from './_tokens';

/**
 * Colors — rendered from the central token source (_tokens.js).
 * Editing a value in _tokens.js updates this doc AND every component at once.
 */

export default {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Paleta del DS, fuente única en `_tokens.js`. Los componentes consumen estos mismos tokens.' } },
  },
};

const GROUPS = [
  { title: 'PRIMARY / BRAND', items: [
    ['gold', 'Acciones primarias, selección, highlight de marca'],
    ['red', 'Acciones destructivas (delete)'],
    ['black', 'Texto primario, UI, títulos'],
    ['green', 'Éxito, feedback positivo'],
    ['white', 'Fondo por defecto, cards'],
  ]},
  { title: 'SECONDARY', items: [
    ['blue', 'Acciones secundarias, información'],
    ['orange', 'Advertencias, alertas'],
    ['darkBlue', 'Información profunda'],
    ['lightBlue', 'Fondos de información clara'],
    ['fuschia', 'Énfasis, highlights'],
    ['beige', 'Acento neutro'],
  ]},
  { title: 'NEUTRAL', items: [
    ['ivory', 'Fondos de página, superficies claras'],
    ['lightGrey', 'Bordes, fondos secundarios (layer-03)'],
    ['grey', 'Texto deshabilitado, contenido secundario'],
    ['darkGrey', 'Texto de cuerpo, descripciones (text-secondary)'],
  ]},
  { title: 'TEXT', items: [
    ['text', 'Texto primario'],
    ['textSecondary', 'Placeholder / helper'],
    ['textDisabled', 'Texto deshabilitado'],
  ]},
  { title: 'SUPPORT (SEMANTIC)', items: [
    ['supportError', 'Errores'],
    ['supportSuccess', 'Éxito'],
    ['supportWarning', 'Advertencias'],
  ]},
  { title: 'LINKS', items: [
    ['link', 'Link por defecto'],
    ['linkHover', 'Link hover'],
    ['linkVisited', 'Link visitado'],
  ]},
];

const Swatch = (key, usage) => {
  const hex = color[key];
  return React.createElement('div', { key, style: { border: '1px solid #E8E8E8', borderRadius: '8px', overflow: 'hidden' } },
    React.createElement('div', { style: { backgroundColor: hex, height: '96px', borderBottom: '1px solid #E8E8E8' } }),
    React.createElement('div', { style: { padding: '12px' } },
      React.createElement('h3', { style: { margin: '0 0 4px 0', fontSize: '14px', fontWeight: 600, fontFamily: 'Speedee, sans-serif' } }, key),
      React.createElement('code', { style: { display: 'block', fontSize: '12px', color: '#6f6f6f', marginBottom: '6px', fontFamily: 'Roboto Mono, monospace' } }, hex),
      React.createElement('p', { style: { margin: 0, fontSize: '12px', color: '#6f6f6f' } }, usage)
    )
  );
};

export const ColorPalette = () =>
  React.createElement('div', { style: { padding: '48px', fontFamily: 'Speedee, system-ui, sans-serif' } },
    React.createElement('h1', { style: { margin: '0 0 8px 0' } }, "McDonald's Dashboard — Colors"),
    React.createElement('p', { style: { margin: '0 0 32px 0', color: '#6f6f6f' } }, 'Renderizado desde _tokens.js (fuente única). El color de selección/acción del sistema es Gold.'),
    ...GROUPS.map((g) => React.createElement('div', { key: g.title, style: { marginBottom: '40px' } },
      React.createElement('h2', { style: { fontSize: '14px', letterSpacing: '0.5px', color: '#6f6f6f', margin: '0 0 16px 0' } }, g.title),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' } },
        ...g.items.map(([k, u]) => Swatch(k, u)))
    ))
  );
