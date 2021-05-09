import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SecondScreen } from 'src/screens/index';
import { Topbar } from 'src/components';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        header: (props) => <Topbar {...props} />,
      }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Second' component={SecondScreen} />
    </Stack.Navigator>
  );
}
