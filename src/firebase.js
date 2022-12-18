import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, getDocs, query, where, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAje9jk7dg4DQC-CbJTytanIRK-UaFISkQ",
  authDomain: "cadastrarchaves.firebaseapp.com",
  projectId: "cadastrarchaves",
  storageBucket: "cadastrarchaves.appspot.com",
  messagingSenderId: "584463290160",
  appId: "1:584463290160:web:18722949748414caeb42f5"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)


const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

export { auth, app, db, signInWithEmailAndPassword }