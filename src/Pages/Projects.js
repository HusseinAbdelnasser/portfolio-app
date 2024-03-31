import React, {useState, useEffect} from 'react';
import {FaGithub, FaLink} from 'react-icons/fa';
import  {  Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



const Projects = () => {
  const [projects, setProjects] = useState([]);

   useEffect(() => {
      fetch("Js/data.json")
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects)
      })
      .catch("error")
   }, [])

  const projectsList = projects.map((project) => (
    <SwiperSlide key={project.id}>
         <div className='project'>
            <div className='project-image mb-1 overflow-hidden'>              
              <img src={project.imageUrl}  className='img-fluid' alt={project.alt}></img>
            </div>
            <div className='project-info'>
              <div className='details px-2 py-1'>
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </div>
              <div className='links d-flex justify-content-between px-3'>
                <p><a href={project.githubUrl} target='_blank'><FaGithub /></a> <span>github</span></p>
                <p><a href={project.siteUrl} target='_blank'><FaLink /></a> <span>site</span></p>
              </div>
            </div>
         </div>
    </SwiperSlide>
  ));

    const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };


  return (
    <div className='projects mt-5'>
      <div className='container'>
        <Swiper
          modules={[ Pagination, Autoplay]}
          breakpoints={breakpoints}
          pagination={{ clickable: true }}
          //autoplay={{ delay: 3000 }}
        >
          {projectsList}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects;
