import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerContainer px-5 d-flex  justify-content-between ">
      <div className='links'>
        <ul className='list-unstyled d-flex '>
          <li className='px-2'><NavLink to="/">Home</NavLink></li>
          <li className='px-2'><NavLink to="/skills">Skills</NavLink></li>
          <li className='px-2'><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </div>
      <div className='footer'>
         <p> © 2024 Hussein Khaled. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;