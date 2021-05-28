import React from 'react';
import '../Styles/HomePage.css';
import Navigation from '../Layout/Navigation';
import pic33 from '../Images/pic33.png';

const HomePage = () => {
  return (
    <>
      <div className='home__container animate'>
        <div className='home__nav'>
          <Navigation />
        </div>
        <img className='home__img' src={pic33} alt='' />
      </div>
    </>
  );
};

export default HomePage;