import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import database from '../../config/firebaseconfig'
import styles from './styles'

const NewTask = ({ navigation }) => {
  const [description, setDescription] = useState(null)
  const [status, setStatus] = useState(null)

  function addTask() {
    database.collection('Tasks').add({
      description: description,
      status: status
    })
    navigation.navigate('Task')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.labelNewTask}>Título da Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar React"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask()
        }}
      >
        <Text style={styles.iconButton}>
          <FontAwesome name="save" size={23} color="#FFF" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewTask
