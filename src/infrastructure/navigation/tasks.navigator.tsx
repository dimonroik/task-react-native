import React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { TaskDetailScreen } from '../../features/tasks/screens/task-detail.screen';
import { TasksScreen } from '../../features/tasks/screens/tasks.screen';

const TaskStack = createStackNavigator();

export const TasksNavigator = () => {
  return (
    <TaskStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <TaskStack.Screen
        name="Tasks"
        component={TasksScreen}
      />
      <TaskStack.Screen
        name="TaskDetail"
        component={TaskDetailScreen}
      />
    </TaskStack.Navigator>
  );
};
