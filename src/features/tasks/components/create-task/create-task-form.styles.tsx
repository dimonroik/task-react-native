import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const FormWrapper = styled.View`
  flex: 1;
`;

export const InputGroupsWrapper = styled.ScrollView`
  margin: ${(props) => props.theme.space[3]};
  flex: 1;
`;

export const InputGroup = styled(TextInput)`
  padding: ${(props) => props.theme.space[1]};
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const FormActionsWrapper = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

export const FieldError = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
`;
