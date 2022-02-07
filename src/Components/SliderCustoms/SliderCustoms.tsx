import React, { useEffect } from 'react'
import './SliderCustoms.scss'
const listSlider = [
  {
    img: 'https://images.pexels.com/photos/7045495/pexels-photo-7045495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    content: 'Đạt giải tại cuộc thi nào đó ?',
  },
  {
    img: 'https://images.pexels.com/photos/7045377/pexels-photo-7045377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    content: 'Đạt giải tại cuộc thi nào đó 1 ?',
  },
  {
    img: 'https://images.pexels.com/photos/7045663/pexels-photo-7045663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    content: 'Đạt giải tại cuộc thi nào đó 2 ?',
  },
  {
    img: 'https://images.pexels.com/photos/8038026/pexels-photo-8038026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    content: 'Đạt giải tại cuộc thi nào đó 3 ?',
  },
  {
    img: 'https://images.pexels.com/photos/8611365/pexels-photo-8611365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    content: 'Đạt giải tại cuộc thi nào đó 4 ?',
  },
]
function SliderCustoms() {
  useEffect(() => {
    const listImage = document.querySelectorAll<HTMLImageElement>('.img-slider')
    const listContent = document.querySelectorAll<HTMLImageElement>('.content-text')
    let count = listImage.length - 1

    const time = setInterval(() => {
      count = count < 0 ? listImage.length - 1 : count
      if (listImage) {
        const activeImage = document.querySelector<any>('.img-slider.active')
        const activeContent = document.querySelector<any>('.content-text.active')

        const top = activeImage.offsetTop
        const left = activeImage.offsetTop
        let topPv = listImage[count].offsetTop
        let leftPv = listImage[count].offsetLeft

        activeImage.style.marginTop = topPv + 'px'
        activeImage.style.marginLeft = leftPv + 'px'
        activeImage.style.zIndex = `${count * 10}`
        listImage[count].style.marginTop = top + 'px'
        listImage[count].style.marginLeft = left + 'px'

        activeContent?.classList.remove('active')
        listContent[count].classList.add('active')
        activeImage?.classList.remove('active')
        listImage[count].classList.add('active')
      }
      count--
    }, 3000)

    return () => clearInterval(time)
  }, [])
  return (
    <div className="slider-customes">
      <div className="list-img">
        {listSlider.map((item, index) => (
          <img
            key={index}
            className={`img-slider ${index === 4 && 'active'}`}
            src={item.img}
            alt=""
          />
        ))}
      </div>
      <div className="list-content">
        {listSlider.map((item, index) => (
          <div className="content-slider--custom" key={index}>
            <p className={`content-text ${index === 4 ? 'active' : ''}`}>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderCustoms
