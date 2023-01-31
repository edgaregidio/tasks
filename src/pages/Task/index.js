import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native'

import database from '../../config/firebaseconfig'
import { MaterialIcons } from '@expo/vector-icons'
// import styles from './styles'

import {
  Wrapper,
  ContentInfoUser,
  Title,
  NameUser,
  Tasks,
  Button,
  NumberTask,
  DescriptionTask,
  DeleteTasks,
  ButtonNewTask,
  IconButton
} from './styles'

const Task = ({ navigation }) => {
  const [tasks, setTasks] = useState([])

  tasks.sort((a, b) => {
    return b.timestamp.toDate() - a.timestamp.toDate()
  })

  function deleteTask(id) {
    database.collection('Tasks').doc(id).delete()
  }

  useEffect(() => {
    database.collection('Tasks').onSnapshot(query => {
      const list = []
      query.forEach(doc => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setTasks(list)
    })
  }, [])

  return (
    <Wrapper>
      <ContentInfoUser>
        <Title>Olá</Title>
        <NameUser>Edgar Siqueira!</NameUser>
      </ContentInfoUser>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item, index }) => {
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
        }}
      />
      <ButtonNewTask
        onPress={() => {
          navigation.navigate('NewTask')
        }}
      >
        <IconButton>+</IconButton>
      </ButtonNewTask>
    </Wrapper>
  )
}

export default Task
