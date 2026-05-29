import React, { useState } from 'react';

const Tabs = ({ tabs = [], isDarkMode = false }) => {
  const [activeTab, setActiveTab] = useState(0);

  const modes = {
    light: {
      inactiveBg: 'transparent',
      inactiveText: '#757575',
      activeBg: '#FFBC0D',
      activeText: '#292929',
      borderColor: '#D6D6D6',
      contentBg: '#FFFFFF',
      contentText: '#292929',
    },
    dark: {
      inactiveBg: 'transparent',
      inactiveText: '#ADADAD',
      activeBg: '#FFBC0D',
      activeText: '#292929',
      borderColor: '#4B4B4B',
      contentBg: '#2A2A2A',
      contentText: '#FFFFFF',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  return React.createElement(
    'div',
    { style: { width: '100%' } },
    React.createElement(
      'div',
      { style: { display: 'flex', borderBottom: `2px solid ${colors.borderColor}` } },
      tabs.map((tab, index) =>
        React.createElement(
          'button',
          {
            key: index,
            onClick: () => setActiveTab(index),
            style: {
              padding: '12px 24px',
              backgroundColor: activeTab === index ? colors.activeBg : colors.inactiveBg,
              color: activeTab === index ? colors.activeText : colors.inactiveText,
              border: 'none',
              cursor: 'pointer',
              fontWeight: activeTab === index ? '600' : '500',
              fontSize: '14px',
              fontFamily: 'Segoe UI, system-ui, sans-serif',
              transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: activeTab === index ? '4px 4px 0 0' : '0',
            },
          },
          tab.label
        )
      )
    ),
    React.createElement(
      'div',
      { style: { padding: '24px', backgroundColor: colors.contentBg, color: colors.contentText, minHeight: '200px' } },
      tabs[activeTab]?.content
    )
  );
};

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    isDarkMode: { control: 'boolean' },
  },
};

const sampleTabs = [
  { label: 'Tab 1', content: 'Content for the first tab. This is where you can place your content.' },
  { label: 'Tab 2', content: 'Content for the second tab. Different information here.' },
  { label: 'Tab 3', content: 'Content for the third tab. Another section of content.' },
];

export const Default = {
  args: { tabs: sampleTabs },
};

export const DarkMode = {
  args: { tabs: sampleTabs, isDarkMode: true },
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
        React.createElement(Tabs, { tabs: sampleTabs })
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement(Tabs, { tabs: sampleTabs, isDarkMode: true })
      )
    ),
};
