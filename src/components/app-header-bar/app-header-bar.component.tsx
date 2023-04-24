import React from 'react';
import { Appbar } from 'react-native-paper';

interface AppHeaderBarProps {
  title: string;
  onBack?: () => void;
}

export const AppHeaderBar = ({ title, onBack }: AppHeaderBarProps) => {
  return (
    <Appbar.Header>
      {onBack && <Appbar.BackAction onPress={onBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
