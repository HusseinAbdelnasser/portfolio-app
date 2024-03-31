import React, {useState, useEffect} from 'react';


const  Skills = () => {
   const [skills, setSkills] = useState([]);

   useEffect(() => {
      fetch("Js/data.json")
      .then(res => res.json())
      .then(data => {
        setSkills(data.skills)
      })
      .catch("error")
   }, [])

  const skillsList = skills.map(skill => {
    return (
      <div className='col-md-6 col-xs-12'>
          <div className="skill mb-2" key={skill.id}>
          <h4>{skill.head} <span>{skill.percentage}</span></h4>
          <div className="the-progress">
            <span className={skill.span}></span>
          </div>
        </div>
     </div>
    )
  })

 
  return (
    <div className="skills  mt-5">
      <div className='container'>
        <div className='row'>
          {skillsList}
        </div>   
      </div>
    </div>
  )
}

export default Skills;