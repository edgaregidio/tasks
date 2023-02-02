import React, { useState, useEffect } from 'react'
import { Platform, View } from 'react-native'

import firebase from '../../config/firebaseconfig'

import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState('')

  const loginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        let user = userCredential.user
        console.log('user', user)
        navigation.navigate('Task', { idUser: user.uid })
      })
      .catch(error => {
        setErrorLogin(true)
        let errorCode = error.code
        let errorMessage = error.message
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
            onChangeText={text => setEmail(text)}
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
            onChangeText={text => setPassword(text.toLowerCase())}
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
    </Container>
  )
}

export default Login
