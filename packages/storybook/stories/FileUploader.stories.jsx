import React from 'react';

/**
 * File Uploader — pixel-perfect from Figma (node 3271:24198)
 * States: Enabled · Hover · Focus · Error · Disabled
 * Drag-and-drop zone: dashed border, layer-02 (#f9f9f9) background, upload icon,
 * "Arrastra una imagen hasta aquí o sube un archivo" (link).
 */

const FONT = 'Speedee, system-ui, sans-serif';

const STATE_SPEC = {
  enabled:  { border: '#adadad', icon: '#292929', text: '#6f6f6f', link: '#0F62FE' },
  hover:    { border: '#292929', icon: '#292929', text: '#6f6f6f', link: '#0F62FE' },
  focus:    { border: '#006BAE', icon: '#292929', text: '#6f6f6f', link: '#0F62FE' },
  error:    { border: '#db0007', icon: '#292929', text: '#6f6f6f', link: '#0F62FE' },
  disabled: { border: '#d6d6d6', icon: '#adadad', text: '#adadad', link: '#adadad' },
};

const UploadIcon = ({ color = '#292929' }) =>
  React.createElement(
    'svg',
    { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none' },
    React.createElement('path', { d: 'M12 16V4M12 4l-4 4M12 4l4 4', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }),
    React.createElement('path', { d: 'M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' })
  );

const FileUploader = ({ state = 'enabled', supportingText, width = 328 }) => {
  const spec = STATE_SPEC[state] || STATE_SPEC.enabled;
  const isError = state === 'error';

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: '8px', width: typeof width === 'number' ? `${width}px` : width } },
    React.createElement(
      'div',
      {
        style: {
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px',
          padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '4px',
          border: `1px dashed ${spec.border}`, cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
          transition: 'border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)', boxSizing: 'border-box',
        },
      },
      React.createElement(UploadIcon, { color: spec.icon }),
      React.createElement('p', {
        style: { margin: 0, fontFamily: FONT, fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.15px', color: spec.text, textAlign: 'center' },
      },
        'Arrastra una imagen hasta aquí o ',
        React.createElement('span', { style: { color: spec.link, fontWeight: 400, textDecoration: state === 'disabled' ? 'none' : 'underline' } }, 'sube un archivo')
      )
    ),
    isError && React.createElement('span', {
      style: { fontFamily: FONT, fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.15px', color: '#db0007', paddingLeft: '8px' },
    }, supportingText || 'Formato o tamaño no válido')
  );
};

export default {
  title: 'Components/File Uploader',
  component: FileUploader,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['enabled', 'hover', 'focus', 'error', 'disabled'] },
    supportingText: { control: 'text' },
  },
};

export const Enabled = { args: { state: 'enabled' } };
export const Focus = { args: { state: 'focus' } };
export const ErrorState = { args: { state: 'error', supportingText: 'Formato o tamaño no válido' } };
export const Disabled = { args: { state: 'disabled' } };

export const AllStates = {
  render: () => {
    const states = [['Enabled', 'enabled'], ['Hover', 'hover'], ['Focus', 'focus'], ['Error', 'error'], ['Disabled', 'disabled']];
    return React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' } },
      React.createElement('h2', { style: { margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' } }, 'File Uploader — All States'),
      ...states.map(([labelTxt, st]) =>
        React.createElement('div', { key: st, style: { display: 'flex', flexDirection: 'column', gap: '4px' } },
          React.createElement('span', { style: { fontSize: '12px', color: '#6f6f6f', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' } }, labelTxt),
          React.createElement(FileUploader, { state: st, supportingText: st === 'error' ? 'Formato o tamaño no válido' : undefined })
        )
      )
    );
  },
};
