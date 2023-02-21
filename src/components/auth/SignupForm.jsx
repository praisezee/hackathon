import React, { useContext } from 'react'
import { Button, Col, Container, FloatingLabel, Form, FormControl, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserContext from '../context/Context'
import Social from './Social'

const SignupForm = () => {
  const {validated, handleSignUp} = useContext(UserContext)
  return (
  <Form noValidate validated={validated} className='my-4 myform align-items-center'>
    <p className="h3 text-center text-danger text-capitalize">Create an account</p>
    <hr className="w-50 mx-auto" />
    <Container fluid>
    <Row className='g-2 my-2'>
        <Col>
          <FloatingLabel className='text-dark' controlId='floatingInputGrid validationCustom1' label="Firstname" >
            <FormControl placeholder='Enter your firstname' type='text' required/>
            <FormControl.Feedback  type='invalid'>Firstname is required</FormControl.Feedback>
          </FloatingLabel>
          
        </Col>
        <Col>
          <FloatingLabel className='text-dark' controlId='floatingInputGrid validationCustom2' label="Lastname" >
            <FormControl placeholder='Enter your lastname' type='text'required/>
            <FormControl.Feedback  type='invalid'>Lastname is required</FormControl.Feedback>
          </FloatingLabel>
          
        </Col>
      </Row>
      <Row className='my-2'>
      <Col>
          <FloatingLabel className='text-dark' controlId='floatingInputGrid validationCustom3' label="Email" >
            <FormControl placeholder='Enter your email address' type='email' required/>
            <FormControl.Feedback  type='invalid'>Enter a vaild email address</FormControl.Feedback>
          </FloatingLabel>
          
        </Col>
      </Row>
      <Row className='g-2 '>
        <Col>
          <FloatingLabel className='text-dark' controlId='floatingInputGrid validationCustom4' label="Password" >
            <FormControl placeholder='Enter your password' type='password' required/>
            <FormControl.Feedback  type='invalid'>Enter a password</FormControl.Feedback>
          </FloatingLabel>
          
        </Col>
        <Col>
          <FloatingLabel className='text-dark' controlId='floatingInputGrid validationCustom5' label="Confirm Password" >
            <FormControl placeholder='Confirm Password' type='password' required/>
            <FormControl.Feedback  type='invalid'>Enter your password</FormControl.Feedback>
          </FloatingLabel>
          
        </Col>
      </Row>
      <Row className='my-2'>
        <Col>
          <Button className='text-capitalize float-end' onClick={handleSignUp}>
          continue
          </Button>
        </Col>
      </Row>
      <p className="h5 text-center">Or create an account with:</p>
      <Row>
        <Social/>
      </Row>
      <p className="h5 my-2 text-center">Already have an account? Click <Link to='../login'>here</Link> to login</p>
    </Container>
  </Form>
  )
}

export default SignupForm
