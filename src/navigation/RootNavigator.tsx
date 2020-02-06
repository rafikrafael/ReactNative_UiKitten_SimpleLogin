import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from 'src/contexts/AuthContext';
import SplashScreen from 'src/screens/unAuth/SplashScreen';
import UnAuthNavigator from './UnAuthNavigator';
import AuthNavigator from './AuthNavigator';
import { AppRoute } from './app-routes';

export default function RootNavigator(): React.ReactElement {
  const Stack = createStackNavigator();
  const { state } = React.useContext(AuthContext);
  const { isLoading, isSignout, userToken } = state;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        {isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Screen 
            name={AppRoute.SPLASH}
            component={SplashScreen}
            // options={{ headerShown: false }}
          />
        ) : !userToken ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen
              name={AppRoute.UNAUTH}
              component={UnAuthNavigator}
              options={{
                // headerShown: false,
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: isSignout ? 'pop' : 'push',
              }}
            />
          </>
        ) : (
          // User is signed in
          <Stack.Screen 
            name={AppRoute.AUTH}
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
