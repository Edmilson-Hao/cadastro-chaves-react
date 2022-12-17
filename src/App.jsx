import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SendData from './components/SendData'
import GetData from './components/GetData'
import LoginPage from './components/LoginPage'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route exact path='/sendData' element={<SendData />} />
          <Route exact path='/getData' element={<GetData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
