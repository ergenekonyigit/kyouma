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
    label: 'kyouma',
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = args => (
  <ThemeProvider theme={theme}>
    <Box padding="m">
      <Button {...args} variant="buttonPrimary" />
      <Box paddingVertical="xs" />
      <Button {...args} variant="buttonSecondary" />
    </Box>
  </ThemeProvider>
);
