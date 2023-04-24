import styled from 'styled-components/native';

export const TaskDetailWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const TaskName = styled.Text`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h4};
  text-align: center;
  padding: ${(props) => props.theme.space[1]};
`;

export const TaskStatus = styled.Text`
  padding: ${(props) => props.theme.space[1]};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

export const TaskDescription = styled.Text`
  padding: ${(props) => props.theme.space[1]};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

export const TaskSectionLabel = styled.Text`
  padding-top: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;
