import React from 'react';
import { get } from 'lodash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/auth/ProfileScreen';
import { AuthTabBar } from './AuthTabBar';
import { HomeIcon, PersonIcon, SignOutIcon } from 'src/icons';
import SignOutScreen from 'src/screens/auth/SignOutScreen';
import { AppRoute } from './app-routes';
import HomeNav from './HomeNav';

const Tab = createBottomTabNavigator();

export default function AuthNavigator(): React.ReactElement {  
  const getTabBarVisible = route => {
    const { state } = route;
    if (!state) return true;
    const { index, routes } = state;
    const activeRoute = routes[index];
    return get(activeRoute, 'params.tabBarVisible', true);
  }

  return (
    <Tab.Navigator tabBar={props => <AuthTabBar {...props} />}>
      <Tab.Screen name={AppRoute.HOME_STACK} component={HomeNav} options={({ route }) => ({ tabBarVisible: getTabBarVisible(route), title: 'Home', tabBarIcon: HomeIcon })}/>
      <Tab.Screen name={AppRoute.PROFILE} component={ProfileScreen} options={{ title: AppRoute.PROFILE, tabBarIcon: PersonIcon }}/>
      <Tab.Screen name={AppRoute.SIGN_OUT} component={SignOutScreen} options={{ title: AppRoute.SIGN_OUT, tabBarIcon: SignOutIcon }}/>
    </Tab.Navigator>
  )
}
