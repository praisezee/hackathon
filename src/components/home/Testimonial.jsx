import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import testimonial1 from '../../assets/test1.jpg'
import testimonial2 from '../../assets/test2.jpg'
import testimonial3 from '../../assets/test3.jpeg'
import testimonial4 from '../../assets/test4.jpg'
import testimonial5 from '../../assets/test5.png'
import testimonial6 from '../../assets/test6.jpg'

const Testimonial = () => {
  return (
    <main className='my-3 py-3'>
      <p className="h1 text-center text-danger mx-auto text-capitalize">our Testimonials</p>
      <hr className=" mx-auto w-25" />
      <Container fluid >
      <Row className='justify-content-center'>
        <Col sm={10} className='border border-warning rounded m-2 p-2 shadow' md={4} lg={3}>
          <img src={testimonial1} alt="" className='img-fluid rounded' />
          <p className="h5 text-primary text-start my-2">
            AUDIEN At The Hollywood Palladium
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt praesentium magni suscipit, aspernatur incidunt cum eos saepe ad velit nihil adipisci aliquid repellendus dicta tempora voluptas dolorum deserunt blanditiis consectetur.
          </p>
        </Col>
        <Col sm={10} className='border border-warning rounded m-2 p-2 shadow' md={4} lg={3}>
          <img src={testimonial2} alt="" className='img-fluid rounded' />
          <p className="h5 text-primary text-start my-2">
            AUDIEN At The Hollywood Palladium
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt praesentium magni suscipit, aspernatur incidunt cum eos saepe ad velit nihil adipisci aliquid repellendus dicta tempora voluptas dolorum deserunt blanditiis consectetur.
          </p>
        </Col>
        <Col sm={10} className='border border-warning rounded m-2 p-2 shadow' md={4} lg={3}>
          <img src={testimonial3} alt="" className='img-fluid rounded' />
          <p className="h5 text-primary text-start my-2">
            AUDIEN At The Hollywood Palladium
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt praesentium magni suscipit, aspernatur incidunt cum eos saepe ad velit nihil adipisci aliquid repellendus dicta tempora voluptas dolorum deserunt blanditiis consectetur.
          </p>
        </Col>
        <Col sm={10} className='border border-warning rounded m-2 p-2 shadow' md={4} lg={3}>
          <img src={testimonial4} alt="" className='img-fluid rounded' />
          <p className="h5 text-primary text-start my-2">
            AUDIEN At The Hollywood Palladium
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt praesentium magni suscipit, aspernatur incidunt cum eos saepe ad velit nihil adipisci aliquid repellendus dicta tempora voluptas dolorum deserunt blanditiis consectetur.
          </p>
        </Col>
        <Col sm={10} className='border border-warning rounded m-2 p-2 shadow' md={4} lg={3}>
          <img src={testimonial5} alt="" className='img-fluid rounded' />
          <p className="h5 text-primary text-start my-2">
            AUDIEN At The Hollywood Palladium
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt praesentium magni suscipit, aspernatur incidunt cum eos saepe ad velit nihil adipisci aliquid repellendus dicta tempora voluptas dolorum deserunt blanditiis consectetur.
          </p>
        </Col>
        <Col sm={10} className='border border-warning rounded m-2 p-2 shadow' md={4} lg={3}>
          <img src={testimonial6} alt="" className='img-fluid rounded' />
          <p className="h5 text-primary text-start my-2">
            AUDIEN At The Hollywood Palladium
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt praesentium magni suscipit, aspernatur incidunt cum eos saepe ad velit nihil adipisci aliquid repellendus dicta tempora voluptas dolorum deserunt blanditiis consectetur.
          </p>
        </Col>
      </Row>
      </Container>
    </main>
  )
}

export default Testimonial
