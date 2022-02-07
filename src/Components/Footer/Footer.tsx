import React from 'react'
import Logo from '../../Image/logo.png'
import './Footer.scss'
function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="contain-link">
        <ul className="list-none">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            {' '}
            <i className="far fa-plus-square"></i>
            <a href="">Email</a>
          </li>
          <li>
            <a href="">Fanpage</a>
          </li>
          <li>
            <a href="">Zalo</a>
          </li>
          <li>
            <a href="">Trụ sở chính</a>
          </li>
          <li>
            <a href="">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
