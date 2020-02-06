import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'src/screens/unAuth/LoginScreen';

export default function UnAuthNavigator(): React.ReactElement {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              // headerShown: false,
            }}
          />
    </Stack.Navigator>
  )
}
