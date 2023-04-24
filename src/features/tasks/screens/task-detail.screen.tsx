import React from 'react';
import { format } from 'date-fns';
import { SafeArea } from 'components/utility/safe-area.component';
import { Task } from 'types/task';
import {
  TaskDetailWrapper,
  TaskName,
  TaskSectionLabel,
  TaskStatus,
  TaskDescription,
} from '../components/task-detail';

export const TaskDetailScreen = ({ route }) => {
  const task: Task = route.params.task;

  return (
    <>
      <SafeArea>
        <TaskDetailWrapper>
          <TaskName>{task.name}</TaskName>
          <TaskSectionLabel>Status: </TaskSectionLabel>
          <TaskStatus>{task.status.toUpperCase()}</TaskStatus>

          <TaskSectionLabel>DueDate: </TaskSectionLabel>
          <TaskStatus>{format(task.dueDate, 'dd/MM/yyyy')}</TaskStatus>

          <TaskSectionLabel>Description: </TaskSectionLabel>
          <TaskDescription>{task.description}</TaskDescription>
        </TaskDetailWrapper>
      </SafeArea>
    </>
  );
};
