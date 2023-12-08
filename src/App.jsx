import './App.css'
import React from 'react'
import Navbar from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
