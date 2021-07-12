import React from 'react';
import '../Styles/HomePage.css';
import Navigation from '../Layout/Navigation';

const HomePage = () => {
  return (
    <div className='home__container animate'>
      <div className='home__nav'>
        <Navigation />
      </div>
    </div>
  );
};

export default HomePage;