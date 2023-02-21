import React from 'react'
import { Container } from 'react-bootstrap'
import SignupForm from './auth/SignupForm'

const Signup = () => {
  return (
    <main className='mt-4 pt-5'>
      <Container>
        <SignupForm/>
      </Container>
    </main>
  )
}

export default Signup
