import '../stories/globals.css';
import theme from './theme';

export const parameters = {
  layout: 'centered',
  docs: { theme },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#FFFFFF' },
      { name: 'ivory', value: '#F9F9F9' },
      { name: 'dark', value: '#1A1A1A' },
    ],
  },
  options: {
    storySort: {
      order: [
        'Welcome',
        'Foundations', ['Colors', 'Typography', 'Spacing', 'Effects', 'Grids', 'Motion'],
        'Components',
      ],
    },
  },
};
