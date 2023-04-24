import styled from 'styled-components/native';

export const AddNewTaskSection = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 30px;
`;

export const NoTaskMessage = styled.Text`
  text-align: center;
  padding: ${(props) => props.theme.space[3]};
`;
