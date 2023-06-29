import React from 'react'
import Link from 'next/link'


const Nav = () => {

  return (
    <nav>
      <div className='flex justify-between pt-3 w-full navbar'>
        
        <Link href='/'>
          <h2 className='font-[heebo]'>Chayne.dev</h2>
        </Link>

        <div className='flex justify-between px-4'>

          <Link href='#About' scroll={false}>
            <h3 className='px-3'>About</h3>
          </Link>

          <Link href='#Skills'>
            <h3 className='px-3'>Skills</h3>
          </Link>
          
          <Link href='#Projects'>
            <h3 className='px-3'>Projects</h3>
          </Link> 
         
          <Link href='#Contact'>
            <h3 className='px-3'>Contact</h3>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav