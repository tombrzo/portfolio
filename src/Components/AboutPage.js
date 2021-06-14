import React from 'react';
import '../Styles/AboutPage.css';
import Back from './Back';

const AboutPage = () => {
  return (
    <>
      <div className='about__container'>
        <div className='about__title-wrapper'>
          <Back />
          <a href='#down' className='about__down'><h2 className='about__title'>everything is possible !</h2></a>
        </div>
        <div className='about__content_wrapper'>
          <div className='about__content_text'>
            <span id='down'><h4 className='about__content_subtitle'>About</h4></span>
            <p className='about__content_sentence-first'>Hi, I’m Tom. I’m naturally curious about the world,
						and constantly work on improving my professional knowledge.
            </p>
            <p className='about__content_sentence'>
							Skills can be taught, personality is is the sum
							of experiences and self-development.
							I enjoy learning, challenging myself and doing interesting things.
            </p>
            <p className='about__content_sentence'>
							Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more than
							willing to follow my fascinations wherever they take me. I’m never satisfied just to come up with
							ideas. Instead I  need to act on them. My abundant energy fuels me in the pursuit of many interests,
							hobbies, areas of study. I’m a fast learner, able to pick up new skills and roles with a relative ease.
            </p>
            <p className='about__content_sentence'>
							For many years I used to work in the tourism industry organizing business trips and flights.
							I’ve worked with people for people.
            </p>
            <p className='about__content_sentence'>
						Currently, my goal is to find a job that is going to give me an opportunity to deepen and improve
						already acquired programming skills and to engage in challenging and creative projects.
            </p>
            <a href='./img/CV.pdf' className='resume' target='_blank' rel="noreferrer">My resume <span>(pdf 89 KB )</span></a>
            <h4 className='about__content_subtitle'>Education</h4>
            <div className='edu__pictures'>
              <a href='http://etnologia.amu.edu.pl/' target='_blank' rel="noreferrer"><img className='edu__logo' src='./img/uam.jpg' alt='' /></a>
              <div className='edu__logo_description'>
                <h4>Adam Mickiewicz University in Poznań</h4>
                <p >Institute of Anthropology and Ethnology</p>
              </div>
            </div>
            <div className='edu__pictures'>
              <a href='https://energetyk.edu.pl/' target='_blank' rel="noreferrer"><img className='edu__logo edu__tec' src='./img/te.jpg' alt='' /></a>
              <div className='edu__logo_description'>
                <h4>Technical School of Energy in Poznań</h4>
              </div>
            </div>
            <h4 className='about__content_subtitle'>Skills</h4>
            <div className='skills-logos'>
              <img className='skills__logo' src='./img/html.png' alt='' />
              <img className='skills__logo' src='./img/css3.png' alt='' />
              <img className='skills__logo' src='./img/js.png' alt='' />
              <img className='skills__logo' src='./img/react_logo.png' alt='' />
              <img className='skills__logo' src='./img/git.jpg' alt='' />
            </div>
          </div>
          <div className='end_line'></div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;