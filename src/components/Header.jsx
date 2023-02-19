import React from 'react'
import { Container, Nav, Navbar, NavbarBrand,NavLink} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <Navbar bg='dark' collapseOnSelect expand="lg" variant='dark'>
      <Container>
        <NavbarBrand>
          <img src="/vite.svg" alt="" width='30' height='30' className='d-inline-block align-top'/>{''}
          Fitad Dj
        </NavbarBrand>
        <NavbarToggle aria-controls='responsive-navbar-nav'/>
        <NavbarCollapse id='responsive-navbar-nav'>
        <div className="me-auto"></div>
        <Nav>
            <NavLink eventKey={1}>
              <Link to='/' className='nav-link'>Home</Link>
            </NavLink>
            <NavLink eventKey={2}>
            <Link to='about' className='nav-link'>About</Link>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default Header
