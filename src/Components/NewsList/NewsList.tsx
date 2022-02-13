import React from 'react'
import { listNews } from '../../App/constant'
import NewsItem from '../News/NewsItem'
import './NewsList.scss'
function NewsList({ num }: { num?: number }) {
  return (
    <div className="list-news">
      {listNews.slice(0, num).map((x, i) => (
        <NewsItem news={x} key={i} />
      ))}
    </div>
  )
}

export default NewsList
