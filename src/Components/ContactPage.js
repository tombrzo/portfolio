import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/ContactPage.css';
import Phone from './Phone.js';

const ContactPage = () => {
  return ( 
    <>
    <div className='contact-container'>
      <Link className='back-to-home' to="/"> </Link>
      <div className='contact__title_wrapper'>
        <a href='#down' className='down'><h2 className='contact__title'>Let's do something awsome !</h2></a>
      </div>

      <div className='contact__content'>
        <span id='down'><h4 className='contact__content_subtitle'> Contact </h4></span>
        <p className='contact__content_text'>I'm seeking for opportunities to cooperate with 
          modern companies but not only this...
          I want to bring my grate experience in work with people and  for people
          to the table where we'll work together to solve real bussines problems.
        </p>
        <p className='contact__content_text'>If that all sounds right, please contact me : </p>
        <div className='links'>
        
          <a className='link' href="mailto: tombrzoza@yahoo.co.uk ">
            <img className='link__icon' src='./img/yahoo_mail.png' alt=''/>
          </a>
          
          <Phone />
          
          <a  className='link' href="mailto: tombrzoza50@gmail.com ">
            <img className='link__icon' src='./img/gmail-icon.png' alt=''/>
          </a>
          <a className='link' href="https://www.instagram.com/tombrzoza/" target='blank'>
            <img className='link__icon' src='./img/instagram.jpg' alt=''/>
          </a>
          <a className='link' href="https://www.linkedin.com/in/tomasz-brzoza-245399175/" target='blank'>
            <img className='link__icon' src='./img/linkedin_icon.png' alt=''/>
            </a>
          <a className='link' href="https://www.facebook.com/tomasz.brzoza.50/" target='blank'>
            <img className='link__icon' src='./img/facebook.png' alt=''/>
          </a>
          
        </div>
      </div> 
      


    </div>
    
 
    </>
   );
}
 
export default ContactPage;