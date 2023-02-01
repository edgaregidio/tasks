import React, { useState } from 'react'
import firebase from 'firebase'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import database from '../../config/firebaseconfig'
import { Whapper, TitleTask, Input, ButtonNewTask, TextButton } from './styles'

const NewTask = ({ navigation }) => {
  const [description, setDescription] = useState(null)
  const [status, setStatus] = useState(null)

  function addTask() {
    firebase
      .firestore()
      .collection('Tasks')
      .add({
        description: description,
        status: status,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date())
      })
      .then(() => {
        navigation.navigate('Task')
      })
  }

  database
    .collection('Tasks')
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
