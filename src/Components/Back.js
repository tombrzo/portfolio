import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Back = () => {

  const[color, setColor] = useState('white');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () =>
      window.removeEventListener('scroll', handleScroll);
  },[]);

  const handleScroll = () => { 
    if(window.pageYOffset  > 580 ){
      setColor('black');
    }else if(window.pageYOffset <= 580){
      setColor('white');
    }
  };

  return(
    <Link className='back-home' to="/" style={{color:color}} ></Link>
  );
};
 
export default Back;
