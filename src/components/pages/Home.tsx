import React from 'react';
import { Hero } from '../Hero/Hero';
import { ImprooveSkils } from '../ImprooveSkils/ImprooveSkils';
import { QuoteSection } from '../QuoteSection/QuoteSection';
import { ChiefsSection } from '../ChiefsSection/ChiefsSection';


export const Home:React.FC = () => {
  return (
    <>
    <Hero dishes={
      [
        '/img/hero-gallery/canape.jpg',
        '/img/hero-gallery/pancakes.jpg',
        '/img/hero-gallery/pancakes-strawberry.jpg',
        '/img/hero-gallery/pasta-chease.jpg',
        '/img/hero-gallery/pasta.jpg',
        '/img/hero-gallery/platter.jpg',
        '/img/hero-gallery/salmon.jpg',
        '/img/hero-gallery/vegetables.jpg',
        '/img/hero-gallery/waffle-hearts.jpg',
    ]
    }/>
    <ImprooveSkils skills={
      [
        "Дізнавайся нові рецепти",
        "Експерементуй з їжею",
        "Створюй свої власні рецепти",
        "Ніколи не загубиш серед лахміття",
        "Дізнавайся секрети приготувань",
        "Оцінюй рецепти"
      ]
    }/>
    <QuoteSection />
    <ChiefsSection chiefs={
      [
        {
          name: 'Fabian Herbert',
          img:`/img/chief-cook-img/cook_1.jpg`,
          recipiesCount: 10,
          cuisine: 'Ukranian',
        },
        {
          name: 'Russell Kennedy',
          img:`/img/chief-cook-img/cook_2.jpg`,
          recipiesCount: 2,
          cuisine: 'Ukranian',
        },
        {
          name: 'Fletcher Hammond',
          img:`/img/chief-cook-img/cook_3.jpg`,
          recipiesCount: 13,
          cuisine: 'Ukranian',
        },
        {
          name: 'Amir Moore',
          img:`/img/chief-cook-img/cook_4.jpg`,
          recipiesCount: 6,
          cuisine: 'Ukranian',
        },
        {
          name: 'Muhammed Holland',
          img:`/img/chief-cook-img/cook_5.jpg`,
          recipiesCount: 18,
          cuisine: 'Ukranian',
        },
        {
          name: 'Owain Cooper',
          img:`/img/chief-cook-img/cook_6.jpg`,
          recipiesCount: 3,
          cuisine: 'Ukranian',
        },
        {
          name: 'Howard Dawson',
          img:`/img/chief-cook-img/cook_7.jpg`,
          recipiesCount: 5,
          cuisine: 'Ukranian',
        },
        {
          name: 'Julia Holt',
          img:`/img/chief-cook-img/cook_8.jpg`,
          recipiesCount: 8,
          cuisine: 'Ukranian',
        },
        {
          name: 'Zakariya Khan',
          img:`/img/chief-cook-img/cook_9.jpg`,
          recipiesCount: 12,
          cuisine: 'Ukranian',
        },
      ]
    } />
    </>
  )
}