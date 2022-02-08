import { useState } from 'react'
import { Route, Routes } from 'react-router'

import './App.css'
import Home from './Page/Home'
import News from './Page/News'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
      </Routes>
    </div>
  )
}

export default App
