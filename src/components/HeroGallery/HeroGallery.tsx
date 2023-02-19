import React from 'react';

export const HeroGallery = ({imgSrc, pt}) => {
  return (
    <div className='hero-gallery' style={{paddingTop: pt}}>
      <img className='hero-gallery__img' src={`${process.env.PUBLIC_URL}${imgSrc}`} alt="recipie"/>
    </div>
  )
}