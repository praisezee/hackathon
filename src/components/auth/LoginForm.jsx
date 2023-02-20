import React from 'react'
import { Button, Col, FloatingLabel, Form, FormControl, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Social from './Social'

const LoginForm = () => {
  return (
    <Row className='myform align-items-center'>
      <Col xs={12} md={10} lg={6}>
        <Form className='my-4'>
          <FloatingLabel controlId='floatingInput' label='Email Address' className='mb-3 text-dark' >
            <FormControl type='email' placeholder='example@gmail.com'/>
          </FloatingLabel>
          <FloatingLabel controlId='floatingInput' label='Password'className='mb-3 text-dark'>
            <FormControl type='password' placeholder='enter your password'/>
          </FloatingLabel>
          <Link to='password-update' className='link'>Forgot password?</Link>
          <Button variant='primary' className='float-end'>
            Login
          </Button>
        </Form>
        <Social/>
      </Col>
      
    </Row>
  )
}

export default LoginForm
