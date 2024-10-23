/* eslint-disable no-unused-vars */
import React from 'react'
import LoginPage from './components/Login_Page/LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartPage from './components/LoadingPage/StartPage';
import ForgotPage from './components/ForgotPage/ForgotPage';
import HeroCard from './components/cards/HeroCard';
import HomePage from './components/HomePage/HomePage';
function App() {
  return (  
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/forgot" element={<ForgotPage/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>

      </Router>
    </>
  )
}

export default App