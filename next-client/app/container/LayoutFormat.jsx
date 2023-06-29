'use client'
import React, {useState, useEffect} from 'react'

import Nav from '../components/Nav'
import HamburgerMenu from '../components/HamburgerMenu'

import { motion } from 'framer-motion'


const LayoutFormat = () => {

  const [screenSize, setScreenSize] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    console.log('inside useEffect():')

    function updateDimension(){
      setScreenSize(window.innerWidth)
    }
    updateDimension()

    window.addEventListener('resize', updateDimension)
  
    return (() => {
      window.removeEventListener('resize', updateDimension)
    })
  }, [screenSize])

  return (
     <>
     {screenSize > 1024 ?
      
        <Nav /> 
        : 
        (
          <div className='hamburger-div' onClick={() => setMenuOpen((prev) => !prev)}>
            <HamburgerMenu isToggleOn={menuOpen} />
          </div>
        )}
     
      <div className='pt-5'>
        {screenSize > 1024 ? 

            (
              <section id='Hero-main' className='pt-5 flex hero w-full h-full'>
                
                <motion.div 
                  className='hero-info'
                  animate={{
                    opacity: 1,
                  }}
                  initial={{
                    opacity: .1,
                  }}
                  transition={{
                    duration: 2,
                  }}
                >
                  <br></br>
                  <h1 className=''> EMBARK ON YOUR JOURNEY OF BRAND TRANSFORMATION</h1>
                  <br></br>
                  <h3>Welcome to a digital realm where stunning designs merge with flawless functionality, weaving immersive experiences that redefine the possibilities of the web.</h3>
                </motion.div>
                <motion.div className='hero-img mt-20'
                  animate={{
                    opacity: 1,
                  }}
                  initial={{
                    opacity: .1,
                  }}
                  transition={{
                    duration: 2,
                  }}
                >
                </motion.div>
              </section>
              
            ) : (

              <section className='hero grid'>               
                  <br></br>
                <motion.div className='hero-img '
                  animate={{
                    opacity: 1,
                  }}
                  initial={{
                    opacity: .1,
                  }}
                  transition={{
                    duration: 2,
                  }}
                >
                </motion.div>

                  <motion.div 
                    className='hero-info text-center first-letter pb-20 mx-20'
                    animate={{
                      opacity: 1,
                    }}
                    initial={{
                      opacity: .1,
                    }}
                    transition={{
                      duration: 2,
                    }}
                  >
                    <h2 className='text-3xl'>EMBARK ON YOUR JOURNEY OF BRAND TRANSFORMATION</h2>
                    <br></br>
                    <h4 className='text-xl'>Welcome to a digital realm where stunning designs merge with flawless functionality, weaving immersive experiences that redefine the possibilities of the web.</h4>
                  </motion.div>
            </section>
            )}
      </div>
    </>
  )
}

export default LayoutFormat