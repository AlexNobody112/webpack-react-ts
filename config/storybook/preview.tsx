import React from 'react';
import { type Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/styleDecorator/styleDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [(Story) => (
    <StyleDecorator>
      <Story />
    </StyleDecorator>
  )],
};

export default preview;