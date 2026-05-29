export default {
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

const buttonStyles = {
  base: 'font-semibold rounded-lg border-none cursor-pointer transition-all duration-150',
  primary: 'bg-[#DA291C] text-white hover:bg-[#c41f14]',
  secondary: 'bg-[#E8E8E8] text-[#292929] hover:bg-[#d0d0d0]',
  tertiary: 'bg-transparent text-[#292929] hover:bg-[#F5F5F5]',
  small: 'px-3 py-2 text-xs h-8',
  medium: 'px-4 py-2 text-sm h-10',
  large: 'px-6 py-3 text-base h-12',
};

const Button = ({ variant = 'primary', size = 'medium', disabled = false, children = 'Button' }) => {
  const classes = `${buttonStyles.base} ${buttonStyles[variant]} ${buttonStyles[size]} ${
    disabled ? 'opacity-60 cursor-not-allowed' : ''
  }`;
  
  const html = `<button class="${classes}" ${disabled ? 'disabled' : ''}>${children}</button>`;
  return html;
};

export const Primary = {
  render: () => Button({ variant: 'primary', children: 'Primary Button' }),
};

export const Secondary = {
  render: () => Button({ variant: 'secondary', children: 'Secondary Button' }),
};

export const Tertiary = {
  render: () => Button({ variant: 'tertiary', children: 'Tertiary Button' }),
};

export const Small = {
  render: () => Button({ variant: 'primary', size: 'small', children: 'Small' }),
};

export const Medium = {
  render: () => Button({ variant: 'primary', size: 'medium', children: 'Medium' }),
};

export const Large = {
  render: () => Button({ variant: 'primary', size: 'large', children: 'Large' }),
};

export const Disabled = {
  render: () => Button({ variant: 'primary', disabled: true, children: 'Disabled' }),
};

export const AllVariants = {
  render: () => `
    <div style="padding: 40px; font-family: system-ui;">
      <div style="margin-bottom: 32px;">
        <h3 style="margin: 0 0 16px 0;">Primary</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="${buttonStyles.base} ${buttonStyles.primary} ${buttonStyles.small}">Small</button>
          <button class="${buttonStyles.base} ${buttonStyles.primary} ${buttonStyles.medium}">Medium</button>
          <button class="${buttonStyles.base} ${buttonStyles.primary} ${buttonStyles.large}">Large</button>
          <button class="${buttonStyles.base} ${buttonStyles.primary}" disabled style="opacity: 0.6; cursor: not-allowed;">Disabled</button>
        </div>
      </div>

      <div style="margin-bottom: 32px;">
        <h3 style="margin: 0 0 16px 0;">Secondary</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="${buttonStyles.base} ${buttonStyles.secondary} ${buttonStyles.small}">Small</button>
          <button class="${buttonStyles.base} ${buttonStyles.secondary} ${buttonStyles.medium}">Medium</button>
          <button class="${buttonStyles.base} ${buttonStyles.secondary} ${buttonStyles.large}">Large</button>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 16px 0;">Tertiary</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="${buttonStyles.base} ${buttonStyles.tertiary} ${buttonStyles.small}">Small</button>
          <button class="${buttonStyles.base} ${buttonStyles.tertiary} ${buttonStyles.medium}">Medium</button>
          <button class="${buttonStyles.base} ${buttonStyles.tertiary} ${buttonStyles.large}">Large</button>
        </div>
      </div>
    </div>
  `,
};
