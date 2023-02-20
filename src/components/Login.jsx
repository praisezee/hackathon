import React from 'react'
import { Container } from 'react-bootstrap'
import LoginForm from './auth/LoginForm'

const Login = () => {
  return (
    <main className='mt-4 pt-5'>
      <Container>
        <LoginForm/>
      </Container>
    </main>
  )
}

export default Login
