import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Todo from './pages/Todo';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen
          name="Todo"
          component={Todo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
