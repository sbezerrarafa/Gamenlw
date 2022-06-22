import React from 'react';
import {StatusBar} from 'react-native';
import {Background} from './src/components/Background';
import {Routes} from './src/routes';
import {Home} from './src/screens/Home';
import {SignIn} from './src/screens/SignIn';

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <SignIn /> */}
      <Routes />
    </Background>
  );
}
