import React from 'react';
import { SafeArea } from 'components/utility/safe-area.component';
import { Button } from 'react-native-paper';
import { InputGroup, InputGroupsWrapper, FormActionsWrapper } from '../components/create-task.styles';

export const CreateTaskScreen = () => {

  return (
    <SafeArea>
      <InputGroupsWrapper>
        <InputGroup label="Name" />
        <InputGroup label="Due date" />
        <InputGroup multiline label="Description" />
      </InputGroupsWrapper>

      <FormActionsWrapper>
        <Button mode="contained">Create</Button>
      </FormActionsWrapper>
    </SafeArea>
  );
};
