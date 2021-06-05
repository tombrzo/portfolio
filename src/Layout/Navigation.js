import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navigation.css';

const Navigation = () => {
  return (
    <ul className='main__navigation_ul'>
      <li className='main__navigation_li-item'><NavLink className=' nav__link nav__link1' to="/"></NavLink></li>
      <li className='main__navigation_li-item'><NavLink className='nav__link nav__link2' to="about"></NavLink></li>
      <li className='main__navigation_li-item'><NavLink className='nav__link nav__link3' to="work"></NavLink></li>
      <li className='main__navigation_li-item'><NavLink className='nav__link nav__link4' to="contact"></NavLink></li>
    </ul>
  );
};

export default Navigation;