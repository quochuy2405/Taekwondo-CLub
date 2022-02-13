import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import NewsItem from '../Components/News/NewsItem'
import SliderCustoms from './../Components/SliderCustoms/SliderCustoms'
import { listNews } from '../App/constant'
import './Style/News.scss'
import NewsList from '../Components/NewsList/NewsList'

function News() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className="news">
      <Header />
      <div className="body-page">
        <SliderCustoms />
        <p className="title-name">Tin tức</p>
        <NewsList />
      </div>
      <Footer />
    </div>
  )
}

export default News
