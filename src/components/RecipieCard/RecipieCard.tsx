import React from 'react';
import { HeroGallery } from '../HeroGallery/HeroGallery'

export const RecipieCard = ({recipie}) => {
  return (
    <div className="recipie-card">
      <HeroGallery imgSrc={recipie.image} pt={'65%'} />
      <div className='recipie-card-info'>
        <img className='author-img' src={`${process.env.PUBLIC_URL}${recipie.authorImg}`} alt="cook" />
        <p className='recipie-card__title'>{recipie.title}</p>
        <p className="recipie-card__description">
          {recipie.description}
        </p>
        <a href="#!" className="recipie-card__link">
          Переглянути рецепт
        </a>
      </div>
    </div>
  )
};