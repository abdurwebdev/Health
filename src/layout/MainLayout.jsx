import React, { Children } from 'react'
import Navbar from '../components/Navbar'

function MainLayout({children}) {
  return (
    <div>
      {children}
    </div>
  )
}

export default MainLayout