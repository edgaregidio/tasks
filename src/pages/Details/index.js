import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import database from '../../config/firebaseconfig'

import styles from './styles'

const Details = ({ navigation, route }) => {
  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  )
  console.log('descriptionEdit', descriptionEdit)
  const idTask = route.params.id

  function editTask(description, id) {
    database.collection('Tasks').doc(id).update({
      description: descriptionEdit
    })
    navigation.navigate('Task')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.labelNewTask}>Título da Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar React"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          editTask(descriptionEdit, idTask)
        }}
      >
        <Text style={styles.iconButton}>
          <FontAwesome name="save" size={23} color="#FFF" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Details
