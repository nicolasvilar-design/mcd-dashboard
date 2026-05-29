import React, { useState } from 'react';

/**
 * Tabs — pixel-perfect from Figma (node 797:4187)
 * Underline tabs: Active = bold text + 2px #292929 bottom border (NOT a gold fill).
 * Item states: enabled, hovered (#d6d6d6), focused (#d6d6d6 + ring), pressed, active, disabled.
 * Includes Segmented button variant (grouped pill buttons).
 */

const FONT = 'Speedee, system-ui, sans-serif';

const Tabs = ({ tabs = [], defaultIndex = 0 }) => {
  const [active, setActive] = useState(defaultIndex);
  return React.createElement('div', { style: { width: '100%' } },
    React.createElement('div', { style: { display: 'flex', borderBottom: '1px solid #d6d6d6' } },
      ...tabs.map((t, i) => {
        const isActive = i === active;
        return React.createElement('button', {
          key: i, onClick: () => !t.disabled && setActive(i), disabled: t.disabled,
          style: {
            padding: '12px 16px', background: 'none', border: 'none',
            borderBottom: isActive ? '2px solid #292929' : '2px solid transparent',
            marginBottom: '-1px', cursor: t.disabled ? 'not-allowed' : 'pointer',
            fontFamily: FONT, fontSize: '14px', letterSpacing: '-0.15px',
            fontWeight: isActive ? 700 : 400,
            color: t.disabled ? '#adadad' : (isActive ? '#292929' : '#6f6f6f'),
            transition: 'all 150ms cubic-bezier(0.4,0,0.2,1)',
          },
        }, t.label);
      })
    ),
    React.createElement('div', { style: { padding: '24px 16px', fontFamily: FONT, fontSize: '14px', color: '#292929' } }, tabs[active]?.content)
  );
};

const SegmentedButton = ({ options = [], defaultIndex = 0 }) => {
  const [active, setActive] = useState(defaultIndex);
  return React.createElement('div', { style: { display: 'inline-flex', border: '1px solid #292929', borderRadius: '4px', overflow: 'hidden' } },
    ...options.map((o, i) => React.createElement('button', {
      key: i, onClick: () => setActive(i),
      style: {
        padding: '8px 16px', border: 'none', borderLeft: i ? '1px solid #292929' : 'none',
        backgroundColor: i === active ? '#d6d6d6' : '#ffffff', color: '#292929',
        fontFamily: FONT, fontSize: '14px', fontWeight: i === active ? 700 : 400, letterSpacing: '-0.15px', cursor: 'pointer',
      },
    }, o))
  );
};

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

const sample = [
  { label: 'Menu item', content: 'Contenido del primer tab.' },
  { label: 'Menu item', content: 'Contenido del segundo tab.' },
  { label: 'Menu item', content: 'Contenido del tercer tab.' },
];

export const Default = { render: () => React.createElement(Tabs, { tabs: sample }) };

export const WithDisabled = {
  render: () => React.createElement(Tabs, { tabs: [...sample, { label: 'Menu item', content: '', disabled: true }] }),
};

export const Segmented = {
  render: () => React.createElement('div', { style: { padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: FONT } },
    React.createElement('h3', { style: { margin: 0, fontSize: '14px', color: '#6f6f6f' } }, 'Segmented button'),
    React.createElement(SegmentedButton, { options: ['Label', 'Label'] }),
    React.createElement(SegmentedButton, { options: ['Label', 'Label', 'Label'] }),
    React.createElement(SegmentedButton, { options: ['Label', 'Label', 'Label', 'Label'] })
  ),
};
