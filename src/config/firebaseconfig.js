import firebase from 'firebase'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: 'AIzaSyDx3zd5xk65FhBN_GE8CuToh6u52OTXKKk',
  authDomain: 'task-a4a77.firebaseapp.com',
  projectId: 'task-a4a77',
  storageBucket: 'task-a4a77.appspot.com',
  messagingSenderId: '1035594205073',
  appId: '1:1035594205073:web:0b6ef11306c305e9403c30'
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const database = firebase.firestore()
export default database
