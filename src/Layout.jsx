import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import UserContext from './components/context/Context'
import Footer from './components/Footer'
import Header from './components/Header'

const Layout = () => {
const {theme, day, handledarkmode} = useContext(UserContext)
  return (
    <div className={`app ${theme}`}>
      <Header handledarkmode={handledarkmode} day={day}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
