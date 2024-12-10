import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='px-[98px] py-[18px]'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout