'use client'

import React, {useState, useEffect} from 'react'
import {client, urlFor} from '../../sanity/client'

const AboutPage = () => {
  const [about, setAbout] = useState([]) 
  
  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query).then((data) => {
        console.log(data)
        console.log(data.title)
        setAbout(data)
    })
  }, [])

  return (
    <div id='About' className='about_bg py-10'>
        <h1 className='text-3xl text-center'>About Me:</h1>

        
        {about.map((d, i) => (
            <div 
              key={d._id} 
              className='py-10 text-center text-md'
            >
              {d.name}
              {console.log('About page:')}
              {console.log(d)}
              <img
                className='about-profile-img' 
                src={urlFor(d.imgUrl)} 
                alt={d.name}
                key={i}
              />
              
              <h3 className='mt-10 mx-20 text-center text-xl'>{d.description}</h3>
            </div>
        ))}
    </div>
  )
}

export default AboutPage