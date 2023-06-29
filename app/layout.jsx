import React from 'react'
import '../styles/globals.css'

import Nav from './components/Nav'

export const metadata ={
    title: 'Chayne White portfolio v2 NEXT.JS',
    description: '',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <main>
            <div className='main'>
                {children}
            </div>
          </main>


        </body>
    </html>
  )
}

export default RootLayout