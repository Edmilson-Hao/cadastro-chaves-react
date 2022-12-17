import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword }  from 'firebase/auth'
import { getFirestore, collection, getDocs }     from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAje9jk7dg4DQC-CbJTytanIRK-UaFISkQ",
  authDomain: "cadastrarchaves.firebaseapp.com",
  projectId: "cadastrarchaves",
  storageBucket: "cadastrarchaves.appspot.com",
  messagingSenderId: "584463290160",
  appId: "1:584463290160:web:18722949748414caeb42f5"
})

const auth      = getAuth(firebaseApp)
const db        = getFirestore(firebaseApp)
const todosCol  = collection(db,'todos')
//const snapshot = await getDocs(todosCol)


async function snapshot() {
  const snapshot = await getDocs(todosCol)
  console.log(snapshot)
}

//Detect auth state
onAuthStateChanged(auth, user => {
  if (user !== null){
    console.log('LoggedIn!')
  } else {
    console.log('No user!')
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
