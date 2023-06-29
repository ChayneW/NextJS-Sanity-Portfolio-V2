'use client'
import React, {useState, useEffect} from 'react'
import {client, urlFor} from '../../sanity/client'
import { motion } from 'framer-motion'
import { AiOutlinePlusCircle } from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"

const ProjectsPage = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const query = '*[_type == "projects"]'
    client.fetch(query).then((data) => {
      console.log(data)
      console.log(data.title)
      setProjects(data)
    })
  },[])

  return (
    <section id='Projects' className='projects-container'>
      <h1 className='text-center text-3xl mt-20'> Portfolio: </h1>
      <motion.div className='cards-container flex justify-around'  
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
        {projects.map((project) => (
          <div id={`card-num-${projects.indexOf(project)}`} className='card-item text-white flex-col justify-around' key={project._id}>
            {/* {console.log(`card-num-${projects.indexOf(project)}`)} */}
                <div className='card mb-10'>
                    <motion.div 
                      className='card-img-cont'
                    >
                      <img 
                        className='card-img mx-auto rounded-md'
                        // rounded-lg
                        src={urlFor(project.imgUrl)} 
                        alt={project.title}
                      />

                      <div className='text-center m-auto mb-5'>
                        <div className='flex justify-around'>
                          <a href={project.codeLink} target='_blank' className='mx-2'>Code: <AiFillGithub size={40} /></a>
                          <a href={project.projectLink} target='_blank' className='mx-2'>Page:<AiOutlinePlusCircle size={40} /></a>
                        </div>

                        <h1 className='font-[poppins]'>{project.title}</h1>
                        <br></br>
                        <p className='px-10 pb-2'>{project.description}</p>
                        <h1 className='text-md'>Tech Stack: {project.tech}</h1>
                        
                      </div>
                    </motion.div>
                </div>
            </div>
        ))}
      </motion.div>
    </section>
  )
}

export default ProjectsPage