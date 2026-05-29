import React, { useState } from 'react';

/**
 * Accordion — pixel-perfect from Figma (node 4298:13511)
 * Item: "Title of accordion" + chevron (down=collapsed / up=expanded).
 * Expanded reveals body content. Items separated by border-bottom.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const Chevron = ({ open }) =>
  React.createElement(
    'svg',
    { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
      style: { transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 150ms cubic-bezier(0.4,0,0.2,1)' } },
    React.createElement('path', { d: 'M6 9l6 6 6-6', stroke: '#292929', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' })
  );

const AccordionItem = ({ title, content, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return React.createElement(
    'div',
    { style: { borderBottom: '1px solid #d6d6d6' } },
    React.createElement(
      'button',
      {
        onClick: () => setOpen((o) => !o),
        style: {
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 8px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        },
      },
      React.createElement('span', {
        style: { fontFamily: FONT, fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#292929' },
      }, title),
      React.createElement(Chevron, { open })
    ),
    open && React.createElement('div', {
      style: { padding: '0 8px 16px 8px' },
    },
      React.createElement('p', {
        style: { margin: 0, fontFamily: FONT, fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#292929', maxWidth: '360px' },
      }, content)
    )
  );
};

const Accordion = ({ items = [] }) =>
  React.createElement('div', { style: { width: '100%', maxWidth: '440px', borderTop: '1px solid #d6d6d6' } },
    ...items.map((it, i) => React.createElement(AccordionItem, { key: i, ...it }))
  );

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

const BODY = 'The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.';

const sample = [
  { title: 'Title of accordion', content: BODY, defaultOpen: true },
  { title: 'Title of accordion', content: BODY, defaultOpen: true },
  { title: 'Title of accordion', content: BODY },
  { title: 'Title of accordion', content: BODY },
];

export const Default = {
  render: () => React.createElement(Accordion, { items: [{ title: 'Title of accordion', content: BODY }] }),
};

export const Expanded = {
  render: () => React.createElement(Accordion, { items: [{ title: 'Title of accordion', content: BODY, defaultOpen: true }] }),
};

export const Group = {
  render: () => React.createElement(Accordion, { items: sample }),
};
