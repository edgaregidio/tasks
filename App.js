import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Task from './src/pages/Task'
import NewTask from './src/pages/NewTask'
import Details from './src/pages/Details'
import Register from './src/pages/Register'
import Login from './src/pages/Login'

import themes from './src/themes'

const Stack = createStackNavigator()

export default function App() {
  const deviceTheme = useColorScheme()
  const theme = themes[deviceTheme] || themes.dark
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Task"
            component={Task}
            options={{
              gestureEnabled: false,
              headerShown: false,
              headerTintColor: '#9400d3',
              headerLeft: null,
              headerStyle: {
                backgroundColor:
                  deviceTheme === 'light' ? '#ffffff' : '#202024',
                borderBottomWidth: 0
              }
            }}
          />
          <Stack.Screen
            name="NewTask"
            component={NewTask}
            options={{
              headerTintColor: '#9400d3',
              headerStyle: {
                backgroundColor:
                  deviceTheme === 'light' ? '#ffffff' : '#202024',
                borderBottomWidth: 0
              }
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerTintColor: '#9400d3',
              headerStyle: {
                backgroundColor:
                  deviceTheme === 'light' ? '#ffffff' : '#202024',
                borderBottomWidth: 0
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style={deviceTheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  )
}
