import React, { useCallback, useEffect } from 'react'
import ReviewNews from '../ReviewNews/ReviewNews'
import './SliderNews.scss'
function SliderNews() {
  const windowWidth = useCallback(() => {
    console.log(windowWidth)
    return window.innerWidth
  }, [window.innerWidth])

  useEffect(() => {
    const listSliders = document.querySelector<HTMLDivElement>('.slider-news .list-sliders')
    const listLenght = document.querySelectorAll<HTMLDivElement>(
      '.slider-news .slider-item'
    )?.length
    let count = 1
    const timeOut = setInterval(() => {
      count = count > Math.floor(listLenght / 3) ? 0 : count
      if (listSliders) listSliders.style.transform = `translateX(-${33.333 * count}vw)`
      count++
    }, 3000)

    return () => {
      clearInterval(timeOut)
    }
  }, [])
  return (
    <>
      {' '}
      <div className="slider-news">
        <p className="title-name" style={{ color: 'white', fontWeight: '600' }}>
          Tuyên dương thành tích
        </p>
        <div className="list-sliders">
          {[...Array(6)].map((item, index) => (
            <div key={index} className="slider-item">
              <ReviewNews />
            </div>
          ))}
        </div>
      </div>{' '}
    </>
  )
}

export default SliderNews
