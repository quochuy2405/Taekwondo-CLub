import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import NewsItem from '../Components/News/NewsItem'
import SliderCustoms from './../Components/SliderCustoms/SliderCustoms'
import './Style/News.scss'
const listNews = [
  {
    id: '22',
    img: 'https://images.pexels.com/photos/8038026/pexels-photo-8038026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Tiêu đề bài báo',
    description: `This is when I tried googling my issue and frankly I just cannot figure out what's wrong even without googling. Any help is greatly appreciated and if you could also explain why what I've done does not work I would love that a lot`,
  },
  {
    id: '22',
    img: 'https://images.pexels.com/photos/8038026/pexels-photo-8038026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Tiêu đề bài báo',
    description: `This is when I tried googling my issue and frankly I just cannot figure out what's wrong even without googling. Any help is greatly appreciated and if you could also explain why what I've done does not work I would love that a lot`,
  },
  {
    id: '22',
    img: 'https://images.pexels.com/photos/8038026/pexels-photo-8038026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Tiêu đề bài báo',
    description: `This is when I tried googling my issue and frankly I just cannot figure out what's wrong even without googling. Any help is greatly appreciated and if you could also explain why what I've done does not work I would love that a lot`,
  },
  {
    id: '22',
    img: 'https://images.pexels.com/photos/8038026/pexels-photo-8038026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Tiêu đề bài báo',
    description: `This is when I tried googling my issue and frankly I just cannot figure out what's wrong even without googling. Any help is greatly appreciated and if you could also explain why what I've done does not work I would love that a lot`,
  },
  {
    id: '22',
    img: 'https://images.pexels.com/photos/8038026/pexels-photo-8038026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Tiêu đề bài báo',
    description: `This is when I tried googling my issue and frankly I just cannot figure out what's wrong even without googling. Any help is greatly appreciated and if you could also explain why what I've done does not work I would love that a lot`,
  },
]
function News() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className="news">
      <Header />
      <div className="body-page">
        <SliderCustoms />
        <div className="list-news">
          {listNews.map((x, i) => (
            <NewsItem news={x} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default News
