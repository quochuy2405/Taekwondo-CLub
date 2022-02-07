import React, { useEffect } from 'react'
import './Header.scss'
import Logo from '../../Image/logo.png'

function Header() {
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector<HTMLDivElement>('.header')
      if (header) {
        if (window.scrollY <= 0 && window.scrollY < 200) {
          header.classList?.remove('scrooll')
        } else {
          header.classList?.add('scrooll')
        }
      }
    }
  }, [])
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="taekwondokrp" />
      </div>
      <div className="nav-header">
        <ul className="list-none list-nav">
          <li className="router-nav active">
            <p>Trang chủ</p>
          </li>
          <li className="router-nav">
            <p>Tin tức</p>
          </li>
          <li className="router-nav">
            <p>Giới thiệu</p>
          </li>
          <li className="router-nav">
            <p>Thành tích</p>
          </li>
          <li className="router-nav">
            <p>Các điểm trường CLB TAEKWONDO KRÔNG PA</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
