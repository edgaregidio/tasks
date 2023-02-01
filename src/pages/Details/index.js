import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import database from '../../config/firebaseconfig'

import { Container, Button, Input, Title } from './styles'

const Details = ({ navigation, route }) => {
  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  )
  const idTask = route.params.id

  function editTask(description, id) {
    database.collection('Tasks').doc(id).update({
      description: descriptionEdit
    })
    navigation.navigate('Task')
  }

  return (
    <Container>
      <Title>Título da Task</Title>
      <Input
        placeholder="Ex: Estudar React"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <Button
        onPress={() => {
          editTask(descriptionEdit, idTask)
        }}
      >
        <Text>
          <FontAwesome name="save" size={23} color="#FFF" />
        </Text>
      </Button>
    </Container>
  )
}

export default Details
