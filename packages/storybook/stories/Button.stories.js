import React, { useState } from 'react';

const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children = 'Button',
  onClick,
  isDarkMode = false,
}) => {
  const [state, setState] = useState('enabled');

  // Color definitions from Figma
  const colors = {
    primary: {
      light: {
        enabled: '#FFBC0D',
        hover: '#FFD46A',
        focused: '#FFBC0D',
        pressed: '#C08800',
        disabled: '#FFE49E',
        text: '#292929',
        stroke: 'transparent',
      },
      dark: {
        enabled: '#FFBC0D',
        hover: '#FFD46A',
        focused: '#FFBC0D',
        pressed: '#C08800',
        disabled: '#FFE49E',
        text: '#292929',
        stroke: 'transparent',
      },
    },
    secondary: {
      light: {
        enabled: '#FFFFFF',
        hover: '#D6D6D6',
        focused: '#D6D6D6',
        pressed: '#FFFFFF',
        disabled: '#D6D6D6',
        text: '#292929',
        stroke: '#292929',
      },
      dark: {
        enabled: '#4B4B4B',
        hover: '#666666',
        focused: '#4B4B4B',
        pressed: '#4B4B4B',
        disabled: '#D6D6D6',
        text: '#FFFFFF',
        stroke: '#FFFFFF',
      },
    },
    delete: {
      light: {
        enabled: '#DB0007',
        hover: '#FF161D',
        focused: '#FF161D',
        pressed: '#B20006',
        disabled: '#FFE7E8',
        text: '#FFFFFF',
        stroke: '#292929',
      },
      dark: {
        enabled: '#DB0007',
        hover: '#FF161D',
        focused: '#FF161D',
        pressed: '#B20006',
        disabled: '#FFE7E8',
        text: '#FFFFFF',
        stroke: '#FFFFFF',
      },
    },
  };

  // Inline styles for sizes
  const sizeStyles = {
    small: { padding: '6px 12px', fontSize: '12px', height: '32px' },
    medium: { padding: '8px 16px', fontSize: '14px', height: '40px' },
    large: { padding: '12px 24px', fontSize: '16px', height: '48px' },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colorSet = colors[variant][mode];
  const currentColor = disabled ? colorSet.disabled : colorSet[state];
  const textColor = disabled ? '#ADADAD' : colorSet.text;

  // Base styles
  const baseStyles = {
    fontFamily: 'Speedee, system-ui, sans-serif',
    fontWeight: '400',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: currentColor,
    color: textColor,
    border: colorSet.stroke === 'transparent' ? 'none' : `1px solid ${colorSet.stroke}`,
    opacity: 1,
    ...sizeStyles[size],
  };

  const handleMouseEnter = () => !disabled && setState('hovered');
  const handleMouseLeave = () => setState('enabled');
  const handleFocus = () => !disabled && setState('focused');
  const handleBlur = () => setState('enabled');
  const handleMouseDown = () => !disabled && setState('pressed');
  const handleMouseUp = () => !disabled && setState('hovered');

  return React.createElement('button', {
    style: baseStyles,
    disabled,
    onClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  }, children);
};

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'delete'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    isDarkMode: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Secondary Button',
  },
};

