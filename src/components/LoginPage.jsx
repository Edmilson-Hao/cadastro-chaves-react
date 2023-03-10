import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signInWithEmailAndPassword } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import './LoginPage.css'


export default props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/sendData')
  }, [user, loading])
  return (
    <div className='login'>
      <div className='login__container'>
        <input
          type='text'
          className='login__textBox'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='E-mail Address'
        />
        <input
          type='password'
          className='login__textBox'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          onKeyPress={e => e.key ==='Enter' ? signInWithEmailAndPassword(auth, email, password) : null }
        />
        <button
          className='login__btn'
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
      </div>
    </div>
  )
}