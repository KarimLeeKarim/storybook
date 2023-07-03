/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: ['Pages', 'Components', 'SharedComponents'],
      },
    },
  },
};

export default preview;
