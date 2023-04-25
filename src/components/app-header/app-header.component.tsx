import React from 'react';
import { Appbar } from 'react-native-paper';
import { AppBarWrapper, HeaderTitle } from './app-header.styled';

interface AppBarProps {
  toggleFilters(): void;
  title?: string;
}

export const AppHeader = ({ toggleFilters, title }: AppBarProps) => {
  return (
    <AppBarWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <Appbar.Action icon="tune" onPress={toggleFilters} />
    </AppBarWrapper>
  );
};
