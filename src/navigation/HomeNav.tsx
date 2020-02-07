import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from 'src/navigation/app-routes';
import HomeScreen from 'src/screens/auth/home/HomeScreen';
import HomeScreen2 from 'src/screens/auth/home/HomeScreen2';

const Stack = createStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen 
        name={AppRoute.HOME}
        component={HomeScreen}
      />

      <Stack.Screen 
        name={AppRoute.HOME2}
        component={HomeScreen2}
      />
    </Stack.Navigator>
  )
}

export default HomeNav
