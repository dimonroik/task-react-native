import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AboutUsScreen } from '../../features/about-us/screens/about-us.screen';
import { ScreenName } from 'constant/screens';

const AboutUs = createStackNavigator();

export const AboutUsNavigator = () => {
  return (
    <AboutUs.Navigator>
      <AboutUs.Screen name={ScreenName.ABOUT_US} component={AboutUsScreen} />
    </AboutUs.Navigator>
  );
};
