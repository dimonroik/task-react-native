import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const InputGroup = styled(TextInput)`
  padding: ${(props) => props.theme.space[1]};
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const FilterModal = styled.Modal`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const ModalTitleWrapper = styled.View`
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const ModalTitleText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h4};
`;
