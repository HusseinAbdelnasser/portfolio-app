import React, {useState} from 'react'
import myImage from '../Assets/My-Image.jfif';
import { NavLink } from "react-router-dom";
import {FaSun, FaMoon, FaArrowAltCircleDown} from 'react-icons/fa';
import 'hover.css/css/hover-min.css'; // Import hover.css styles
const Header = (props) => {
  
  const [show, setShow] = useState(false);
  return (
    <>
      <section className='header d-flex justify-content-between px-5 mt-4'>
         <div className='image overflow-hidden'>
            <img src={myImage} alt='My-Image' />
         </div>

         <div className='nav  shadow'>
            <ul className='list-unstyled d-flex '>
              <li className='px-2'><NavLink to="/" end >Home</NavLink></li>
              <li className='px-2'><NavLink to="/skills">Skills</NavLink></li>
              <li className='px-2'><NavLink to="/projects">Projects</NavLink></li>
            </ul>
         </div>

         <div className='mobile-btn shadow-sm mx-5' onClick= {() => setShow(!show)}>
           <h5 >Menu <FaArrowAltCircleDown className='hvr-sink'/></h5>
         </div>

         <div className='icon'>
            <button  id='theme-icon' onClick={props.toggleIcon} className='shadow'>
              {props.icon === 'sun' ? <FaSun /> : <FaMoon />}
            </button> 
         </div>
      </section>
      <div className={` ${show ? "view" : ""}`}>
        <div className='mobile-menu shadow'>
          <a><NavLink to="/" end >Home</NavLink></a> 
          <a><NavLink to="/skills">Skills</NavLink></a>
          <a><NavLink to="/projects">Projects</NavLink></a>
        </div>
      </div>
    </>
  )
}


export default Header;