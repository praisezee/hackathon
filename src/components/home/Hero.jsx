import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import dj1 from '../../assets/djpic1.jpg'

const Hero = () => {
  return (
  <Row className='hero align-items-center my-5'>
    <Col className='my-auto mx-auto' xs={10} md={6} >
      <p className="h3 text-capitalize">
        Welcome to the ultimate D.J web app! We are thrilled to have you here and are ready to help you take your music experience to the next level. 
        Call us:
      </p>
      <p className="text-center text-danger h1 text-uppercase">fitad dj</p>
    </Col>
    <Col className='mx-auto my-auto' xs={10} md={6}>
      <img src={dj1} alt="hero image" className='img-fluid rounded shadow' />
    </Col>
  </Row>
  )
}

export default Hero
