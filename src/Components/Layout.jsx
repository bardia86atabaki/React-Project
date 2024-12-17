import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import PerpularFood from '../pages/PerpularFood';
import Home from '../pages/Home';

function Layout() {
  return (
    <div className='px-[98px] py-[18px] font-inter'>
      <Navbar />
      <Home/>
      <PerpularFood />
      <Outlet />
    </div>
  );
}

export default Layout;
