import { Appbar } from 'react-native-paper';
import styled from 'styled-components/native';

export const AppBarWrapper = styled(Appbar)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between,
  margin-top: 0;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;

export const HeaderTitle = styled.Text`
  flex: 1;
`;
