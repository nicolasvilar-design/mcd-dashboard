import React from 'react';

/**
 * UI Shell — Header · pixel-perfect from Figma (node 638:4240)
 * Top bar: [collapse] [M logo] [context selector] ........ [action icons] [avatar]
 * White background, bottom border, 64px height.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const Ico = ({ d, size = 22 }) =>
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' },
    React.createElement('path', { d, stroke: '#292929', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' })
  );

const Menu = () => React.createElement(Ico, { d: 'M4 6h16M4 12h16M4 18h16' });
const Search = () => React.createElement('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' },
  React.createElement('circle', { cx: 11, cy: 11, r: 6, stroke: '#292929', strokeWidth: 1.6 }),
  React.createElement('line', { x1: 15.5, y1: 15.5, x2: 20, y2: 20, stroke: '#292929', strokeWidth: 1.6, strokeLinecap: 'round' }));
const Bell = () => React.createElement(Ico, { d: 'M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6M10 21h4' });
const Heart = () => React.createElement(Ico, { d: 'M12 20s-7-4.5-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 4.5-7 9-7 9z' });
const Help = () => React.createElement('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' },
  React.createElement('circle', { cx: 12, cy: 12, r: 9, stroke: '#292929', strokeWidth: 1.6 }),
  React.createElement('path', { d: 'M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.7M12 17h.01', stroke: '#292929', strokeWidth: 1.6, strokeLinecap: 'round' }));

const MLogo = () => React.createElement('svg', { width: 28, height: 24, viewBox: '0 0 28 24', fill: 'none' },
  React.createElement('path', { d: 'M7 20V8c0-3 4-3 4 0v6m0-6c0-3 6-3 6 0v6m0-6c0-3 4-3 4 0v12',
    stroke: '#FFBC0D', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' }));

const Avatar = ({ initials = 'RA' }) =>
  React.createElement('div', {
    style: { width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#FFBC0D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT, fontSize: '12px', fontWeight: 700, color: '#292929' },
  }, initials);

const IconBtn = (node) =>
  React.createElement('button', { style: { background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center' } }, node);

const Header = ({ selectorLabel = 'Selecciona', collapsed = false }) =>
  React.createElement('div', {
    style: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '64px', padding: '0 16px', backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #d6d6d6', fontFamily: FONT, boxSizing: 'border-box', minWidth: '600px',
    },
  },
    // left cluster
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
      IconBtn(React.createElement(Menu)),
      React.createElement(MLogo),
      React.createElement('div', {
        style: { display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #d6d6d6', borderRadius: '4px', padding: '8px 12px', minWidth: '200px', justifyContent: 'space-between', cursor: 'pointer' },
      },
        React.createElement('span', { style: { fontSize: '14px', color: '#292929' } }, selectorLabel),
        React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none' }, React.createElement('path', { d: 'M6 9l6 6 6-6', stroke: '#292929', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }))
      )
    ),
    // right cluster
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '4px' } },
      IconBtn(React.createElement(Search)),
      IconBtn(React.createElement(Bell)),
      IconBtn(React.createElement(Heart)),
      IconBtn(React.createElement(Help)),
      React.createElement('div', { style: { marginLeft: '8px' } }, React.createElement(Avatar))
    )
  );

export default {
  title: 'Components/UI Shell — Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: { selectorLabel: { control: 'text' } },
};

export const Default = { args: { selectorLabel: 'Selecciona' } };
export const WithSelection = { args: { selectorLabel: 'McDonald\'s Argentina' } };
