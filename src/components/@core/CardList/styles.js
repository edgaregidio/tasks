import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Tasks = styled.View`
  background: #000;
  width: 100%;
  height: 120px;
  border-radius: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`
export const Button = styled.View`
  background: #f8f8f8;
  width: 80%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`

export const NumberTask = styled.Text`
  margin: 15px;
  /* color: ${props => props.theme.color}; */
  color: red;
  font-weight: 700;
`

export const DescriptionTask = styled.Text`
  width: 75%;
  align-content: flex-start;
  border-radius: 8px;
  margin-right: 2px;
  font-size: 18px;
  /* color: ${props => props.theme.color}; */
  color: red;
`
export const DeleteTasks = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background: ${props => props.theme.color}; */
  color: red;
  align-items: center;
  justify-content: center;
`
