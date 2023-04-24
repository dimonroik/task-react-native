import React, { useCallback } from 'react';
import { SafeArea } from 'components/utility/safe-area.component';
import { CreateTaskForm } from '../components/create-task/create-task-form.component';
import { useDispatch } from 'react-redux';
import { Task } from 'types/task';
import { updateTask } from '../../../infrastructure/store/tasks/slice';
import { ScreenName } from 'constant/screens';

export const EditTaskScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const task = route.params.task as Task;

  const createTask = useCallback((data: Task) => {
    dispatch(updateTask(data));
    navigation.navigate(ScreenName.ACTIVE_TASKS);
  }, [dispatch, navigation]);

  return (
    <SafeArea>
      <CreateTaskForm initialTask={task} onSubmit={createTask}/>
    </SafeArea>
  );
};
