import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface RoundedButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  size?: number;
  title: string;
  onPress(): void;
}

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  title,
  onPress,
}: RoundedButtonProps) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size: number): StyleProp<any> => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  text: { color: 'black', fontSize: size / 3 },
});
