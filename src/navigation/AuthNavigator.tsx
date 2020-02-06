import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/screens/auth/HomeScreen';
import ProfileScreen from '../screens/auth/ProfileScreen';
import { AuthTabBar } from './AuthTabBar';
import { HomeIcon, PersonIcon, SignOutIcon } from 'src/icons';
import SignOutScreen from 'src/screens/auth/SignOutScreen';
import { AppRoute } from './app-routes';

const Tab = createBottomTabNavigator();

export default function AuthNavigator(): React.ReactElement {  
  return (
    <Tab.Navigator tabBar={props => <AuthTabBar {...props} />}>
      <Tab.Screen name={AppRoute.HOME} component={HomeScreen} options={{ title: AppRoute.HOME, tabBarIcon: HomeIcon }}/>
      <Tab.Screen name={AppRoute.PROFILE} component={ProfileScreen} options={{ title: AppRoute.PROFILE, tabBarIcon: PersonIcon }}/>
      <Tab.Screen name={AppRoute.SIGN_OUT} component={SignOutScreen} options={{ title: AppRoute.SIGN_OUT, tabBarIcon: SignOutIcon }}/>
    </Tab.Navigator>
  )
}
