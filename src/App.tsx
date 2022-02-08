import { useState } from 'react'
import { Route, Routes } from 'react-router'

import './App.css'
import Gratulation from './Page/Gratulation'
import Home from './Page/Home'
import Introduce from './Page/Introduce'
import NewDetails from './Page/NewDetails'
import News from './Page/News'
import PointSchool from './Page/PointSchool'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/*" element={<NewDetails />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/gratulation" element={<Gratulation />} />
        <Route path="/point" element={<PointSchool />} />
      </Routes>
    </div>
  )
}

export default App
