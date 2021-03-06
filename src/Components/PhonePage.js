import React, { useState } from 'react';
import '../Styles/PhonePage.css';

const Phone = () => {

  const [phoneNumber, setPhoneNumber] = useState('');

  const handleClick = () => {
    if (phoneNumber === '') {
      setPhoneNumber('+48 53 53 33 292');
    } else {
      setPhoneNumber('');
    }
  };
  return (
    <>
      <img className='link__icon' src='./img/phone.png' alt='' onClick={handleClick} />
      <p className='number'>{phoneNumber}</p>
    </>

  );
};

export default Phone;