import React from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


export const QuoteSection = () => {
  return (
    <div className='quote-section'>
      <p className='quote-text'> <FontAwesomeIcon className='quote-icon' icon={faQuoteLeft} />Рецепти не працюють, якщо ви не використовуєте своє серце. </p>
      <p className='quote-author'>- Ділан Джонс</p>
    </div>
  )
}