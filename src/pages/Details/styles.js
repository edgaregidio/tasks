import { TextInput, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
  padding: 20px;
`
export const Title = styled.Text`
  color: ${props => props.theme.color};
  font-size: 20px;
  font-weight: 500;
  width: 90%;
  margin-top: 20px;
  margin-left: 20px;
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
export const Button = styled(TouchableOpacity)`
  background: #9400d3;
  height: 50px;
  width: 90%;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`
//   buttonNewTask: {
//     backgroundColor: '#9400d3',
//     height: 50,
//     width: '90%',
//     marginRight: 'auto',
//     marginLeft: 'auto',
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20
//   }
// })

// export default styles
