// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from  './pages/Contact'
import './App.css'


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='Home' element={<Home />}>
          <Route />
          <Route />
          <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
      <Home />
    </div>
  )
}

export default App
