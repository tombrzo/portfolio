import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ContactPage.css';
import PhonePage from './PhonePage.js';

const ContactPage = () => {
  return (

    <div className='contact-container'>
      <div className='contact__title_wrapper'>
        <Link className='back-to-home' to="/"> </Link>
        <a href='#down' className='contact__down'><h2 className='contact__title'>Let's do something awesome !</h2></a>
      </div>
      <div className='contact__content'>
        <span id='down'><h4 className='contact__content_subtitle'> Contact </h4></span>
        <p className='contact__content_text'>I'm seeking opportunities to cooperate with
				modern companies but not only this...
				To the table, I want to bring my great team work experience and to solve business problems together.
        </p>
        <p className='contact__content_text'>If that all sounds right, please contact me : </p>
        <div className='links'>
          <PhonePage />
          <a className='link' href="mailto: tombrzoza50@gmail.com " target='_blank' rel='noopener noreferrer'>
            <img className='link__icon' src='./img/gmail-icon.png' alt='' />
          </a>
          <a className='link' href="mailto: tombrzoza@yahoo.co.uk " target='_blank' rel='noopener noreferrer'>
            <img className='link__icon' src='./img/yahoo_mail.png' alt='' />
          </a>
          <a className='link' href="https://www.instagram.com/tombrzoza/" target='_blank' rel='noopener noreferrer'>
            <img className='link__icon' src='./img/instagram.jpg' alt='' />
          </a>
          <a className='link' href="https://www.linkedin.com/in/tomasz-brzoza-245399175/" target='_blank' rel='noopener noreferrer'>
            <img className='link__icon' src='./img/linkedin_icon.png' alt='' />
          </a>
          <a className='link' href="https://www.facebook.com/tomasz.brzoza.50/" target='_blank' rel='noopener noreferrer'>
            <img className='link__icon' src='./img/facebook.png' alt='' />
          </a>
          <a className='link' href="https://github.com/tombrzo/" target='_blank' rel='noopener noreferrer'>
            <img className='link__icon' src='./img/github.png' alt='' />
          </a>
        </div>
      </div>
      <div className='end'></div>
    </div>
  );
};

export default ContactPage;
