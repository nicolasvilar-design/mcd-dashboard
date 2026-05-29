import React, { useState } from 'react';

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  disabled = false,
  isDarkMode = false,
  onChange,
  label,
}) => {
  const [value, setValue] = useState(controlledValue ?? 50);

  const modes = {
    light: {
      trackBg: '#D6D6D6',
      fillBg: '#FFBC0D',
      thumbBg: '#FFBC0D',
      thumbBorder: '#C08800',
      text: '#292929',
      disabledTrack: '#ADADAD',
      disabledThumb: '#D6D6D6',
    },
    dark: {
      trackBg: '#4B4B4B',
      fillBg: '#FFBC0D',
      thumbBg: '#FFBC0D',
      thumbBorder: '#C08800',
      text: '#FFFFFF',
      disabledTrack: '#757575',
      disabledThumb: '#4B4B4B',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return React.createElement(
    'div',
    { style: { width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' } },
    label && React.createElement(
      'div',
      { style: { display: 'flex', justifyContent: 'space-between' } },
      React.createElement('label', {
        style: {
          fontSize: '14px',
          fontFamily: 'Segoe UI, system-ui, sans-serif',
          fontWeight: '600',
          color: colors.text,
        },
      }, label),
      React.createElement('span', {
        style: {
          fontSize: '14px',
          fontWeight: '600',
          color: colors.text,
        },
      }, value)
    ),
    React.createElement(
      'div',
      { style: { position: 'relative', height: '24px', display: 'flex', alignItems: 'center' } },
      React.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            width: '100%',
            height: '6px',
            backgroundColor: disabled ? colors.disabledTrack : colors.trackBg,
            borderRadius: '3px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          },
        },
        React.createElement('div', {
          style: {
            position: 'absolute',
            height: '100%',
            backgroundColor: disabled ? colors.disabledThumb : colors.fillBg,
            borderRadius: '3px',
            width: `${percentage}%`,
          },
        })
      ),
      React.createElement('input', {
        type: 'range',
        min,
        max,
        step,
        value: controlledValue !== undefined ? controlledValue : value,
        disabled,
        onChange: handleChange,
        style: {
          position: 'relative',
          width: '100%',
          height: '6px',
          borderRadius: '3px',
          background: 'transparent',
          outline: 'none',
          WebkitAppearance: 'none',
          appearance: 'none',
          zIndex: 2,
          cursor: disabled ? 'not-allowed' : 'pointer',
        },
      })
    )
  );
};

// Custom styles for slider thumb
const sliderStyles = `
input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #FFBC0D;
  border: 2px solid #C08800;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input[type='range']::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #FFBC0D;
  border: 2px solid #C08800;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input[type='range']:disabled::-webkit-slider-thumb {
  background: #D6D6D6;
  cursor: not-allowed;
}

input[type='range']:disabled::-moz-range-thumb {
  background: #D6D6D6;
  cursor: not-allowed;
}
`;

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: { source: { code: sliderStyles } },
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: { type: 'range', min: 0, max: 100 } },
    max: { control: { type: 'range', min: 0, max: 200 } },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    isDarkMode: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const Default = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
  },
};

export const WithStep = {
  args: {
    label: 'Price Range',
    min: 0,
    max: 1000,
    step: 50,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Slider',
    value: 50,
    disabled: true,
  },
};

export const DarkMode = {
  args: {
    label: 'Dark Mode Slider',
    isDarkMode: true,
  },
  parameters: { backgrounds: { default: 'dark' } },
};

export const AllStates = {
  render: () =>
    React.createElement(
      'div',
      { style: { padding: '40px', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column', gap: '48px' } },
      React.createElement(
        'div',
        null,
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' } }, 'Light Mode'),
        React.createElement(
          'div',
          { style: { maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' } },
          React.createElement(Slider, { label: 'Default', min: 0, max: 100 }),
          React.createElement(Slider, { label: 'Range (0-1000)', min: 0, max: 1000, step: 50 }),
          React.createElement(Slider, { label: 'Disabled', value: 60, disabled: true }),
        ),
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '40px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement(
          'div',
          { style: { maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' } },
          React.createElement(Slider, { label: 'Default', isDarkMode: true }),
          React.createElement(Slider, { label: 'Range', min: 0, max: 1000, step: 50, isDarkMode: true }),
          React.createElement(Slider, { label: 'Disabled', value: 60, disabled: true, isDarkMode: true }),
        ),
      )
    ),
};
