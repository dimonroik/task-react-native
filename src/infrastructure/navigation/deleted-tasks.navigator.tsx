import React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { DeletedTasksScreen } from '../../features/tasks/screens/deleted-tasks.screen';

const DeletedTaskStack = createStackNavigator();

export const DeletedTasksNavigator = () => {
  return (
    <DeletedTaskStack.Navigator

      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <DeletedTaskStack.Screen
        name="DeletedTasksList"
        component={DeletedTasksScreen}
      />
    </DeletedTaskStack.Navigator>
  );
};
