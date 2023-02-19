import React from 'react';
import  { HeroGallery } from '../HeroGallery/HeroGallery';
export const Hero = () => {
    const images = [
        '/img/hero-gallery/canape.jpg',
        '/img/hero-gallery/pancakes.jpg',
        '/img/hero-gallery/pancakes-strawberry.jpg',
        '/img/hero-gallery/pasta-chease.jpg',
        '/img/hero-gallery/pasta.jpg',
        '/img/hero-gallery/platter.jpg',
        '/img/hero-gallery/salmon.jpg',
        '/img/hero-gallery/vegetables.jpg',
        '/img/hero-gallery/waffle-hearts.jpg',
    ];

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
                {images.map((src, index: number) => {
                    return <HeroGallery  imgSrc={src} pt={'90%'} key={index}/>
                })}
            </div>
        </div>
    )
}