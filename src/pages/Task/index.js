import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from 'react-native'

import database from '../../config/firebaseconfig'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles'

const Task = ({ navigation }) => {
  const [tasks, setTasks] = useState([])

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
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTasks}
                onPress={() => {
                  deleteTask(item.id)
                }}
              >
                <FontAwesome name="star" size={23} color="#9400d3" />
              </TouchableOpacity>
              <Text
                style={styles.descriptionTask}
                onPress={() => {
                  navigation.navigate('Details', {
                    id: item.id,
                    description: item.description
                  })
                }}
              >
                {item.description}
              </Text>
            </View>
          )
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          navigation.navigate('NewTask')
        }}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Task
