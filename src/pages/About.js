import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Lottie from 'lottie-react';
import aboutAnimation from './aboutAnimation.json'; // Import your Lottie JSON file


export default function About() {
  return (
    <div>
       <Container className="py-5">
      {/* Page Heading */}
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="display-4 fw-bold">About </h1>
          <p className="lead text-muted">
            Learn more about who we are, what we do, and our vision.
          </p>
        </Col>
      </Row>

      {/* Lottie Animation and Text */}
      <Row className="align-items-center">
        {/* Animation Section */}
        <Col md={6} className="mb-4">
          <Lottie animationData={aboutAnimation} loop={true} style={{ width: '100%', height: 'auto' }} />
        </Col>

        {/* About Description */}
        <Col md={6}>
          <Card className="shadow-sm p-4">
            <Card.Body>
              <Card.Title className="h3 mb-3">Who We Are</Card.Title>
              <Card.Text>
                We are a dedicated team of professionals committed to providing high-quality education
                and cutting-edge solutions to empower students. Our institute has been a pillar of 
                knowledge and innovation, consistently driving forward progress and excellence.
              </Card.Text>
              <Card.Text>
                Our mission is to foster talent, encourage creativity, and build a better future through
                education and technology.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Vision Section */}
      <Row className="mt-5">
        <Col>
          <Card className="bg-light border-0 p-4 text-center">
            <Card.Body>
              <h2 className="fw-bold">Our Vision</h2>
              <p className="lead text-muted">
                "To become a global leader in education, empowering individuals to shape a better future
                through innovation and knowledge."
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
