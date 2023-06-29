'use client'
import React, {useState, useEffect, useRef} from 'react'
import {client, urlFor} from '../../sanity/client'
import { motion } from 'framer-motion'


const SkillsPage = () => {
  const [skills, setSkills] = useState([]) 

  useEffect(() => {
    const query = '*[_type == "skills"]'
    client.fetch(query).then((data) => {
        console.log(data)
        console.log(data.title)
        setSkills(data)
    })
  }, [])

  return (
    <section id='Skills' className='skills-sect bg-white py-10'>
      <h1 
        className='text-black text-center text-3xl'
      >
        Skills:
      </h1>
        
      <motion.div className='carousel my-10'>
        <motion.div className='inner-carousel skill-cont align-baseline'>
            {skills.map((skill, i) => (

            <div className='text-center align-middle'>
              <motion.div className='skill-item circle' key={skill._id}
                animate={{
                  opacity: 1,
                }}
                initial={{
                  opacity: .1,
                }}
                transition={{
                  duration:2,
                }}
                >
                
                <img 
                  className='slide'
                  src={urlFor(skill.icon)} 
                  alt={skill.name}
                  key={i}
                />
              </motion.div>
              <h1 className='text-black'>{skill.name}</h1>
            </div>
            ))}
            
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SkillsPage