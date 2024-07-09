// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from  './pages/Contact'
import { Cart } from './pages/Cart'
import './App.css'


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
            <Route path='Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
