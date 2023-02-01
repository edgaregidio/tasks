import React from 'react'
import database from '../../../config/firebaseconfig'
import { TouchableWithoutFeedback } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import {
  Button,
  DeleteTasks,
  DescriptionTask,
  NumberTask,
  Tasks
} from './styles'

const CardList = ({ navigation, item, index }) => {
  function deleteTask(id) {
    database.collection('Tasks').doc(id).delete()
  }
  return (
    <Tasks>
      <TouchableWithoutFeedback>
        <Button>
          <NumberTask>{index + 1} -</NumberTask>
          <DescriptionTask
            selectable={false}
            onPress={() => {
              navigation.navigate('Details', {
                id: item.id,
                description: item.description
              })
            }}
          >
            {item.description}
          </DescriptionTask>
        </Button>
      </TouchableWithoutFeedback>
      <DeleteTasks
        onPress={() => {
          deleteTask(item.id)
        }}
      >
        <MaterialIcons name="delete" size={25} color="#FFF" />
      </DeleteTasks>
    </Tasks>
  )
}

export default CardList
