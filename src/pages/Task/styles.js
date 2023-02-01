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
  color: ${props => props.theme.contentInfoUser.color};
  font-size: 33px;
`

export const NameUser = styled.Text`
  color: ${props => props.theme.contentInfoUser.color};
  font-size: 22px;
  font-weight: 300;
`

export const ButtonNewTask = styled(TouchableOpacity)`
  position: absolute;
  width: 60px;
  height: 60px;
  /* background: ${props => props.theme.color}; */
  background: #9400d3;
  color: red;
  border-radius: 50%;
  right: 30px;
  top: 30px;
  justify-content: center;
  align-items: center;
`
export const IconButton = styled.Text`
  color: #fff;
  font-size: 25px;
`
