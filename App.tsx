import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { Navigation } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import 'react-native-gesture-handler';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  if (!oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
