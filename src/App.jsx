/* eslint-disable no-unused-vars */
import React from 'react'
import LoginPage from './components/Login_Page/LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartPage from './components/LoadingPage/StartPage';
function App() {
  return (  
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Home" element={<><h1>Hello boss</h1></>} />
        </Routes>

      </Router>
    </>
  )
}

export default App