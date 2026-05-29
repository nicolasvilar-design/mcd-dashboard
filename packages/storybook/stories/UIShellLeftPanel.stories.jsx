import React, { useState } from 'react';

/**
 * UI Shell — Left Panel / Sidebar · pixel-perfect from Figma (node 3812:3216)
 * Category items: [icon] Category Title [chevron], expandable to SubCategory rows.
 * Selected = gold (#FFBC0D) left accent bar + layer-02 highlight.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const Dot = () => React.createElement('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' },
  React.createElement('rect', { x: 4, y: 4, width: 16, height: 16, rx: 3, stroke: '#292929', strokeWidth: 1.6 }));

const Chevron = ({ open }) =>
  React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', style: { transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' } },
    React.createElement('path', { d: 'M6 9l6 6 6-6', stroke: '#292929', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }));

const CategoryItem = ({ title, subitems = [], selected, defaultOpen = false, onSelect }) => {
  const [open, setOpen] = useState(defaultOpen);
  const hasSub = subitems.length > 0;
  const [hover, setHover] = useState(false);
  return React.createElement('div', null,
    React.createElement('div', {
      onClick: () => { hasSub ? setOpen((o) => !o) : onSelect && onSelect(); },
      onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
      style: {
        display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', cursor: 'pointer',
        backgroundColor: selected ? '#f9f9f9' : (hover ? '#f9f9f9' : 'transparent'),
        borderLeft: `3px solid ${selected ? '#FFBC0D' : 'transparent'}`,
        fontFamily: FONT,
      },
    },
      React.createElement(Dot),
      React.createElement('span', { style: { flex: 1, fontSize: '14px', color: '#292929', fontWeight: selected ? 700 : 400, letterSpacing: '-0.15px' } }, title),
      hasSub && React.createElement(Chevron, { open })
    ),
    open && hasSub && React.createElement('div', null,
      ...subitems.map((s, i) => React.createElement('div', {
        key: i,
        style: { padding: '10px 16px 10px 52px', fontSize: '14px', color: '#292929', cursor: 'pointer', fontFamily: FONT, backgroundColor: '#FFFFFF' },
        onMouseEnter: (e) => (e.currentTarget.style.backgroundColor = '#f9f9f9'),
        onMouseLeave: (e) => (e.currentTarget.style.backgroundColor = '#FFFFFF'),
      }, s))
    )
  );
};

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return React.createElement('div', {
    style: { width: '280px', border: '1px solid #d6d6d6', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#FFFFFF', fontFamily: FONT },
  },
    React.createElement(CategoryItem, { title: 'Category Title', selected: selected === 0, onSelect: () => setSelected(0) }),
    React.createElement(CategoryItem, { title: 'Category Title', defaultOpen: true, subitems: ['SubCategory', 'SubCategory', 'SubCategory', 'SubCategory'] }),
    React.createElement(CategoryItem, { title: 'Category Title', subitems: ['SubCategory', 'SubCategory'] }),
    React.createElement(CategoryItem, { title: 'Category Title', selected: selected === 3, onSelect: () => setSelected(3) }),
  );
};

export default {
  title: 'Components/UI Shell — Left Panel',
  component: Sidebar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export const Default = { render: () => React.createElement('div', { style: { padding: '24px' } }, React.createElement(Sidebar)) };
