import { useState } from 'react'
import { Route, Routes } from 'react-router'

import './App.css'
import Home from './Page/Home'
import Profile from './Page/Profile'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
