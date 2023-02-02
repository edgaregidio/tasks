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
  IconPassword
} from './styles'

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errouRegister, setErrouRegister] = useState('')

  const registerFirebase = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        let user = userCredential.user
        navigation.navigate('Task', { idUser: user.uid })
      })
      .catch(error => {
        setErrouRegister(true)
        let errorCode = error.code
        let errorMessage = error.message
      })
  }

  return (
    <Container behavio={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <HeaderRegister>
        <TitleRedister>Criar Conta</TitleRedister>
        <TextDescriptonRegister>Acesse para continuar</TextDescriptonRegister>
      </HeaderRegister>
      <BodyRegister>
        <WrapperInput>
          <ContentIconRegister>
            <IconEmail name="mail" size={24} />
          </ContentIconRegister>
          <Input
            placeholder="Digite seu email"
            text="text"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </WrapperInput>
        <WrapperInput>
          <ContentIconRegister>
            <IconPassword name="lock" size={24} />
          </ContentIconRegister>
          <Input
            placeholder={'Digite sua senha'}
            secureTextEntry={true}
            text="text"
            onChangeText={text => setPassword(text.toLowerCase())}
            value={password}
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

      {/* <View style={{ height: 100 }} /> */}
    </Container>
  )
}

export default Register
