import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

type ButtonProps = {
  onPress: () => void;
  text: string;
};

export const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <Box
      backgroundColor="greenLight"
      paddingVertical="xs"
      paddingHorizontal="m"
      borderRadius="l"
    >
      <TouchableOpacity onPress={onPress}>
        <Text
          variant="body"
          color="purpleDark"
          fontWeight="bold"
          textAlign="center"
        >
          {text}
        </Text>
      </TouchableOpacity>
    </Box>
  );
};
