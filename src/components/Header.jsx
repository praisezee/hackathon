import React from 'react'
import { Container, Nav, Navbar, NavbarBrand,NavLink} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { Link } from 'react-router-dom'
import {BsSun, BsMoon} from 'react-icons/bs'


const Header = ({handledarkmode, day}) => {
  return (
    <Navbar bg={day?"dark":"light"} collapseOnSelect expand="md" variant={day?'dark': 'light'} className='shadow' fixed='top'>
      <Container fluid>
        <NavbarBrand>
          <Link to='/' className='nav-link'>
            <img src="/vite.svg" alt="" width='30' height='30' className='d-inline-block align-top'/>{''}
          Fitad Dj
          </Link>
        </NavbarBrand>
        <div>
          {day?(<BsSun role='button' className='mx-3 h4 d-md-none' onClick={handledarkmode}/>):(<BsMoon className='mx-3 h4 d-md-none' role='button' onClick={handledarkmode}/>)}
        <NavbarToggle aria-controls='responsive-navbar-nav'/>
        </div>
        <NavbarCollapse id='responsive-navbar-nav'>
        <div className="me-auto"></div>
        {day?(<BsSun role='button'className='mx-3 h4 d-md-block d-none' onClick={handledarkmode}/>):(<BsMoon role='button' className='mx-3 h4 d-md-block d-none' onClick={handledarkmode}/>)}
        <Nav>
            <NavLink eventKey={1}>
              <Link to='/' className='nav-link py-1'>Home</Link>
            </NavLink>
            <NavLink eventKey={2}>
            <Link to='about' className='nav-link py-1'>About</Link>
            </NavLink>
            <NavLink eventKey={2}>
            <Link to='contact-us' className='nav-link py-1'>Contact Us</Link>
            </NavLink>
            <NavLink eventKey={2}>
            <Link to='login' className='btn btn-danger py-1'>Login</Link>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default Header
