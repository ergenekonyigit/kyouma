import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ThemeProvider } from '@shopify/restyle';
import theme from '../../src/theme';
import { Box } from '../Box/Box';
import { Text } from './Text';

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {},
  args: {
    children: 'Text Component',
  },
};

export default TextMeta;

type TextStory = ComponentStory<typeof Text>;

export const Basic: TextStory = args => (
  <ThemeProvider theme={theme}>
    <Box padding="m">
      <Text {...args} />
    </Box>
  </ThemeProvider>
);
