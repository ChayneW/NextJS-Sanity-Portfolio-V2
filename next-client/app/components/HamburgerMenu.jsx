import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import hamburgerIcon from '../../public/assets/icon-hamburger.svg'
import hamburgerClose from '../../public/assets/icon-close.svg'

const HamburgerMenu = ({isToggleOn}) => {

  return (
    <>
    <div className='flex justify-between'>
        <h1 className='font-[heebo] mt-auto mx-4'> Chayne.dev</h1>
        <div className='mt-10'>
            <Image 
                className='' 
                src={isToggleOn ? hamburgerClose : hamburgerIcon} 
                alt='hamburger'
            />

            <div className={`hamburger-comp-items${isToggleOn ? ` show-menu fixed top-5 right-5 bg-black w-full h-full` : ' hidden'}`}>
                <div className='items-list column-1 justify-center text-center my-40 text-3xl'> {/* fixed */}
                    <div><Link href='#About'><h1 className='item-btn my-6' href='#About'>ABOUT</h1></Link></div>
                    <div><Link href='#Skills'><h1 className='item-btn my-6' href='#Skills'>SKILLS</h1></Link></div>
                    <div><Link href='#Projects'><h1 className='item-btn my-6' href='#Projects'>PROJECTS</h1></Link></div>
                    <div><Link href='#Contact'><h1 className='item-btn my-6' href='#Contact'>CONTACT</h1></Link></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HamburgerMenu