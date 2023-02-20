import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs'

const Social = () => {
  return (
    <Row className='d-grid mx-auto'>
      <Button className='my-1 mx-auto w-50 text-capitalize'>
        <BsFacebook className='me-1'/> Facebook
      </Button>
      <Button variant='danger' className='my-1 mx-auto w-50 text-capitalize'>
        <BsGoogle className='me-1'/> Sign in with Google account
      </Button>
      <Button variant='secondary' className='my-1 mx-auto w-50 text-capitalize'>
        <BsApple className='me-1'/> sign in with apple id
      </Button>
    </Row>
  )
}

export default Social
