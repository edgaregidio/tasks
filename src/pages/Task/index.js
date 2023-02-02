import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import firebase from '../../config/firebaseconfig'
import { MaterialIcons } from '@expo/vector-icons'

import {
  Wrapper,
  ContentInfoUser,
  Title,
  NameUser,
  ButtonNewTask,
  IconButton,
  ButtonLogout,
  WrapperButtons,
  ContentHeaderTask,
  IconButtonLogout
} from './styles'
import CardList from '../../components/@core/CardList'

const Task = ({ navigation, route }) => {
  const [tasks, setTasks] = useState([])
  const database = firebase.firestore()

  tasks.sort((a, b) => {
    return b.timestamp.toDate() - a.timestamp.toDate()
  })

  useEffect(() => {
    database.collection(route.params.idUser).onSnapshot(query => {
      const list = []
      query.forEach(doc => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setTasks(list)
    })
  }, [])

  function logoutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login')
      })
      .catch(error => {
        // An error happened.
      })
  }

  return (
    <Wrapper>
      <ContentHeaderTask>
        <ContentInfoUser>
          <Title>Olá</Title>
          <NameUser>Edgar Siqueira!</NameUser>
        </ContentInfoUser>

        <WrapperButtons>
          <ButtonLogout onPress={() => logoutUser()}>
            <IconButtonLogout name="logout" size={26} />
          </ButtonLogout>
          <ButtonNewTask
            onPress={() => {
              navigation.navigate('NewTask', {
                idUser: route.params.idUser,
                route: route
              })
            }}
          >
            <IconButton>
              <MaterialIcons name="playlist-add" size={26} color="#FFF" />
            </IconButton>
          </ButtonNewTask>
        </WrapperButtons>
      </ContentHeaderTask>

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item, index }) => {
          return (
            <CardList
              navigation={navigation}
              route={route}
              item={item}
              index={index}
            />
          )
        }}
      />
    </Wrapper>
  )
}

export default Task
