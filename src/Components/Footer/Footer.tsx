import React from 'react'
import Logo from '../../Image/logo.png'
import gmail from '../../Icon/gmail.png'
import facebook from '../../Icon/facebook.png'
import fanpage from '../../Icon/friends.png'
import zalo from '../../Icon/zalo.png'
import './Footer.scss'
function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="contain-link">
        <ul className="list-none list-social">
          <li>
            <a href="https://www.facebook.com/nguyenhuutuantkd">
              <span>
                <img src={facebook} alt="Facebook" className="icon-footer" />
              </span>
              <p className="text-icon">Facebook</p>
            </a>
          </li>
          <li>
            {' '}
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRwPxWkwfDMrbqSRKHWwQHMRlgmgxHvqwBlmpTkRhDBJDZQJXLwqQwzMmmdDDdnFQWWmpjGh">
              <span>
                <img src={gmail} alt="Email" className="icon-footer" />
              </span>
              <p className="text-icon">Email</p>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Taekwondo-Kr%C3%B4ng-Pa-alpha-105670594988534">
              <span>
                <img src={fanpage} alt="Fanpage" className="icon-footer" />
              </span>
              <p className="text-icon">Fanpage</p>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <img src={zalo} alt="Zalo" className="icon-footer" />
              </span>
              <p className="text-icon">Zalo</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
