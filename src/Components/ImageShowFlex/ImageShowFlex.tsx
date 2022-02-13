import React from 'react'
import twitter from '../../Icon/twitter.png'
import facebook from '../../Icon/facebook.png'
import instagram from '../../Icon/instagram.png'
import './ImageShowFlex.scss'
const listInfo = [
  {
    image:
      'https://images.pexels.com/photos/7045431/pexels-photo-7045431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Quốc Huy',
    description:
      'Adipisci dolorem porro magnam eligendi reiciendis voluptatibus suscipit illo corporis necessitatibus odio.',
  },
  {
    image:
      'https://images.pexels.com/photos/7045583/pexels-photo-7045583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Quốc Huy',
    description:
      'Adipisci dolorem porro magnam eligendi reiciendis voluptatibus suscipit illo corporis necessitatibus odio.',
  },
  {
    image:
      'https://images.pexels.com/photos/7045719/pexels-photo-7045719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Quốc Huy',
    description:
      'Adipisci dolorem porro magnam eligendi reiciendis voluptatibus suscipit illo corporis necessitatibus odio.',
  },
  {
    image:
      'https://images.pexels.com/photos/7045728/pexels-photo-7045728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Quốc Huy',
    description:
      'Adipisci dolorem porro magnam eligendi reiciendis voluptatibus suscipit illo corporis necessitatibus odio.',
  },
]
interface InfoUser {
  image: string
  name: string
  description: string
}
function ItemImgFlex({ image, name, description }: InfoUser) {
  return (
    <div className="image-item--flex">
      <img src={image} alt="" />
      <div className="info-item">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <div className="list-icon-contact">
          <ul>
            <li>
              <img src={twitter} alt="" className="icon-contact" />
            </li>
            <li>
              <img src={facebook} alt="" className="icon-contact" />
            </li>
            <li>
              <img src={instagram} alt="" className="icon-contact" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
function ImageShowFlex() {
  return (
    <div className="image-show--flex">
      <div className="list-img">
        {listInfo.map((item, index) => (
          <ItemImgFlex {...item} />
        ))}
      </div>
    </div>
  )
}

export default ImageShowFlex
