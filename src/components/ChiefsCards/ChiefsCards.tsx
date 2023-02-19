import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface IChief {
  name: string;
  img: string;
  recipiesCount: number;
  cuisine: string;
}

export const ChiefsCards = ({chief}: {chief:IChief}) => {

  return (
    <div className="chiefs-cards">
      <div>
        <img className='chiefs-cards__img' src={`${process.env.PUBLIC_URL}${chief.img}`} alt={chief.name} />
      </div>
      <div className="chief-cards__info">
        <h3 className="chiefs-cards__name">{ chief.name }</h3>
        <p className="chiefs-cards__recipie">Recipies count: <b>{chief.recipiesCount}</b></p>
        <p className="chiefs-cards__cuisine">Cuisine: <b>{chief.cuisine}</b></p>
        <div className="chiefs-cards__icons">
          <a  href='https://www.facebook.com/' className='chiefs-cards__facebook'>
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href="https://www.instagram.com/" className='chiefs-cards__instagram'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/" className='chiefs-cards__twitter'>
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
        </div>
      </div>
    </div>
    )
}