import React from 'react';
import '../Styles/WorkPage.css';
import Back from './Back';

const WorkPage = () => {
  return (
    <>
      <div className='work__container'>
        <div className='work__title_wrapper'>
          <Back />
          <a href='#down' className='work__down'>
            <h2 className='work__title'>words are only</h2>
            <h2 className='work__title'>a shadow of deeds</h2>
          </a>
        </div>
        <div className='work__content_wrapper'>
          <div id='down'><h4 className='work__content_subtitle'>My Recent Work</h4></div>
          <p className='work__content_text'>Here are a few projects I've worked on recently</p>
          <div className='work__content_examples'>
            <div className='example'>
              <img className='example__picture' src='img/portfolio.png' alt='' />
              <a href='https://github.com/tombrzo/potfolio.git' target='blank' className=''>
                <div className='overlay'>
                  <a href='https://tombrzo.github.io/portfolio/' target='blank' className='overlay__text'>Portfolio</a>
                  <a href='https://github.com/tombrzo/potfolio.git' target='blank' className='overlay__sentence' >See code on GitHub</a>
                </div>
              </a>
            </div>
            <div className='example'>
              <img className='example__picture' src='img/clone.png' alt='' />
              <a href='https://github.com/tombrzo/facebook_clone' target='blank' >
                <div className='overlay'>
                  <a href='https://github.com/tombrzo/facebook_clone' target='blank' className='overlay__text'>Facebook-Clone</a>
                  <a href='https://github.com/tombrzo/facebook_clone' target='blank' className='overlay__sentence'>See code on GitHub</a>
                </div>
              </a>
            </div>
            <div className='example'>
              <img className='example__picture' src='img/travel.png' alt='' />
              <a href='https://github.com/tombrzo/places_to_go.git' target='blank' >
                <div className='overlay'>
                  <a href='https://github.com/tombrzo/places_to_go.git' target='blank' className='overlay__text'>Places to go</a>
                  <a href='https://github.com/tombrzo/places_to_go.git' target='blank' className='overlay__sentence'>See code on GitHub</a>
                </div>
              </a>
            </div>
            <div className='example'>
              <img className='example__picture' src='img/weather.png' alt='' />
              <a href='https://github.com/tombrzo/weatherApp.git' target='blank' >
                <div className='overlay'>
                  <a href='https://github.com/tombrzo/weatherApp.git' target='blank' className='overlay__text'>Weather App</a>
                  <a href='https://github.com/tombrzo/weatherApp.git' target='blank' className='overlay__sentence'>See code on GitHub</a>
                </div>
              </a>
            </div>
            <div className='example'>
              <img className='example__picture' src='img/landing_page.png' alt='' />
              <a href='https://github.com/tombrzo/landing_page.git' target='blank' >
                <div className='overlay'>
                  <a href='https://github.com/tombrzo/landing_page.git' target='blank' className='overlay__text'>AppLab-Landing Page</a>
                  <a href='https://github.com/tombrzo/landing_page.git' target='blank' className='overlay__sentence'>See code on GitHub</a>
                </div>
              </a>
            </div>
            <div className='example'>
              <img className='example__picture' src='img/notify.png' alt='' />
              <a href='https://github.com/tombrzo/notify' target='blank'>
                <div className='overlay'>
                  <a href='https://github.com/tombrzo/notify' target='blank' className='overlay__text'>Notify-Landing Page</a>
                  <a href='https://github.com/tombrzo/notify' target='blank' className='overlay__sentence'>See code on GitHub</a>
                </div>
              </a>
            </div>
          </div>
          <div className='work__end_line'></div>
        </div>
      </div>
    </>
  );
};

export default WorkPage;