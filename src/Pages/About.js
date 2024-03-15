import React from 'react'
import myImage from '../Assets/My-Image.jfif'

const About = () => {
  return (
      <div className='about px-5 d-flex '>   
        <div className='info '>
          <p className='mt-5'>Hello! I'm Hussein Khaled! I've been into computers since I was young, and that curiosity has stayed with me. It all began early on, and I've been<br /> fascinated ever since.</p>
          <p className='mt-5'>Back in 2014, I dipped my toes into the world of technology using simple<br /> tools, which eventually led me to dive into the world of coding. Fast <br />forwarding a bit, I now find myself comfortable with various programming <br />languages and technologies, and I've explored roles outside of coding,<br/> Currently, my focus revolves around crafting digital experiences through web development, along with contributing to open source projects and enjoying the challenges of coding competitions.</p>
        </div>

        <div className='image mx-5 my-5 '>
          <img src={myImage} className='object-fit-cover rounded shadow '/>
        </div>
        
      </div>
  )
}

export default About;