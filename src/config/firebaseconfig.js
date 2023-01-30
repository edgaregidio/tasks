import firebase from 'firebase'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDx3zd5xk65FhBN_GE8CuToh6u52OTXKKk',
  authDomain: 'task-a4a77.firebaseapp.com',
  projectId: 'task-a4a77',
  storageBucket: 'task-a4a77.appspot.com',
  messagingSenderId: '1035594205073',
  appId: '1:1035594205073:web:0b6ef11306c305e9403c30'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
