import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='mt-4 pt-5'>
      <Container>
        <Row className='myform align-items-center'>
          <Col sm={10} md={8} lg={6}>
            <p className="h3 text-center text-danger text-capitalize">Error 404: Page not found</p>
            <p className="h3 text-center">The page requseted cannot be found. its either the url is broken or a bad request. Click <Link className='link' to='/'>here</Link> to visit our homepage</p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Missing
