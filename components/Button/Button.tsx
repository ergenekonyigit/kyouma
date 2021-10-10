import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import { Theme } from '../../src/theme';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

type ButtonProps = {
  onPress: () => void;
  variant: string;
  label: string;
};

const RestyleButton = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: 'buttonVariants' })], Box);

export const Button = ({ onPress, variant, label }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <RestyleButton variant={variant}>
        <Text variant={variant}>{label}</Text>
      </RestyleButton>
    </TouchableOpacity>
  );
};
