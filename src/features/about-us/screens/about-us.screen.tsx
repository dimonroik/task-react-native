import { SafeArea } from 'components/utility/safe-area.component';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const TextWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const AboutUsScreen = () => {
  return (
    <SafeArea>
      <TextWrapper>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          dolores nesciunt numquam ab eveniet fugiat, vitae eum laboriosam
          aperiam modi sed fuga blanditiis impedit. Consectetur odio eius modi
          dolore asperiores?
        </Text>
      </TextWrapper>
    </SafeArea>
  );
};
