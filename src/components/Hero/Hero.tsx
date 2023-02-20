import React from 'react';
import  { HeroGallery } from '../HeroGallery/HeroGallery';

interface Dishes{
    dishes: string[],
}

export const Hero: React.FC<Dishes> = ({dishes}) => {
    return (
        <div className='hero'>
            <div className='hero__column'>
                <h1 className='hero__title'>Для чого наш додаток</h1>
                <p className='hero__about-us'>
                    За подомогою цього додатку ти зможеш створити власні рецепти, і не загубиш їх в Інстаграмі, або інших соціальних мережах.
                </p>
                <p className='hero__about-us'>Це дозволить тобі позбутись старої бабусиної книжки, і завжди мати під рукою необхідний рецепт.</p>
                <button className='hero__btn'>Переглянути зараз</button>
            </div>
            <div className='hero__column gallery'>
                {dishes.map((src, index: number) => {
                    return <HeroGallery  imgSrc={src} pt={'90%'} key={index}/>
                })}
            </div>
        </div>
    )
}