import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/WorkPage.css';

const WorkPage = () => {
  return ( 
    <>
    <div className='work__container'>
      <p>Work Page</p>
      <Link className='back-to-home' to="/"> </Link>
    </div>
    </>
   );
}

export default WorkPage;