import React from 'react';

const Divider = ({
  orientation = 'horizontal',
  variant = 'solid',
  isDarkMode = false,
  label,
}) => {
  const colors = {
    light: isDarkMode ? '#4B4B4B' : '#D6D6D6',
  };

  const styles = {
    solid: { borderStyle: 'solid', borderWidth: '1px' },
    dashed: { borderStyle: 'dashed', borderWidth: '1px' },
    dotted: { borderStyle: 'dotted', borderWidth: '1px' },
  };

  const baseStyle = {
    borderColor: colors.light,
    ...styles[variant],
  };

  if (orientation === 'horizontal') {
    return React.createElement(
      'div',
      {
        style: {
          width: '100%',
          height: 0,
          margin: '16px 0',
          display: 'flex',
          alignItems: 'center',
          ...baseStyle,
        },
      },
      label && React.createElement('span', {
        style: {
          padding: '0 12px',
          backgroundColor: isDarkMode ? '#1A1A1A' : '#FFFFFF',
          fontSize: '12px',
          color: isDarkMode ? '#FFFFFF' : '#292929',
          fontWeight: '500',
        },
      }, label)
    );
  }

  return React.createElement('div', {
    style: {
      width: 0,
      height: '24px',
      display: 'inline-block',
      margin: '0 16px',
      ...baseStyle,
    },
  });
};

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: { description: { component:
`Hr / línea divisora (\`#d6d6d6\`). Horizontal (fill width) o vertical (fill height) para separar contenidos dentro de un frame.

#### ✅ Do's
- Usalo para separar grupos de contenido relacionados dentro de un frame.
- Preferí solid; agregá label solo si aporta ("OR").

#### 🚫 Don'ts
- No abuses: muchas veces el espaciado separa mejor que una línea.
- No uses dashed/dotted salvo necesidad puntual.` } },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['solid', 'dashed', 'dotted'] },
    isDarkMode: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const Horizontal = {
  args: { orientation: 'horizontal' },
};

export const WithLabel = {
  args: { orientation: 'horizontal', label: 'OR' },
};

export const Dashed = {
  args: { orientation: 'horizontal', variant: 'dashed' },
};

export const Dotted = {
  args: { orientation: 'horizontal', variant: 'dotted' },
};

export const Vertical = {
  args: { orientation: 'vertical' },
};

export const AllVariants = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui' } },
      React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '20px', fontWeight: 'bold' } }, 'Horizontal Variants'),
      React.createElement('div', null,
        React.createElement(Divider, { variant: 'solid', label: 'Solid' }),
        React.createElement(Divider, { variant: 'dashed', label: 'Dashed' }),
        React.createElement(Divider, { variant: 'dotted', label: 'Dotted' })
      ),
      React.createElement('h2', { style: { margin: '32px 0 24px 0', fontSize: '20px', fontWeight: 'bold' } }, 'With Content'),
      React.createElement('div', null,
        React.createElement('p', null, 'Content before divider'),
        React.createElement(Divider, { label: 'Section Break' }),
        React.createElement('p', null, 'Content after divider')
      )
    ),
};

export const DarkMode = {
  args: { orientation: 'horizontal', isDarkMode: true },
  parameters: { backgrounds: { default: 'dark' } },
};
