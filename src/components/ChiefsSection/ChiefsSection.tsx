import React from 'react';
import { ChiefsCards } from '../ChiefsCards/ChiefsCards';

export const ChiefsSection = () => {
  const chiefs = [
    {
      name: 'Fabian Herbert',
      img:'./img/chief-cook-img/cook_1.jpg',
      recipiesCount: 10,
      cuisine: 'Ukranian',
    },
    {
      name: 'Russell Kennedy',
      img:'./img/chief-cook-img/cook_2.jpg',
      recipiesCount: 2,
      cuisine: 'Ukranian',
    },
    {
      name: 'Fletcher Hammond',
      img:'./img/chief-cook-img/cook_3.jpg',
      recipiesCount: 13,
      cuisine: 'Ukranian',
    },
    {
      name: 'Amir Moore',
      img:'./img/chief-cook-img/cook_4.jpg',
      recipiesCount: 6,
      cuisine: 'Ukranian',
    },
    {
      name: 'Muhammed Holland',
      img:'./img/chief-cook-img/cook_5.jpg',
      recipiesCount: 18,
      cuisine: 'Ukranian',
    },
    {
      name: 'Owain Cooper',
      img:'./img/chief-cook-img/cook_6.jpg',
      recipiesCount: 3,
      cuisine: 'Ukranian',
    },
    {
      name: 'Howard Dawson',
      img:'./img/chief-cook-img/cook_7.jpg',
      recipiesCount: 5,
      cuisine: 'Ukranian',
    },
    {
      name: 'Julia Holt',
      img:'./img/chief-cook-img/cook_8.jpg',
      recipiesCount: 8,
      cuisine: 'Ukranian',
    },
    {
      name: 'Zakariya Khan',
      img:'./img/chief-cook-img/cook_9.jpg',
      recipiesCount: 12,
      cuisine: 'Ukranian',
    },
  ]
  return (
    <div className="chief-section">
      <h2 className="chief-section__title">
        Наші найкращі кухарі
      </h2>
      <div className="chief-section__container">
        {chiefs.map(chief => (
          <ChiefsCards key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  )
};