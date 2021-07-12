import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Back = () => {

  const [color, setColor] = useState('darkblue');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setColor('black');
    } else if (window.pageYOffset <= 520) {
      setColor('darkblue');
    }
  };

  return (
    <Link className='back-home' to="/" style={{ color: color }} ></Link>
  );
};

export default Back;
