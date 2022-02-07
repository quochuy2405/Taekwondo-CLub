import React, { useEffect } from 'react'
import './Slider.scss'
const listContent = [
  {
    img: 'https://images.pexels.com/photos/7045555/pexels-photo-7045555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1050&w=1040',
    title: 'Taekwondo  Phú Túc',
  },
  {
    img: 'https://images.pexels.com/photos/7045669/pexels-photo-7045669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Taekwondo  Chư Đrăng',
  },
  {
    img: 'https://images.pexels.com/photos/7045669/pexels-photo-7045669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Đội tuyển TAEKWONDO Krông Pa',
  },
]
function Slider({ image, title }: { image: string; title: string }) {
  return (
    <div className="slider">
      <img src={image} alt="img" />
      <div className="content">
        <p>{title}</p>
      </div>
    </div>
  )
}
function Sliders() {
  useEffect(() => {
    let count = 0
    const timers = setInterval(() => {
      const sliders = document.querySelector<HTMLDivElement>('.sliders')
      count++
      count = count > 2 ? 0 : count
      if (sliders) sliders.style.transform = `translateX(-${100 * (count / 3)}%)`
    }, 4000)
    return () => clearInterval(timers)
  }, [])
  return (
    <div className="box-sliders">
      <div className="sliders">
        {listContent?.map((item, index) => (
          <Slider title={item.title} image={item.img} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Sliders
