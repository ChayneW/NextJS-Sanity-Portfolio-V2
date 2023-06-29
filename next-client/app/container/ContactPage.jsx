'use client'
import React, {useState, useEffect} from 'react'
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"

const ContactPage = () => {


  return (
    <section id='Contact'>
      {/* className='contact_bg' */}
      <div className='contact_bg social-cont flex flex-col justify-center text-center'>
        <h1 className='text-2xl mb-2'>Want to work together?</h1>
        <h1 className='text-lg'>Feel free to contact or just to say hi</h1>
        <h1 className='my-10 text-xl'>Email: 
          <br></br>
          Chaynesinghwhite@gmail.com
        </h1>

        <h1 className='text-lg mb-2'>Socials:</h1>
        <div className='flex align-middle gap-10 mx-auto'>
          <a href="https://github.com/ChayneW" target='_blank'><AiFillGithub size={60}/></a>
          <a href="https://www.linkedin.com/in/chayne-s-white/" target='_blank'><BsLinkedin size={60}/></a>
          <a href="https://twitter.com/CswAutomation" target='_blank'><BsTwitter size={60}/></a>
        </div>

      </div>
      

    </section>
  )
}

export default ContactPage