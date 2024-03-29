import React from 'react'
import myImage from '../Assets/My-Image.jfif';
import { NavLink } from "react-router-dom";
import {FaSun, FaMoon} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
  return (
    <>
      <Navbar expand="lg" className="px-5 mt-3">
        <Container>
          <Navbar.Brand href="#home">
            <div className='image overflow-hidden'>
                <img src={myImage} alt='My-Image' />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav ">
              <ul className='list-unstyled'>
                <li className='px-2'><NavLink to="/" end >Home</NavLink></li>
                <li className='px-2'><NavLink to="/skills">Skills</NavLink></li>
                <li className='px-2'><NavLink to="/projects">Projects</NavLink></li>
              </ul>
            </Nav>
            <Nav className='ms-auto'>
              <div className='icon'>
                <button  id='theme-icon' onClick={props.toggleIcon} className='shadow'>
                  {props.icon === 'sun' ? <FaSun /> : <FaMoon />}
                </button> 
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    
  )
}


export default Header;