import React, { useState } from 'react';

const Pagination = ({
  totalPages = 10,
  isDarkMode = false,
  onChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const modes = {
    light: {
      background: '#FFFFFF',
      border: '#D6D6D6',
      text: '#292929',
      activeBg: '#FFBC0D',
      activeText: '#292929',
      disabledText: '#ADADAD',
    },
    dark: {
      background: '#2A2A2A',
      border: '#4B4B4B',
      text: '#FFFFFF',
      activeBg: '#FFBC0D',
      activeText: '#292929',
      disabledText: '#757575',
    },
  };

  const mode = isDarkMode ? 'dark' : 'light';
  const colors = modes[mode];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onChange?.(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return React.createElement(
    'div',
    { style: { display: 'flex', gap: '8px', alignItems: 'center', fontFamily: 'system-ui' } },
    React.createElement(
      'button',
      {
        onClick: () => currentPage > 1 && handlePageChange(currentPage - 1),
        disabled: currentPage === 1,
        style: {
          padding: '8px 12px',
          backgroundColor: colors.background,
          border: `1px solid ${colors.border}`,
          borderRadius: '4px',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          color: currentPage === 1 ? colors.disabledText : colors.text,
          fontWeight: '600',
        },
      },
      '← Prev'
    ),
    pageNumbers.map((page, index) =>
      page === '...'
        ? React.createElement('span', { key: `ellipsis-${index}`, style: { color: colors.text } }, '...')
        : React.createElement(
            'button',
            {
              key: page,
              onClick: () => handlePageChange(page),
              style: {
                padding: '8px 12px',
                backgroundColor: currentPage === page ? colors.activeBg : colors.background,
                color: currentPage === page ? colors.activeText : colors.text,
                border: `1px solid ${colors.border}`,
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: currentPage === page ? '600' : '500',
              },
            },
            page
          )
    ),
    React.createElement(
      'button',
      {
        onClick: () => currentPage < totalPages && handlePageChange(currentPage + 1),
        disabled: currentPage === totalPages,
        style: {
          padding: '8px 12px',
          backgroundColor: colors.background,
          border: `1px solid ${colors.border}`,
          borderRadius: '4px',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          color: currentPage === totalPages ? colors.disabledText : colors.text,
          fontWeight: '600',
        },
      },
      'Next →'
    )
  );
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    totalPages: { control: 'number', min: 1, max: 20 },
    isDarkMode: { control: 'boolean' },
  },
};

export const Default = {
  args: { totalPages: 10 },
};

export const SmallSet = {
  args: { totalPages: 5 },
};

export const LargeSet = {
  args: { totalPages: 20 },
};

export const DarkMode = {
  args: { totalPages: 10, isDarkMode: true },
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
        React.createElement(Pagination, { totalPages: 10 })
      ),
      React.createElement(
        'div',
        { style: { backgroundColor: '#1A1A1A', padding: '32px', borderRadius: '8px' } },
        React.createElement('h2', { style: { margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' } }, 'Dark Mode'),
        React.createElement(Pagination, { totalPages: 10, isDarkMode: true })
      )
    ),
};