export const Delete = {
  args: {
    variant: 'delete',
    size: 'medium',
    children: 'Delete',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const AllStates = {
  render: () => {
    return React.createElement('div', {
      style: {
        padding: '40px',
        fontFamily: 'system-ui',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        maxWidth: '900px',
      },
    },
      // Primary variant
      React.createElement('div', null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Primary (Yellow)'),
        React.createElement('p', { style: { margin: '0 0 16px 0', fontSize: '14px', color: '#757575' } }, 'enabled | hovered | focused | pressed | disabled'),
        React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
          React.createElement(Button, { variant: 'primary', size: 'medium' }, 'Enabled'),
          React.createElement('div', { style: { padding: '8px 16px', height: '40px', backgroundColor: '#FFD46A', borderRadius: '8px', display: 'flex', alignItems: 'center', fontSize: '14px' } }, 'Hovered'),
          React.createElement('div', { style: { padding: '8px 16px', height: '40px', backgroundColor: '#FFBC0D', borderRadius: '8px', border: '1px solid #292929', display: 'flex', alignItems: 'center', fontSize: '14px' } }, 'Focused'),
          React.createElement('div', { style: { padding: '8px 16px', height: '40px', backgroundColor: '#C08800', borderRadius: '8px', color: '#292929', display: 'flex', alignItems: 'center', fontSize: '14px' } }, 'Pressed'),
          React.createElement(Button, { variant: 'primary', size: 'medium', disabled: true }, 'Disabled'),
        ),
      ),
      // Secondary variant
      React.createElement('div', null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Secondary (Gray)'),
        React.createElement('p', { style: { margin: '0 0 16px 0', fontSize: '14px', color: '#757575' } }, 'enabled | hovered | focused | pressed | disabled'),
        React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
          React.createElement(Button, { variant: 'secondary', size: 'medium' }, 'Enabled'),
          React.createElement('div', { style: { padding: '8px 16px', height: '40px', backgroundColor: '#D6D6D6', borderRadius: '8px', color: '#292929', display: 'flex', alignItems: 'center', fontSize: '14px' } }, 'Hovered'),
          React.createElement('div', { style: { padding: '8px 16px', height: '40px', backgroundColor: '#D6D6D6', borderRadius: '8px', border: '1px solid #292929', color: '#292929', display: 'flex', alignItems: 'center', fontSize: '14px' } }, 'Focused'),
          React.createElement('div', { style: { padding: '8px 16px', height: '40px', backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid #292929', color: '#292929', display: 'flex', alignItems: 'center', fontSize: '14px' } }, 'Pressed'),
          React.createElement(Button, { variant: 'secondary', size: 'medium', disabled: true }, 'Disabled'),
        ),
      ),
      // Delete variant
      React.createElement('div', null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Delete (Red)'),
        React.createElement('p', { style: { margin: '0 0 16px 0', fontSize: '14px', color: '#757575' } }, 'enabled | hovered | focused | pressed | disabled'),
        React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
          React.createElement(Button, { variant: 'delete', size: 'medium' }, 'Enabled'),
          React.createElement('div', { style: { padding: '8px 16px', height: '40px', backgroundColor: '#FF161D', borderRadius: '8px', color: '#FFFFFF', display: 'flex', alignItems: 'center', fontSize: '14px' } }, 'Hovered'),
          React.createElement('div', { style: { padding: '8px 16px', height: '40px', backgroundColor: '#FF161D', borderRadius: '8px', border: '1px solid #292929', color: '#FFFFFF', display: 'flex', alignItems: 'center', fontSize: '14px' } }, 'Focused'),
          React.createElement('div', { style: { padding: '8px 16px', height: '40px', backgroundColor: '#B20006', borderRadius: '8px', color: '#FFFFFF', display: 'flex', alignItems: 'center', fontSize: '14px' } }, 'Pressed'),
          React.createElement(Button, { variant: 'delete', size: 'medium', disabled: true }, 'Disabled'),
        ),
      ),
    );
  },
};

export const DarkMode = {
  render: () => {
    return React.createElement('div', {
      style: {
        padding: '40px',
        fontFamily: 'system-ui',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        maxWidth: '900px',
        backgroundColor: '#1A1A1A',
        borderRadius: '8px',
      },
    },
      React.createElement('div', null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Primary (Dark)'),
        React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
          React.createElement(Button, { variant: 'primary', size: 'medium', isDarkMode: true }, 'Enabled'),
          React.createElement(Button, { variant: 'primary', size: 'medium', isDarkMode: true, disabled: true }, 'Disabled'),
        ),
      ),
      React.createElement('div', null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Secondary (Dark)'),
        React.createElement('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
          React.createElement(Button, { variant: 'secondary', size: 'medium', isDarkMode: true }, 'Enabled'),
          React.createElement(Button, { variant: 'secondary', size: 'medium', isDarkMode: true, disabled: true }, 'Disabled'),
        ),
      ),
    );
  },
};

export const Behavior = {
  render: () => {
    return React.createElement('div', {
      style: {
        padding: '40px',
        fontFamily: 'system-ui',
        maxWidth: '800px',
      },
    },
      React.createElement('h2', null, '📋 Comportamiento de los Botones'),
      React.createElement('h3', { style: { marginTop: '32px' } }, '1. Estado Habilitado (Defecto)'),
      React.createElement('ul', null,
        React.createElement('li', null, 'Los CTA siempre están en estado habilitado por defecto'),
        React.createElement('li', null, 'Excepto en casos puntuales: restricciones por rol o acciones ya realizadas'),
      ),
      React.createElement('h3', { style: { marginTop: '32px' } }, '2. Comportamiento en Formularios'),
      React.createElement('ul', null,
        React.createElement('li', null, 'Si faltan campos obligatorios o hay errores, estos se marcarán'),
        React.createElement('li', null, 'El CTA NO se deshabilitará para permitir reintentos'),
        React.createElement('li', null, 'Esto guía al usuario sin bloquear la acción'),
      ),
      React.createElement('h3', { style: { marginTop: '32px' } }, '3. Uso del Estado Deshabilitado'),
      React.createElement('ul', null,
        React.createElement('li', null, 'Restricciones por rol: usuario no tiene permisos'),
        React.createElement('li', null, 'Acción no repetible: ya fue realizada'),
        React.createElement('li', null, 'Debe ser visualmente distinto y no responder a interacciones'),
      ),
    );
  },
};
