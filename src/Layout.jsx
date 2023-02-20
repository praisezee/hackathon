import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

const Layout = () => {
  const [day, setDay] = useState(false)
  const handledarkmode = () =>{
    setDay(!day)
  }
  return (
    <div className={day? 'bg-dark text-light App': ' App'}>
      <Header handledarkmode={handledarkmode} day={day}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
