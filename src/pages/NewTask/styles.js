import { TextInput, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Whapper = styled.View`
  background: ${props => props.theme.background};
  flex: 1;
  padding: 20px;
`
export const TitleTask = styled.Text`
  color: ${props => props.theme.color};
  font-size: 20px;
  font-weight: 500;
  width: 90%;
  margin: 20px;
`
export const Input = styled(TextInput)`
  width: 90%;
  margin-top: 10px;
  padding: 10px;
  height: 50px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #9400d3;
  margin-right: auto;
  margin-left: auto;
  background: ${props => props.theme.inputDefault.background};
  font-size: 18px;
`
export const TextButton = styled(TouchableOpacity)``

export const ButtonNewTask = styled.View`
  background: #9400d3;
  height: 50px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
