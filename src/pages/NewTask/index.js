import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import firebase from '../../config/firebaseconfig'
import { Whapper, TitleTask, Input, ButtonNewTask, TextButton } from './styles'

// const firebase = firebase.firestore()

const NewTask = ({ navigation, route }) => {
  const database = firebase.firestore()
  const [description, setDescription] = useState(null)
  const [status, setStatus] = useState(null)

  function addTask() {
    firebase
      .firestore()
      .collection(route.params.idUser)
      .add({
        description: description,
        status: status,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date())
      })
      .then(() => {
        navigation.navigate('Task', { idUser: route.params.idUser })
      })
  }

  database
    .collection(route.params.idUser)
    .orderBy('timestamp', 'desc')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // processar cada documento aqui
      })
    })

  return (
    <Whapper>
      <TitleTask>Título da Task</TitleTask>
      <Input
        placeholder="Ex: Estudar React"
        onChangeText={setDescription}
        value={description}
      />
      <TextButton
        onPress={() => {
          addTask()
        }}
      >
        <ButtonNewTask>
          <FontAwesome name="save" size={23} color="#FFF" />
        </ButtonNewTask>
      </TextButton>
    </Whapper>
  )
}

export default NewTask
