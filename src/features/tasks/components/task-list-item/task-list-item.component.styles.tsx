import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const TaskWrapper: any = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  background-color: ${(props: any) =>
    props.completed
      ? props.theme.colors.ui.disabled
      : props.theme.colors.background};
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
