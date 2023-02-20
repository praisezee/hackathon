import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

const Layout = () => {
  const [day, setDay] = useState(false)
  const [theme, setTheme] = useState('App')
  
  useEffect(()=>{
    const userPrefrence = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches
    if (userPrefrence) {
      setTheme('bg-dark text-light App')
      setDay(true)
    }
  },[])
  const handledarkmode = () =>{
    setTheme(theme === 'App' ? 'bg-dark text-light App':'App')
    setDay(!day)
    
  }
  return (
    <div className={`app ${theme}`}>
      <Header handledarkmode={handledarkmode} day={day}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
