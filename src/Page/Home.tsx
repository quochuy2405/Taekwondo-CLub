import React from 'react'
import Header from '../Components/Header/Header'
import Sliders from '../Components/Slider/Sliders'

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="body-page">
        <Sliders />
        <div className="div" style={{ height: '1000px' }}></div>
      </div>
    </div>
  )
}

export default Home
