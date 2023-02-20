import React from 'react';

interface IGallery{
  imgSrc: string,
  pt: string
}


export const HeroGallery:React.FC<IGallery> = ({imgSrc, pt}) => {
  return (
    <div className='hero-gallery' style={{paddingTop: pt}}>
      <img className='hero-gallery__img' src={`${process.env.PUBLIC_URL}${imgSrc}`} alt="recipie"/>
    </div>
  )
};