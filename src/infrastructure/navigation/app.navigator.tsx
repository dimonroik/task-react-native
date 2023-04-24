import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { TasksNavigator } from './tasks.navigator';
import { DeletedTasksNavigator } from './deleted-tasks.navigator';
import { AboutUsNavigator } from './about-us.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Tasks: 'tasks',
  DeletedTasks: 'business-time',
  AboutUs: 'info',
};

const createScreenOptions = ({ route }: any) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }: any) => (
      <FontAwesome5 name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <>
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
      <Tab.Screen name="Tasks" component={TasksNavigator} />
      <Tab.Screen name="DeletedTasks" component={DeletedTasksNavigator} />
      <Tab.Screen name="AboutUs" component={AboutUsNavigator} />
    </Tab.Navigator>
  </>

);
