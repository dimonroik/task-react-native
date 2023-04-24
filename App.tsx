import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { Navigation } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import { store } from './src/infrastructure/store';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
        <StatusBar style="auto" />
      </Provider>
    </PaperProvider>
  );
}
