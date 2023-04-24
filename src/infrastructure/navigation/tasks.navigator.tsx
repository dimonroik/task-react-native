import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { TaskDetailScreen } from 'features/tasks/screens/task-detail.screen';
import { TasksScreen } from 'features/tasks/screens/tasks.screen';
import { CreateTaskScreen } from 'features/tasks/screens/create-task.screen';
import { ScreenName } from 'constant/screens';

const TaskStack = createStackNavigator();

export const TasksNavigator = () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name={ScreenName.ACTIVE_TASKS}
        component={TasksScreen}
      />
      <TaskStack.Screen
        name={ScreenName.TASK_DETAIL}
        component={TaskDetailScreen}
      />
      <TaskStack.Screen
        name={ScreenName.NEW_TASK}
        component={CreateTaskScreen}
      />
    </TaskStack.Navigator>
  );
};
