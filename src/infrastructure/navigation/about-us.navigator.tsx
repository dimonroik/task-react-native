import React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { AboutUsScreen } from '../../features/about-us/screens/about-us.screen';

const AboutUs = createStackNavigator();

export const AboutUsNavigator = () => {
  return (
    <AboutUs.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <AboutUs.Screen
        name="About Us"
        component={AboutUsScreen}
      />
    </AboutUs.Navigator>
  );
};
