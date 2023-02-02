import styled from 'styled-components/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export const StyledNavigator = styled(Stack.Navigator)``
export const StyledScreen = styled(Stack.Screen)`
  background-color: red;
`
