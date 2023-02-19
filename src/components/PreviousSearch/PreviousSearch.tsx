import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const PreviousSearch = ({title}) => {
  const searches = ['піцца', 'хліб', 'суші', "корейська морква", "салат-латук", "цезар", "пироги"];
  return (
    <div>
      <div className="previous-search">
        <h2 className="previous-search__title">
          { title }
        </h2>
        <div className="previous-search__container">
          {searches.map((search, index) => (
            <div className='search-item' key={index}>
              {search}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input className='search-box__input' type="text" placeholder='Шукати...'/>
          <button className='search-box__btn'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
      </div>
    </div>
  )
}
