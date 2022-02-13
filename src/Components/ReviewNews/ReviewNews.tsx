import React from 'react'
import './ReviewNews.scss'
import medal from '../../Image/gold-medal.png'
import { Link } from 'react-router-dom'
function ReviewNews() {
  return (
    <div className="review-news">
      <div className="avatar">
        <img
          src={
            'https://images.pexels.com/photos/6253295/pexels-photo-6253295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          alt=""
        />
      </div>

      <div className="content-news">
        <div className="name">
          <p>Bùi Quốc Huy</p>
        </div>
        <div className="mid-contend">
          <div className="medals">
            <img src={medal} alt="" />
          </div>
          <div className="text">
            <p>Đoạt huy chương vàng tại Giải vô địch quốc gia</p>
          </div>
        </div>
        <div className="view-more">
          <Link to="/">Xem thêm</Link>
        </div>
      </div>
    </div>
  )
}

export default ReviewNews
