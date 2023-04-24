import React from 'react';
import { FlatList } from 'react-native';
import { SafeArea } from 'components/utility/safe-area.component';
import { TaskListItem } from '../components/task-list-item.component';
import { ScreenName } from 'constant/screens';

export const TasksScreen = ({ navigation }: any) => {
  const tasks = [
    {
      id: 1,
      name: 'task1',
      status: 'in progress',
      dueDate: '25/04/2022',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere ut esse porro praesentium explicabo dignissimos exercitationem obcaecati, velit, officiis, beatae veniam fuga! Quos, autem ipsum! Impedit saepe quo aliquid.',
    },
  ];

  return (
    <SafeArea>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskListItem
            task={item}
            onClick={() =>
              navigation.navigate(ScreenName.TASK_DETAIL, { task: item })
            }
          />
        )}
      />
    </SafeArea>
  );
};
