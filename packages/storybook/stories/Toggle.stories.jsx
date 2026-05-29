import React, { useState } from 'react';

/**
 * Toggle — pixel-perfect from Figma (node 3124:6300)
 * ON track = gold #ffbc0d (layer-07) · OFF track = #adadad (layer-04) · thumb = white.
 * Anatomy: thumb 24px · clickable area 48px. States: enabled/hovered/focused/pressed/disabled/skeleton.
 * Disabled ON = #ffe49e. Skeleton = #d6d6d6 placeholder.
 */

const FONT = 'Speedee, system-ui, sans-serif';

const trackColor = (on, state) => {
  if (state === 'disabled') return on ? '#ffe49e' : '#d6d6d6';
  if (on) {
    if (state === 'pressed') return '#c08800';
    if (state === 'hovered') return '#ffd46a';
    return '#ffbc0d';
  }
  if (state === 'pressed') return '#959595';
  if (state === 'hovered') return '#bdbdbd';
  return '#adadad';
};

const Toggle = ({ on: onProp = false, state = 'enabled', label, interactive = false, onChange }) => {
  const [on, setOn] = useState(onProp);
  const isControlled = !interactive;
  const value = isControlled ? onProp : on;
  const isSkeleton = state === 'skeleton';
  const disabled = state === 'disabled';

  const TRACK_W = 48, TRACK_H = 28, THUMB = 24;

  if (isSkeleton) {
    return React.createElement('div', { style: { width: `${TRACK_W}px`, height: `${TRACK_H}px`, borderRadius: `${TRACK_H}px`, backgroundColor: '#d6d6d6' } });
  }

  const handle = () => { if (interactive && !disabled) { setOn((o) => { onChange?.(!o); return !o; }); } };

  const toggleEl = React.createElement('button', {
    onClick: handle, disabled,
    style: {
      width: `${TRACK_W}px`, height: `${TRACK_H}px`, borderRadius: `${TRACK_H}px`,
      backgroundColor: trackColor(value, state), border: state === 'focused' ? '2px solid #0f62fe' : 'none',
      position: 'relative', cursor: disabled ? 'not-allowed' : 'pointer', padding: 0,
      transition: 'background-color 150ms cubic-bezier(0.4,0,0.2,1)', boxSizing: 'border-box',
      boxShadow: state === 'focused' ? '0 0 0 2px #fff inset' : 'none', flexShrink: 0,
    },
  },
    React.createElement('span', {
      style: {
        position: 'absolute', top: '50%', left: value ? `${TRACK_W - THUMB - 2}px` : '2px',
        transform: 'translateY(-50%)', width: `${THUMB}px`, height: `${THUMB}px`, borderRadius: '50%',
        backgroundColor: disabled ? '#f9f9f9' : '#ffffff', transition: 'left 150ms cubic-bezier(0.4,0,0.2,1)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      },
    })
  );

  if (!label) return toggleEl;
  return React.createElement('label', { style: { display: 'inline-flex', alignItems: 'center', gap: '12px', cursor: disabled ? 'not-allowed' : 'pointer' } },
    toggleEl,
    React.createElement('span', { style: { fontFamily: FONT, fontSize: '14px', letterSpacing: '-0.15px', color: disabled ? '#adadad' : '#292929' } }, label)
  );
};

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    on: { control: 'boolean' },
    state: { control: 'select', options: ['enabled', 'hovered', 'focused', 'pressed', 'disabled', 'skeleton'] },
    label: { control: 'text' },
    interactive: { control: 'boolean' },
  },
};

export const Off = { args: { on: false } };
export const On = { args: { on: true } };
export const Interactive = { args: { on: false, interactive: true } };
export const Disabled = { args: { on: true, state: 'disabled' } };

export const AllStates = {
  render: () => {
    const states = ['enabled', 'hovered', 'focused', 'pressed', 'disabled', 'skeleton'];
    return React.createElement('div', { style: { padding: '40px', fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: '20px' } },
      React.createElement('h2', { style: { margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Toggle — states (On / Off)'),
      ...states.map((st) => React.createElement('div', { key: st, style: { display: 'flex', alignItems: 'center', gap: '24px' } },
        React.createElement('span', { style: { width: '70px', fontSize: '12px', color: '#6f6f6f' } }, st),
        React.createElement(Toggle, { on: true, state: st }),
        React.createElement(Toggle, { on: false, state: st })
      ))
    );
  },
};

export const WithValue = {
  render: () => React.createElement('div', { style: { padding: '40px', fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: '16px' } },
    React.createElement('h3', { style: { margin: '0 0 8px 0', fontSize: '14px', color: '#6f6f6f' } }, 'Swich + Value'),
    React.createElement(Toggle, { on: true, label: 'Funcionalidad prendida' }),
    React.createElement(Toggle, { on: false, label: 'Funcionalidad apagada' }),
    React.createElement(Toggle, { on: false, state: 'disabled', label: 'Funcionalidad deshabilitada' })
  ),
};
