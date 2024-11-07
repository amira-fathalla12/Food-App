/* eslint-disable no-unused-vars */
import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'

export const MasterLayout = () => {
  return (
    <div className='d-flex'>
      <div className='w-25 bg-info'>sidebare</div>
      <div className='w-100 bg-success'>
        <Navbar/>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}
