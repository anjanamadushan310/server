import React from 'react';
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
            <h1 className="display-4 fw-bold">About</h1>
            <h2 className="text-success">
              3rd International Research Conference of ITUM - 2024
            </h2>
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
                <Card.Title className="h2 mb-3 text-dark">
                  Exploring New Frontiers: Innovative and Cross-disciplinary Approaches to Sustainable Engineering Practices
                </Card.Title>
                <Card.Text className="text-muted">
                  The Institute of Technology, University of Moratuwa (ITUM), launched its first-ever research symposium in 2013 with the goal of cultivating a robust research culture within the institution. Since then, it has become an annual hallmark of the ITUM calendar, serving as a distinguished platform to articulate and disseminate diverse and intricate research endeavors.
                  {/* Shortened for clarity */}
                </Card.Text>
                <Card.Text className="text-muted">
                  In 2022, the symposium invited international scholars, fostering global collaboration. This year, the conference's theme is "Exploring New Frontiers," focusing on sustainable engineering practices. ITUM-RU invites scholars from all disciplines to contribute to this meaningful dialogue.
                </Card.Text>
                <Card.Text>
                  Our mission is to foster talent, encourage creativity, and build a better future through education and technology.
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
                  "The vision of the International Research Conference of ITUM is to establish a globally recognized platform that fosters innovative and cross-disciplinary research. Through the integration of academic, industry, and global expertise, the conference aims to advance sustainable engineering practices and address contemporary challenges. By encouraging collaboration among local and international scholars, ITUM aspires to drive meaningful contributions to knowledge, innovation, and sustainable development, shaping a future where engineering solutions align with global sustainability goals."
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
