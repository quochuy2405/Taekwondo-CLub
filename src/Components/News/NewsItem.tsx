import React from 'react'
import { Link } from 'react-router-dom'
import date from '../../Image/date.png'
import destination from '../../Image/location.png'
import user from '../../Image/user.png'
import './NewsItem.scss'
import Tooltip from '@mui/material/Tooltip'
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
        <div className="num-seen">
          <div className="icon">
            <Tooltip title={`${new Date(Date.now())}`}>
              <img src={date} alt="date" />
            </Tooltip>
          </div>
          <div className="icon">
            <Tooltip title={`Krông pa`}>
              <img src={destination} alt="destination" />
            </Tooltip>
          </div>
          <div className="icon">
            <Tooltip title={`Bùi Quốc Huy`}>
              <img src={user} alt="destination" />
            </Tooltip>
          </div>
        </div>
        <div className="content-news">
          <p className="title-news">{news.title}</p>

          <p className="description-news">{news.description}</p>
        </div>{' '}
      </Link>
    </div>
  )
}

export default NewsItem
