import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../global/styles/themme';

import {Home} from '../screens/Home';
import {SignIn} from '../screens/SignIn';
import Splash from '../screens/Splash';

const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.colors.secondary100,
        },
        headerShown: false,
      }}>
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
