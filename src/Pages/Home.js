import React from 'react';
import {FaTwitter, FaGithub, FaEnvelope, FaWhatsapp} from 'react-icons/fa'

 const Home = () => {
  return (
    <div className='home px-5'>
       <h1><span>I’m</span> Hussein Khaled.</h1>
       <h2 className='mb-3'>Web Developer. <span>A self-taught developer with an interest in Computer Science.</span></h2>
       <h4 className='mb-3'>🧑‍💻 Currently specializing in <span>Front-end Development</span>.</h4>
       <ul className='social d-flex list-unstyled mt-4'>
            <li className='px-3'>
                <a href='https://twitter.com/home' target='_blank'><FaTwitter /></a>
            </li>
            <li className='px-3'>
                <a href='https://github.com/HusseinAbdelnasser' target='_blank'><FaGithub /></a>
            </li >
            <li className='px-3'>
                <a href='mailTo:husseinkhaled9847@gmail.com' target='_blank'><FaEnvelope /></a>
            </li>
            <li className='px-3'>
                <a href='https://wa.link/ru4w8o' target='_blank'><FaWhatsapp /></a>
            </li>
       </ul>
    </div>
  )
}

export default Home