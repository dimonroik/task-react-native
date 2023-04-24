import React from 'react';
import { Menu, Provider } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { Text } from 'react-native';
import {
  TaskWrapper,
  TaskHeader,
  TaskStatusWrapper,
  TaskDescription,
  TaskName,
} from './task-list-item.component.styles';
import { Task } from 'types/task';

interface TaskListItemProps {
  task: Task;
  onEdit?: () => void;
  onDelete?: () => void;
  onComplete?: () => void;
  onClick?: () => void;
}

export const TaskListItem = ({
  task,
  onEdit = () => {},
  onDelete = () => {},
  onComplete = () => {},
  onClick = () => {},
}: TaskListItemProps) => {
  const [isVisibleMenu, setIsVisibleMenu] = React.useState(false);
  const openMenu = () => setIsVisibleMenu(true);
  const closeMenu = () => setIsVisibleMenu(false);

  return (
    <Provider>
      <TaskWrapper onPress={onClick}>
        <TaskHeader>
          <TaskName>{task.name}</TaskName>
          <Menu
            visible={isVisibleMenu}
            onDismiss={closeMenu}
            anchor={
              <Entypo
                name="dots-three-vertical"
                size={24}
                color="black"
                onPress={openMenu}
              />
            }
          >
            <Menu.Item onPress={onEdit} title="Edit Task" />
            <Menu.Item onPress={onDelete} title="Delete Task" />
            <Menu.Item onPress={onComplete} title="Done Task" />
          </Menu>
        </TaskHeader>

        <TaskStatusWrapper>
          <Text>{task.dueDate}</Text>
          <Text>{task.status}</Text>
        </TaskStatusWrapper>
        <TaskDescription>{task.description}</TaskDescription>
      </TaskWrapper>
    </Provider>
  );
};
