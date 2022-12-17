import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword }  from 'firebase/auth'
import { getFirestore, collection, getDocs }     from 'firebase/firestore'

import SendData from './components/SendData'
import GetData from './components/GetData'
import LoginPage from './components/LoginPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <SendData />
      <GetData />
    </div>
  );
}

export default App;
