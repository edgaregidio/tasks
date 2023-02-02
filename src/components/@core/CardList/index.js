import React from 'react'
import firebase from '../../../config/firebaseconfig'
import { MaterialIcons } from '@expo/vector-icons'

import {
  DeleteTasks,
  CardTask,
  NumberTask,
  CardHeader,
  TextTask,
  CardBody,
  NameTask,
  CardBottom
} from './styles'

const CardList = ({ navigation, route, item, index }) => {
  console.log('route aqui', route)

  const database = firebase.firestore()
  function deleteTask(id) {
    database.collection(route.params.idUser).doc(id).delete()
  }
  return (
    <CardTask
      selectable={false}
      onPress={() => {
        navigation.navigate('Details', {
          id: item.id,
          description: item.description,
          idUser: route.params.idUser
        })
      }}
    >
      <CardHeader>
        <TextTask>TASK </TextTask>
        <NumberTask>{index + 1}</NumberTask>
      </CardHeader>

      <CardBody>
        <NameTask>{item.description}</NameTask>
      </CardBody>

      <CardBottom>
        <DeleteTasks
          onPress={() => {
            deleteTask(item.id)
          }}
        >
          <MaterialIcons name="delete" size={42} color="#9400d3" />
        </DeleteTasks>
      </CardBottom>
    </CardTask>
  )
}

export default CardList
