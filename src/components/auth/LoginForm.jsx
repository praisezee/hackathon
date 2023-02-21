import React, { useContext } from 'react'
import { Button, Col, FloatingLabel, Form, FormControl, Row } from 'react-bootstrap'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import UserContext from '../context/Context'
import Social from './Social'

const LoginForm = () => {
  const {handleLogin, validated} =useContext(UserContext)
  return (
    <Row className='myform align-items-center'>
      <Col xs={12} md={10} lg={6}>
        <p className="h3 text-center text-danger text-capitalize">sign In to your account</p>
        <hr className="w-50 mx-auto" />
        <Form noValidate validated={validated} className='my-4'>
          <FloatingLabel controlId='floatingInputGrid validationCustom1' label='Email Address' className='mb-3 text-dark' >
            <FormControl type='email' placeholder='example@gmail.com' required/>
            <FormControl.Feedback  type='invalid'>Enter a vaild email address</FormControl.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId='floatingInputGrid validationCustom2' label='Password'className='mb-3 text-dark'>
            <FormControl type='password' placeholder='enter your password' required/>
            <FormControl.Feedback  type='invalid'>Enter a your password</FormControl.Feedback>
          </FloatingLabel>
          <Link to='password-update' className='link'>Forgot password?</Link>
          <Button onClick={handleLogin} variant='primary' className='float-end'>
            Login <BsChevronRight/>
          </Button>
        </Form>
        <Social/>
        <p className="h5 my-2 text-center">Don't have an account? Click <Link to='../register'>here</Link> to create one</p>
      </Col>
    </Row>
  )
}

export default LoginForm
