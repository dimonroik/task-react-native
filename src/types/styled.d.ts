import { theme } from '../infrastructure/theme';

import 'styled-components';
type CustomTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends CustomTheme {}
}
