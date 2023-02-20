import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from './home/Hero'
import Testimonial from './home/Testimonial.jsx'

const Home = () => {
  return (
    <main className='mt-4 pt-5'>
      <Container>
        <Hero/>
        <Testimonial/>
      </Container>
    </main>
  )
}

export default Home
