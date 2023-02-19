import React from 'react';

export const HeroGallery = ({imgSrc, pt}) => {
  return (
    <div className='hero-gallery' style={{paddingTop: pt}}>
      <img className='hero-gallery__img'src={imgSrc} alt="" />
    </div>
  )
}