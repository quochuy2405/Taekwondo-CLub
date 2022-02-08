import React from 'react'
import { Link } from 'react-router-dom'
import './NewsItem.scss'
const link =
  'https://images.pexels.com/photos/8038026/pexels-photo-8038026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
interface News {
  id: string
  img: string
  title: string
  description: string
}
function NewsItem({ news }: { news: News }) {
  return (
    <div className="news-item">
      <Link to={`/news/${news.id}`}>
        <img src={news.img} className="new-image" alt="" />
        <div className="content-news">
          <p className="title-news">{news.title}</p>

          <p className="description-news">{news.description}</p>
        </div>{' '}
      </Link>
    </div>
  )
}

export default NewsItem
