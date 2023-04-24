import React from 'react';
import { Alert, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeArea } from 'components/utility/safe-area.component';
import { TaskListItem } from '../components/task-list-item/task-list-item.component';
import { ScreenName } from 'constant/screens';
import { RoundedButton } from 'components/rounded-button/rounded-button.component';
import { AddNewTaskSection, NoTaskMessage } from '../components/tasks.styles';
import { RootState } from '../../../infrastructure/store/index';
import { Task } from 'types/task';
import {
  removeTask,
  updateTask,
} from '../../../infrastructure/store/tasks/slice';
import { TaskStatus } from 'constant/task-statuses';

export const TasksScreen = ({ navigation }: any) => {
  const tasks = useSelector<RootState, Task[]>((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const onDelete = (task: Task) => {
    Alert.alert('Delete task?', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => dispatch(removeTask(task)),
      },
    ]);
  };

  return (
    <SafeArea>
      {tasks.length === 0 && <NoTaskMessage>No created task</NoTaskMessage>}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskListItem
            task={item}
            onClick={() =>
              navigation.navigate(ScreenName.TASK_DETAIL, { task: item })
            }
            onEdit={() => {
              navigation.navigate(ScreenName.EDIT_TASK, { task: item });
            }}
            onDelete={() => onDelete(item)}
            onComplete={() => {
              dispatch(
                updateTask({
                  ...item,
                  status: TaskStatus.COMPLETED,
                })
              );
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
