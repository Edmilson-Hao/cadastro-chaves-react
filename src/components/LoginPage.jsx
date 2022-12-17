import React from 'react'
import { getAuth, signInWithEmailAndPassword }  from 'firebase/auth'

export default _ => {
    var email
    var password
    return(
        <div>
            <input type="email" onChange={e => {
                email = e.target.value
                console.log(email)
            }}/>
            <input type="password" onChange={e => {
                 password = e.target.value
                 console.log(password)
            }} />
            <button onClick={e => {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user.uid)
                    // ...
                    })
                    .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    });

                }
            }>Login</button>
        </div>
    )
}