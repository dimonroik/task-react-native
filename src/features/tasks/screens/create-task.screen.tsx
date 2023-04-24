import React, { useCallback } from 'react';
import { SafeArea } from 'components/utility/safe-area.component';
import { CreateTaskForm } from '../components/create-task/create-task-form.component';
import { useDispatch } from 'react-redux';
import { Task } from 'types/task';
import { addTask } from '../../../infrastructure/store/tasks/slice';
import { ScreenName } from 'constant/screens';

export const CreateTaskScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const createTask = useCallback(
    (data: Task) => {
      dispatch(addTask(data));
      navigation.navigate(ScreenName.ACTIVE_TASKS);
    },
    [dispatch, navigation]
  );

  return (
    <SafeArea>
      <CreateTaskForm onSubmit={createTask} />
    </SafeArea>
  );
};
