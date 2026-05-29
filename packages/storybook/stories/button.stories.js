import Button from '@mcd-dashboard/components/src/button';

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
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Button visual variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether button takes full width',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Click me',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Secondary Button',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    children: 'Tertiary Button',
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small',
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};

export const FullWidth = {
  args: {
    variant: 'primary',
    size: 'medium',
    fullWidth: true,
    children: 'Full Width Button',
  },
};

export const Loading = {
  args: {
    variant: 'primary',
    size: 'medium',
    isLoading: true,
    children: 'Loading...',
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

export const AllVariants = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">Primary</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button style="background-color: #DA291C; color: white; padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer;">Small</button>
          <button style="background-color: #DA291C; color: white; padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer; height: 40px;">Medium</button>
          <button style="background-color: #DA291C; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; height: 48px;">Large</button>
          <button style="background-color: #BDBDBD; color: white; padding: 8px 16px; border: none; border-radius: 8px; cursor: not-allowed; opacity: 0.6;">Disabled</button>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">Secondary</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button style="background-color: #E8E8E8; color: #292929; padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer;">Small</button>
          <button style="background-color: #E8E8E8; color: #292929; padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer; height: 40px;">Medium</button>
          <button style="background-color: #E8E8E8; color: #292929; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; height: 48px;">Large</button>
          <button style="background-color: #F5F5F5; color: #BDBDBD; padding: 8px 16px; border: none; border-radius: 8px; cursor: not-allowed;">Disabled</button>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">Tertiary</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button style="background-color: transparent; color: #292929; padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer;">Small</button>
          <button style="background-color: transparent; color: #292929; padding: 8px 16px; border: none; border-radius: 8px; cursor: pointer; height: 40px;">Medium</button>
          <button style="background-color: transparent; color: #292929; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; height: 48px;">Large</button>
          <button style="background-color: transparent; color: #BDBDBD; padding: 8px 16px; border: none; border-radius: 8px; cursor: not-allowed;">Disabled</button>
        </div>
      </div>
    </div>
  `,
};
