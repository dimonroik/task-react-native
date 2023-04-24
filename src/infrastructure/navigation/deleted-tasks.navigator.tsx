import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { DeletedTasksScreen } from 'features/tasks/screens/deleted-tasks.screen';
import { ScreenName } from 'constant/screens';

const DeletedTaskStack = createStackNavigator();

export const DeletedTasksNavigator = () => {
  return (
    <DeletedTaskStack.Navigator>
      <DeletedTaskStack.Screen
        name={ScreenName.DELETED_TASKS}
        component={DeletedTasksScreen}
      />
    </DeletedTaskStack.Navigator>
  );
};
