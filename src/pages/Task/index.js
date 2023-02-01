import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native'

import database from '../../config/firebaseconfig'
// import { MaterialIcons } from '@expo/vector-icons'
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
import CardList from '../../components/@core/CardList'

const Task = ({ navigation }) => {
  const [tasks, setTasks] = useState([])

  tasks.sort((a, b) => {
    return b.timestamp.toDate() - a.timestamp.toDate()
  })

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
          return <CardList navigation={navigation} item={item} index={index} />
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
