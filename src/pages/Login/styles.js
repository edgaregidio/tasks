import {
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import styled from 'styled-components/native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  background: ${props => props.theme.primaryColors.background};
  align-items: center;
  justify-content: center;
  padding: ${Platform.OS === 'ios' ? 0 : 50};
`
export const HeaderLogin = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
export const TitleLogin = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: ${props => props.theme.primaryColors.color};
`
export const TitleLoginApp = styled.Text`
  font-size: 35px;
  font-weight: 600;
  color: ${props => props.theme.primaryColors.color};
`
export const TextDescriptonLogin = styled.Text`
  color: ${props => props.theme.secondyColors.color};
`
export const BodyLogin = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
`
export const WrapperInput = styled.View`
  background: ${props => props.theme.inputLoginAndRegister.background};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  width: 100%;
  text-transform: lowercase;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 15px;
  border-radius: 8px;
`
export const ContentIconLogin = styled.View`
  width: 20%;
  height: 70px;
  justify-content: center;
  align-items: center;
`
export const IconEmail = styled(MaterialCommunityIcons)`
  color: ${props => props.theme.primaryColors.color};
`

export const IconPassword = styled(FontAwesome)`
  color: ${props => props.theme.primaryColors.color};
`
export const Input = styled(TextInput)`
  height: 70px;
  width: 80%;
  font-size: 16px;
  color: ${props => props.theme.primaryColors.color};
  font-weight: 500;
  text-transform: uppercase;
`

export const ButtonLoginError = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Alert = styled.Text`
  color: #bbb;
  margin-left: 5px;
  font-size: 16px;
`

export const ButtonLogin = styled(TouchableOpacity)`
  background: #9400d3;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  margin-top: 20px;
`
export const TextLogin = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
`
export const BottomLogin = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: row;
`
export const TextRegister = styled.Text`
  color: ${props => props.theme.secondyColors.color};
  margin-right: 5px;
  font-size: 16px;
`
export const TextRegisterClick = styled.Text`
  color: ${props => props.theme.primaryColors.color};
  font-weight: 600;
  font-size: 16px;
`
