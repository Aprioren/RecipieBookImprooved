import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className='footer container'>
      <div className="footer-section">
        <a href="/" className="label">
          Recipie b<span className='label-span'>oo</span>k.com
        </a>
        <p className='footer-info'>Recipie book це місце де ти можеш вільно створювати, зберігати, і знаходити рецепти
          для того щоб порадувати сім'ю і знайомих. Експерементуй, отримуй позитивні відгуки, ділись
          і будь собою з Recipie book.
        </p>
        <p className="footer__rights">&copy; 2023 | All Rights reserved</p>
      </div>
      <div className="footer-contacts">
        <p className="contacts">
          Contact us
        </p>
        <p className='footer-number'>
          +38068-778-78-67
        </p>
        <p className='footer-email'>
          reecipiebook@online.ua
        </p>
        <p className='footer-street'>
          вулиця Петра Сагайдачного, 21, Київ, 04070
        </p>
      </div>
      <div className="footer-socials">
        <p className="socials">Socials</p>
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
    </footer>
  )
}