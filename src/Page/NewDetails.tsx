import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NewsItem from '../Components/News/NewsItem'
import Header from './../Components/Header/Header'
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
function NewDetails() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className="detail-news">
      <Header />
      <div className="body-page">
        <p className="title-name">Chi tiết bài báo</p>
        <div
          className="list-news"
          style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
        >
          {listNews.slice(0, 4).map((x, i) => (
            <NewsItem news={x} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NewDetails
