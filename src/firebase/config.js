import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAv4NF1qv34-wd7KUznHFG4GYD2lwic46k',
  authDomain: 'muso-ninjas-7d5d5.firebaseapp.com',
  projectId: 'muso-ninjas-7d5d5',
  storageBucket: 'muso-ninjas-7d5d5.appspot.com',
  messagingSenderId: '1003172858598',
  appId: '1:1003172858598:web:f4e2e1c17a535da3798927',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
