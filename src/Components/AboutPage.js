import React from 'react';
import '../Styles/AboutPage.css';
import {Link} from 'react-router-dom';

const AboutPage = () => {
  return ( 
    <>
    <div className='about__container'>
     
      <Link className='back-to-home' to="/"> </Link>

      <div className='about__title-wrapper'>
      <h2 className='about__title'>everything is possible</h2>
      </div>

      <div className='about__content'></div>



    </div>
    </>
   );
}
 
export default AboutPage;