import React, { useState } from 'react';

const Stepper = ({
  steps = [],
  isDarkMode = false,
  onStepChange,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const modes = {
    light: {
      completedBg: '#1F6437',
      completedText: '#FFFFFF',
      activeBg: '#FFBC0D',
      activeText: '#292929',
      inactiveBg: '#D6D6D6',
      inactiveText: '#ADADAD',
      lineColor: '#D6D6D6',
      completedLineColor: '#1F6437',
      labelText: '#292929',
    },
    dark: {
      completedBg: '#1F6437',
      completedText: '#FFFFFF',
      activeBg: '#FFBC0D',
      activeText: '#292929',
      inactiveBg: '#4B4B4B',
      inactiveText: '#ADADAD',
      lineColor: '#757575',
      completedLineColor: '#1F6437',
      labelText: '#FFFFFF',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const handleStepClick = (index) => {
    setCurrentStep(index);
    onStepChange?.(index);
  };

  return React.createElement(
    'div',
    { style: { fontFamily: 'system-ui' } },
    React.createElement(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '0', marginBottom: '24px' } },
      steps.map((step, index) =>
        React.createElement(
          React.Fragment,
          { key: index },
          React.createElement(
            'button',
            {
              onClick: () => handleStepClick(index),
              style: {
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor:
                  index < currentStep
                    ? colors.completedBg
                    : index === currentStep
                      ? colors.activeBg
                      : colors.inactiveBg,
                color:
                  index < currentStep
                    ? colors.completedText
                    : index === currentStep
                      ? colors.activeText
                      : colors.inactiveText,
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              },
            },
            index < currentStep ? '✓' : index + 1
          ),
          index < steps.length - 1 &&
            React.createElement('div', {
              style: {
                flex: 1,
                height: '2px',
                backgroundColor:
                  index < currentStep ? colors.completedLineColor : colors.lineColor,
                margin: '0 8px',
              },
            })
        )
      )
    ),
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: '16px' } },
      steps.map((step, index) =>
        React.createElement('div', { key: index, style: { textAlign: 'center' } },
          React.createElement('p', {
            style: {
              margin: '0',
              fontSize: '14px',
              fontWeight: index === currentStep ? '600' : '500',
              color: colors.labelText,
            },
          }, step)
        )
      )
    )
  );
};

export default {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    isDarkMode: { control: 'boolean' },
  },
};

const sampleSteps = ['Personal', 'Address', 'Payment', 'Review', 'Confirmation'];

export const Default = {
  args: { steps: sampleSteps },
};

export const DarkMode = {
  args: { steps: sampleSteps, isDarkMode: true },
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
        React.createElement(Stepper, { steps: sampleSteps })
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement(Stepper, { steps: sampleSteps, isDarkMode: true })
      )
    ),
};
