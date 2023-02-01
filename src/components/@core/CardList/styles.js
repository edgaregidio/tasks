import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const CardTask = styled(TouchableOpacity)`
  width: 100%;
  align-content: flex-start;
  border-radius: 8px;
  margin-right: 2px;
  font-size: 18px;
  background: ${props => props.theme.cardList.background};
  padding: 15px;
  margin-bottom: 15px;
`

export const CardHeader = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`
export const TextTask = styled.Text`
  color: ${props => props.theme.cardList.textTask.color};
  font-size: 14px;
  font-weight: 500;
`
export const NumberTask = styled.Text`
  color: ${props => props.theme.cardList.color};
  font-weight: 700;
  font-size: 14px;
`
export const CardBody = styled.View`
  margin-bottom: 5px;
`
export const NameTask = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.cardList.color};
  font-weight: 500;
`
export const CardBottom = styled.View`
  align-items: flex-end;
`

export const DeleteTasks = styled(TouchableOpacity)`
  /* background: ${props => props.theme.color}; */
`
