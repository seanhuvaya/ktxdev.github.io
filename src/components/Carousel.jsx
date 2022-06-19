import React, { createRef, useState } from 'react'

const Carousel = ({ images, title, className }) => {

  const [currentImage, setCurrentImage] = useState(0);

  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {})

  const scrollToImage = i => {
    setCurrentImage(i);

    refs[i]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  }

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  }

  const prevImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  }

  const arrowStyle = 'absolute text-white bg-black rounded-full flex items-center justify-center z-10'

  const sliderControl = isLeft => (
    <button
      type='button'
      onClick={isLeft ? prevImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'} mx-2`}
      style={{ top: '40%' }}
    >
      <span role='img' aria-label={`Arrow ${isLeft ? 'left' : 'right'}`} >
        {isLeft ? <svg className='w-4 h-4 md:w-7 md:h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
          <rect width="20" height="20" className="fill-gray-800" fill-opacity="0.01" />
          <path d="M31 36L19 24L31 12" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg> : <svg className='w-4 h-4 md:w-7 md:h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" fill="black" fill-opacity="0.01" />
          <path d="M19 12L31 24L19 36" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>}
      </span>
    </button>
  )

  return (
    <div className={`${className} flex justify-center w-full items-center`}>
      <div className='relative w-full'>
        <div className='carousel'>
          {sliderControl(true)}
          {
            images.map((img, i) => (
              <div className='w-full flex-shrink-0' key={img} ref={refs[i]} >
                <img src={img} className="w-full object-contain" alt={title} />
              </div>
            ))
          }
          {sliderControl()}
        </div>
      </div>
    </div>
  )
}

export default Carousel