import React from 'react'
import { getAuth, signInWithEmailAndPassword }  from 'firebase/auth'

const checkIfLogged = () => {
    firebaseApp.auth().onAuthStateChanged( user => {
        if (!user) console.log('Not Logged In')
        else console.log('Logged')
      })
}

export default props => {
    return(
        {checkIfLogged}
    )
}