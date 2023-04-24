import React from 'react';
import { SafeArea } from 'components/utility/safe-area.component';
import styled from 'styled-components/native';
import { Task } from 'types/task';

const TaskDetailWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const TaskName = styled.Text`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h4};
  text-align: center;
  padding: ${(props) => props.theme.space[1]};
`;

const TaskStatus = styled.Text`
  padding: ${(props) => props.theme.space[1]};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

const TaskDescription = styled.Text`
  padding: ${(props) => props.theme.space[1]};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

const TaskSectionLabel = styled.Text`
  padding-top: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

export const TaskDetailScreen = ({ route }) => {
  const task: Task = route.params.task;

  return (
    <>
      <SafeArea>
        <TaskDetailWrapper>
          <TaskName>{task.name}</TaskName>
          <TaskSectionLabel>Status: </TaskSectionLabel>
          <TaskStatus>{task.status}</TaskStatus>

          <TaskSectionLabel>DueDate: </TaskSectionLabel>
          <TaskStatus>{task.dueDate}</TaskStatus>

          <TaskSectionLabel>Description: </TaskSectionLabel>
          <TaskDescription>{task.description}</TaskDescription>
        </TaskDetailWrapper>
      </SafeArea>
    </>
  );
};
