import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  background: ${props => props.theme.background};
  flex: 1;
  padding: 25px;
`

export const ContentInfoUser = styled.View`
  margin-bottom: 20px;
`

export const Title = styled.Text`
  color: ${props => props.theme.color};
  font-size: 33px;
`

export const NameUser = styled.Text`
  color: ${props => props.theme.color};
  font-size: 22px;
  font-weight: 300;
`

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
  color: ${props => props.theme.color};
  font-weight: 700;
`

export const DescriptionTask = styled.Text`
  width: 75%;
  align-content: flex-start;
  border-radius: 8px;
  margin-right: 2px;
  font-size: 18px;
  color: ${props => props.theme.color};
`
export const DeleteTasks = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.color};
  align-items: center;
  justify-content: center;
`
export const ButtonNewTask = styled(TouchableOpacity)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: ${props => props.theme.color};
  border-radius: 50%;
  right: 30px;
  bottom: 30px;
  justify-content: center;
  align-items: center;
`
export const IconButton = styled.Text`
  color: #fff;
  font-size: 25px;
`
