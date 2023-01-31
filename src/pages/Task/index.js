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
import styles from './styles'

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
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.Tasks}>
              <TouchableWithoutFeedback>
                <View style={styles.button}>
                  <Text style={styles.numberTask}>{index + 1} -</Text>
                  <Text
                    style={styles.descriptionTask}
                    selectable={false}
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
              </TouchableWithoutFeedback>
              <TouchableOpacity
                style={styles.deleteTasks}
                onPress={() => {
                  deleteTask(item.id)
                }}
              >
                <MaterialIcons name="delete" size={25} color="#FFF" />
              </TouchableOpacity>
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
