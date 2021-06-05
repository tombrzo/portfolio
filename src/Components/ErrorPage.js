import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='errorPage__container'>
      <Link className='back-to-home' to="/"> </Link>
      <div className='errorPage__content'>
        <img className='clangers' src='./img/clangers.gif' alt='clangers' />
        <div className='errorPage__content_title'><h2>Sorry, we couldn't find that page</h2></div>
        <div className='errorPage__content_subtitle'><h4>Check the page address or click on link below</h4></div>
        <Link className='errorPage__content_link' to='/'>Back to HomePage</Link>
      </div>

    </div>
  );
};

export default ErrorPage;