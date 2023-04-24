import React, { useState } from 'react';
import { Menu } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { Text } from 'react-native';
import { format } from 'date-fns';
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
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const openMenu = () => setIsVisibleMenu(true);
  const closeMenu = () => setIsVisibleMenu(false);

  return (
    <TaskWrapper onPress={onClick}>
      <TaskHeader>
        <TaskName>{task.name}</TaskName>
        <Menu
          visible={isVisibleMenu}
          onDismiss={closeMenu}
          anchor={
            <Entypo
              name="dots-three-horizontal"
              size={24}
              color="black"
              onPress={openMenu}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              onEdit();
              closeMenu();
            }}
            title="Edit Task"
          />
          <Menu.Item
            onPress={() => {
              onDelete();
              closeMenu();
            }}
            title="Delete Task"
          />
          <Menu.Item
            onPress={() => {
              onComplete();
              closeMenu();
            }}
            title="Done Task"
          />
        </Menu>
      </TaskHeader>

      <TaskStatusWrapper>
        <Text>Due date: {format(task.dueDate, 'dd/MM/yyyy')}</Text>
        <Text>{task.status.toUpperCase()}</Text>
      </TaskStatusWrapper>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskWrapper>
  );
};
