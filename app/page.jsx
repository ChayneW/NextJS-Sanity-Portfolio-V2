'use client'
import React from 'react'

import LayoutFormat from './container/LayoutFormat'
import ContactPage from './container/ContactPage'
import ProjectsPage from './container/ProjectsPage'
import SkillsPage from './container/SkillsPage'
import AboutPage from './container/AboutPage'

const Home = () => {

  return (
    <>
      <LayoutFormat />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </>
  )
}

export default Home