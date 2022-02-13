import React, { useCallback, useEffect, useRef, useState } from 'react'
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
const listNumber = [1211, 13, 15, 21]
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
  const handleCounter = useCallback(() => {
    const listNum = document.querySelectorAll<HTMLDivElement>('.num')
    if (listNum) {
      listNum.forEach((item) => {
        const update = () => {
          const target = Number(item.getAttribute('data-target'))
          let numCurrent = Number(item.textContent)

          if (target > numCurrent) {
            numCurrent += Math.ceil(target / 200)
            item.innerHTML = String(numCurrent)
            setTimeout(update, 5)
          }
        }
        update()
      })
    }
  }, [])

  // useEffect(() => {
  //   window.addEventListener('scroll', (e: any) => {
  //     const topY = document.querySelector<HTMLDivElement>('.list-details')
  //     console.log('ok')
  //     if (topY)
  //       if (window.scrollY + 600 >= topY.offsetTop) {
  //         handleCounter()
  //       }
  //   })
  //   return () => {
  //     handleCounter()
  //   }
  // }, [])

  useEffect(() => {
    const handleScroll = () => {
      const topY = document.querySelector<HTMLDivElement>('.list-details')
      console.log('ok')
      if (topY)
        if (window.scrollY + 600 >= topY.offsetTop) {
          handleCounter()
          window.removeEventListener('scroll', handleScroll, true)
        }
    }

    window.addEventListener('scroll', handleScroll, true)
    return () => {
      handleCounter()
    }
  }, [])
  return (
    <div className="image-show--flex">
      <div className="list-img">
        {listInfo.map((item, index) => (
          <ItemImgFlex key={index} {...item} />
        ))}
      </div>
      <div className="list-details">
        <div className="item-details">
          <p className="num" data-target={listNumber[0]}>
            {0}
          </p>
          <div className="description">Pupil.</div>
        </div>
        <div className="item-details">
          <p className="num" data-target={listNumber[1]}>
            {0}
          </p>
          <div className="description">Medals.</div>
        </div>
        <div className="item-details">
          <p className="num" data-target={listNumber[2]}>
            {0}
          </p>
          <div className="description">Years Ago.</div>
        </div>
        <div className="item-details">
          <p className="num" data-target={listNumber[3]}>
            {0}
          </p>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageShowFlex
