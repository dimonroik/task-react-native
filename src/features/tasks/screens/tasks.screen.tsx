import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeArea } from 'components/utility/safe-area.component';
import { TaskListItem } from '../components/task-list-item/task-list-item.component';
import { ScreenName } from 'constant/screens';
import { RoundedButton } from 'components/rounded-button/rounded-button.component';
import { AddNewTaskSection } from '../components/tasks.styles';
import { RootState } from '../../../infrastructure/store/index';
import { Task } from 'types/task';

export const TasksScreen = ({ navigation }: any) => {
  const tasks = useSelector<RootState, Task[]>(state => state.tasks.tasks);

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
            onEdit={() => {
              navigation.navigate(ScreenName.EDIT_TASK, { task: item })
            }}
          />
        )}
      />
      <AddNewTaskSection>
        <RoundedButton
          title="+"
          size={55}
          onPress={() => {
            navigation.navigate(ScreenName.NEW_TASK);
          }}
        />
      </AddNewTaskSection>
    </SafeArea>
  );
};
