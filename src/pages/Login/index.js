import React, { useState, useEffect } from 'react'
import { Platform, View } from 'react-native'

import firebase from '../../config/firebaseconfig'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  Container,
  HeaderLogin,
  TitleLogin,
  BodyLogin,
  Input,
  ButtonLoginError,
  Alert,
  ButtonLogin,
  TextLogin,
  BottomLogin,
  TextRegister,
  TextRegisterClick,
  TextDescriptonLogin,
  TitleLoginApp,
  WrapperInput,
  ContentIconLogin,
  IconEmail,
  IconPassword
} from './styles'

const Login = ({ navigation, route }) => {
  console.log('route Login', route)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState('')

  const loginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        let user = userCredential.user
        let name = user.displayName
        console.log('Nome do usuário:', name)
        // console.log('user', user)
        // navigation.navigate('Task', { idUser: user.uid })
        navigation.navigate('Task', { idUser: user.uid, userName: name })
      })
      .catch(error => {
        setErrorLogin(true)
        let errorCode = error.code
        let errorMessage = error.message
        console.error(error)
      })
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let uid = user.uid
        navigation.navigate('Task', { idUser: uid })
      }
    })
  }, [])

  return (
    <Container behavio={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <HeaderLogin>
          <TitleLogin>Bem-vindo ao</TitleLogin>
          <TitleLoginApp>Tasks</TitleLoginApp>
          <TextDescriptonLogin>Acesse para continuar</TextDescriptonLogin>
        </HeaderLogin>
        <BodyLogin>
          <WrapperInput>
            <ContentIconLogin>
              <IconEmail name="mail" size={24} />
            </ContentIconLogin>
            <Input
              placeholder="Digite seu email"
              text="text"
              onChangeText={text => setEmail(text.toLowerCase())}
              value={email}
            />
          </WrapperInput>
          <WrapperInput>
            <ContentIconLogin>
              <IconPassword name="lock" size={24} />
            </ContentIconLogin>
            <Input
              placeholder={'Digite sua senha'}
              secureTextEntry={true}
              text="text"
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </WrapperInput>
          {errorLogin ? (
            <ButtonLoginError>
              <MaterialCommunityIcons
                name="alert-circle"
                size={20}
                color="#bbb"
              />
              <Alert>Email ou senha invalido!</Alert>
            </ButtonLoginError>
          ) : (
            <View />
          )}

          {email === '' || password === '' ? (
            <ButtonLogin disabled={true}>
              <TextLogin>Login</TextLogin>
            </ButtonLogin>
          ) : (
            <ButtonLogin onPress={loginFirebase}>
              <TextLogin>Login</TextLogin>
            </ButtonLogin>
          )}

          <BottomLogin>
            <TextRegister>Não tem uma conta?</TextRegister>
            <TextRegisterClick onPress={() => navigation.navigate('Register')}>
              Cadastre aqui!
            </TextRegisterClick>
          </BottomLogin>
        </BodyLogin>

        <View style={{ height: 100 }} />
      </KeyboardAwareScrollView>
    </Container>
  )
}

export default Login
