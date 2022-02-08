import React, { useEffect } from 'react'
import './Header.scss'
import Logo from '../../Image/logo.png'
import Go from '../../Image/headfig.gif'
import { NavLink } from 'react-router-dom'

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
      <img src={Go} alt="taekwondo" className='takegif' />
      <div className="logo">
        <img src={Logo} alt="taekwondokrp" />
      </div>
      <div className="nav-header">
        <ul className="list-none list-nav">
          <li className="router-nav active">
            <NavLink to={'/'}>
              <p>Trang chủ</p>
            </NavLink>
          </li>
          <li className="router-nav">
            <NavLink to={'/news'}>
              <p>Tin tức</p>
            </NavLink>
          </li>
          <li className="router-nav">
            <NavLink to={'/introduce'}>
              <p>Giới thiệu</p>
            </NavLink>
          </li>
          <li className="router-nav">
            <NavLink to={'/gratulation'}>
              <p>Thành tích</p>
            </NavLink>
          </li>
          <li className="router-nav">
            <NavLink to={'/point'}>
              <p>Các điểm trường CLB TAEKWONDO KRÔNG PA</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
