import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const Wrapper = styled.View`
  background: ${props => props.theme.primaryColors.background};
  flex: 1;
  padding: 25px;
  padding-top: 55px;
`

export const ContentHeaderTask = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const ContentInfoUser = styled.View``

export const Title = styled.Text`
  color: ${props => props.theme.contentInfoUser.color};
  font-size: 33px;
`

export const WrapperButtons = styled.View`
  flex-direction: row;
`

export const IconButtonLogout = styled(AntDesign)`
  color: ${props => props.theme.buttonLogout.color};
`
export const NameUser = styled.Text`
  color: ${props => props.theme.contentInfoUser.color};
  font-size: 22px;
  font-weight: 300;
`

export const ButtonLogout = styled(TouchableOpacity)`
  background: ${props => props.theme.buttonLogout.background};
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 15px;
  transform: rotate(180deg);
`
export const ButtonNewTask = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  /* background: ${props => props.theme.color}; */
  background: #9400d3;
  /* color: red; */
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`
export const IconButton = styled.Text`
  color: #fff;
  font-size: 25px;
`
