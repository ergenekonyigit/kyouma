import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ThemeProvider } from '@shopify/restyle';
import theme from '../../src/theme';
import { Box } from './Box';

const BoxMeta: ComponentMeta<typeof Box> = {
  title: 'Box',
  component: Box,
  argTypes: {},
  args: {
    backgroundColor: 'purpleDark',
    width: 200,
    height: 200,
  },
};

export default BoxMeta;

type BoxStory = ComponentStory<typeof Box>;

export const Basic: BoxStory = args => (
  <ThemeProvider theme={theme}>
    <Box padding="m">
      <Box {...args} />
    </Box>
  </ThemeProvider>
);
