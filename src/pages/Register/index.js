import React, { useState, useEffect } from 'react'
import { Platform, Text, View } from 'react-native'

import firebase from '../../config/firebaseconfig'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  Container,
  HeaderRegister,
  TitleRedister,
  BodyRegister,
  Input,
  ButtonRegisterError,
  Alert,
  ButtonRegister,
  TextInputRegister,
  BottomRegister,
  TextRegister,
  TextRegisterClick,
  TextDescriptonRegister,
  WrapperInput,
  ContentIconRegister,
  IconEmail,
  IconPassword,
  InputName,
  Teste
} from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Register = ({ navigation, route }) => {
  console.log('route Register', route)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [errouRegister, setErrouRegister] = useState('')

  // const dismissKeyboard = () => {
  //   KeyboardAwareScrollView.dismiss()
  // }

  const registerFirebase = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        let user = userCredential.user
        user
          .updateProfile({ displayName: name })
          .then(() => {
            navigation.navigate('Task', { idUser: user.uid, name: name })
            console.log('Nome do usuário salvo com sucesso')
          })
          .catch(error => {
            setErrouRegister(true)
            let errorCode = error.code
            let errorMessage = error.message
          })
      })
      .catch(error => {
        setErrouRegister(true)
        let errorCode = error.code
        let errorMessage = error.message
      })
  }

  return (
    <Container
      behavio={Platform.OS === 'ios' ? 'padding' : 'height'}
      // onPress={dismissKeyboard}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <HeaderRegister>
          <TitleRedister>Criar Conta</TitleRedister>
        </HeaderRegister>
        <BodyRegister>
          <WrapperInput>
            <ContentIconRegister>
              <IconEmail name="mail" size={24} />
            </ContentIconRegister>
            <Input
              placeholder="Email"
              text="text"
              onChangeText={text => setEmail(text.toLowerCase())}
              value={email}
            />
          </WrapperInput>
          <WrapperInput>
            <ContentIconRegister>
              <IconPassword name="lock" size={24} />
            </ContentIconRegister>
            <Input
              placeholder={'Senha'}
              secureTextEntry={true}
              text="text"
              onChangeText={text => setPassword(text.toLowerCase())}
              value={password}
            />
          </WrapperInput>
          <WrapperInput>
            <ContentIconRegister>
              <IconPassword name="lock" size={24} />
            </ContentIconRegister>
            <InputName
              placeholder={'Nome'}
              text="text"
              onChangeText={text => setName(text)}
              value={name}
            />
          </WrapperInput>
          {errouRegister ? (
            <ButtonRegisterError>
              <MaterialCommunityIcons
                name="alert-circle"
                size={20}
                color="#bbb"
              />
              <Alert>Erro ao cadastrar conta</Alert>
            </ButtonRegisterError>
          ) : (
            <View />
          )}

          {email === '' || password === '' ? (
            <ButtonRegister disabled={true}>
              <TextInputRegister>Cadastrar</TextInputRegister>
            </ButtonRegister>
          ) : (
            <ButtonRegister onPress={registerFirebase}>
              <TextInputRegister>Cadastrar</TextInputRegister>
            </ButtonRegister>
          )}

          <BottomRegister>
            <TextRegister>Ja tem uma conta?</TextRegister>
            <TextRegisterClick onPress={() => navigation.navigate('Login')}>
              Faça o login
            </TextRegisterClick>
          </BottomRegister>
        </BodyRegister>
      </KeyboardAwareScrollView>
    </Container>
  )
}

export default Register
