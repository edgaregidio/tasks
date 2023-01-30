import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Task from './src/pages/Task'
import NewTask from './src/pages/NewTask'
import Details from './src/pages/Details'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name="Task"
          component={Task}
          options={{
            headerTintColor: '#9400d3'
          }}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{
            headerTintColor: '#9400d3'
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: '#9400d3'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
