import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const TaskWrapper = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const TaskHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TaskName = styled.Text`
  flex: 1;
`;

export const TaskStatusWrapper = styled.View`
  margin-top: ${(props) => props.theme.space[4]};
  flex-direction: row;
  justify-content: space-between;
`;

export const TaskDescription = styled.Text`
  margin-top: ${(props) => props.theme.space[2]};
`;
