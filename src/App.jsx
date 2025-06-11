
        
     
 import React from 'react'
 import Header from './componants/header/Header'
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/Aboutpage'
import CoursesPage from './pages/CoursesPage'
import ContactUsPage from './pages/ContactUsPage'
import AdmissionPage from './pages/AdmissionPage'
import ChatbotComponent from './componants/Chatbot/ChatbotComponents'



 const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactUsPage/>}/>
        <Route path="/admission" element={<AdmissionPage/>} />
      </Routes>
      < ChatbotComponent/>
    </Router>
  )
 }

 export default App