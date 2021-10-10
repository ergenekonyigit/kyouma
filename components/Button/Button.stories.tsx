import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ThemeProvider } from '@shopify/restyle';
import theme from '../../src/theme';
import { Box } from '../Box/Box';
import { Button } from './Button';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = args => (
  <ThemeProvider theme={theme}>
    <Box padding="m">
      <Button {...args} />
    </Box>
  </ThemeProvider>
);
