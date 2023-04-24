import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { TasksNavigator } from './tasks.navigator';
import { DeletedTasksNavigator } from './deleted-tasks.navigator';
import { AboutUsNavigator } from './about-us.navigator';
import { ScreenName } from 'constant/screens';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  [ScreenName.ACTIVE_TASKS_MAIN]: 'tasks',
  [ScreenName.DELETED_TASKS_MAIN]: 'business-time',
  [ScreenName.ABOUT_US_MAIN]: 'info',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }: any) => (
      <FontAwesome5 name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        options={{
          title: 'Tasks',
        }}
        name={ScreenName.ACTIVE_TASKS_MAIN}
        component={TasksNavigator}
      />
      <Tab.Screen
        name={ScreenName.DELETED_TASKS_MAIN}
        options={{
          title: 'Deleted tasks',
        }}
        component={DeletedTasksNavigator}
      />
      <Tab.Screen
        name={ScreenName.ABOUT_US_MAIN}
        options={{
          title: 'About us',
        }}
        component={AboutUsNavigator}
      />
    </Tab.Navigator>
  </>
);
