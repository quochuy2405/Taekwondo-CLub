import React from 'react'
import Logo from '../../Image/logo.png'
import gmail from '../../Icon/gmail.png'
import fanpage from '../../Icon/facebook.png'
import zalo from '../../Icon/zalo.png'
import './Footer.scss'
import copyright from '../../Icon/copyright.png'
function Footer() {
  return (
    <div className="footer">
      <div className="box-footer">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="contain-link">
          <ul className="list-none list-social">
            <li>
              {' '}
              <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRwPxWkwfDMrbqSRKHWwQHMRlgmgxHvqwBlmpTkRhDBJDZQJXLwqQwzMmmdDDdnFQWWmpjGh">
                <span>
                  <img src={gmail} alt="Email" className="icon-footer" />
                </span>
                <p className="text-icon">nguyenhuutuantkd@gmail.com</p>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Taekwondo-Kr%C3%B4ng-Pa-alpha-105670594988534">
                <span>
                  <img src={fanpage} alt="Fanpage" className="icon-footer" />
                </span>
                <p className="text-icon">Taekwondo Krông Pa</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img src={zalo} alt="Zalo" className="icon-footer" />
                </span>
                <p className="text-icon">Nguyễn Hữu Tuấn</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="post-recent">
          <ul className="list-none">
            <li>
              {' '}
              <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRwPxWkwfDMrbqSRKHWwQHMRlgmgxHvqwBlmpTkRhDBJDZQJXLwqQwzMmmdDDdnFQWWmpjGh">
                <p>Địa chỉ :</p>
                <p>Nhà văn hóa thông tin, Thị trấn Phú Túc</p>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Taekwondo-Kr%C3%B4ng-Pa-alpha-105670594988534">
                <span>Thời gian: 17h30 - 19h30</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Thứ 2 - Thứ 4 - Thứ 6 (Hàng tuần)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-copyright">
        <p className="icon-copyright">
          <img src={copyright} alt="copyright" />
        </p>
        <p>2022 HuyPui</p>
      </div>
    </div>
  )
}

export default Footer
