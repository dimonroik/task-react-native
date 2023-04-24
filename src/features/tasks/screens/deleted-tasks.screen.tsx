import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeArea } from 'components/utility/safe-area.component';
import { TaskListItem } from '../components/task-list-item/task-list-item.component';
import { RootState } from '../../../infrastructure/store';
import { Task } from 'types/task';

export const DeletedTasksScreen = () => {
  const oldTasks = useSelector<RootState, Task[]>(
    (state) => state.tasks.oldTasks
  );

  return (
    <SafeArea>
      <FlatList
        data={oldTasks}
        renderItem={({ item }) => <TaskListItem task={item} isRemoved />}
      />
    </SafeArea>
  );
};
