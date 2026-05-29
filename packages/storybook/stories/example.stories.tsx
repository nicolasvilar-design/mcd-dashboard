import type { Meta, StoryObj } from '@storybook/react';

/**
 * EJEMPLO: Button Component
 *
 * Este es un archivo de ejemplo para mostrar cómo documentar componentes.
 * Reemplaza con tus componentes reales.
 */

const Example = ({ label }: { label: string }) => (
  <button style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#ff9800', color: 'white', cursor: 'pointer' }}>
    {label}
  </button>
);

const meta = {
  title: 'Components/Button',
  component: Example,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'El texto del botón',
    },
  },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Story por defecto
 */
export const Default: Story = {
  args: {
    label: 'Click me',
  },
};

/**
 * Variante primaria
 */
export const Primary: Story = {
  args: {
    label: 'Primary Button',
  },
};

/**
 * Variante secundaria
 */
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
  },
};
