import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
  appInfo: string;
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
}

export const Footer:React.FC<FooterProps> = ({
  appInfo,
  facebookLink,
  instagramLink,
  twitterLink,
}) => {
  return (
    <footer className='footer container'>
      <div className="footer-section">
        <a href="/" className="label">
          Recipie b<span className='label-span'>oo</span>k.com
        </a>
        <p className='footer-info'>
          {appInfo}
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
        <a  href={facebookLink} className='chiefs-cards__facebook'>
          <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a href={instagramLink} className='chiefs-cards__instagram'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={twitterLink} className='chiefs-cards__twitter'>
          <FontAwesomeIcon icon={faTwitter}/>
        </a>
      </div>
    </footer>
  )
}