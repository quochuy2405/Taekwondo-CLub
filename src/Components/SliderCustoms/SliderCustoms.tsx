import React, { useEffect } from 'react'
import './SliderCustoms.scss'
function SliderCustoms() {
  useEffect(() => {
    const listImage = document.querySelectorAll<HTMLImageElement>('.img-slider')
    let count = listImage.length - 1

    const time = setInterval(() => {
      count = count < 0 ? listImage.length - 1 : count
      if (listImage) {
        const activeImage = document.querySelector<any>('.img-slider.active')
        const top = activeImage.offsetTop
        const left = activeImage.offsetTop
        let topPv = listImage[count].offsetTop
        let leftPv = listImage[count].offsetLeft
        activeImage.style.marginTop = topPv + 'px'
        activeImage.style.marginLeft = leftPv + 'px'
        activeImage.style.zIndex = `${count* 10}`
        listImage[count].style.marginTop = top + 'px'
        listImage[count].style.marginLeft = left + 'px'

        console.log(count * 100)
        activeImage?.classList.remove('active')
        listImage[count].classList.add('active')
      }
      count--
    }, 2000)

    return () => clearInterval(time)
  }, [])
  return (
    <div className="slider-customes">
      <img
        className="img-slider"
        src={
          'https://images.pexels.com/photos/7045495/pexels-photo-7045495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
        alt=""
      />
      <img
        className="img-slider"
        src={
          'https://images.pexels.com/photos/7045377/pexels-photo-7045377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        alt=""
      />
      <img
        className="img-slider"
        src={
          'https://images.pexels.com/photos/7045663/pexels-photo-7045663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        alt=""
      />
      <img
        className="img-slider"
        src={
          'https://images.pexels.com/photos/8038026/pexels-photo-8038026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        alt=""
      />
      <img
        className="img-slider active"
        src={
          'https://images.pexels.com/photos/8611365/pexels-photo-8611365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        alt=""
      />
    </div>
  )
}

export default SliderCustoms
