import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';

export default function Speackerscards() {
  return (
    <div>
    <div className="container mt-5">
      <Row xs={1} md={3} className="g-4">
        {/* Card 1 */}
        <Col>
          <Card className="shadow-sm hover-zoom">
            <Card.Img variant="top" src="https://irc.itum.mrt.ac.lk/upn.jpg" />
            <Card.Body>
              <Card.Title><h2>Chief Guest  </h2>  Prof. U. P. Nawagamuwa</Card.Title>
              <Card.Text>
              <p>Department of Civil Engineering,
              <br></br> University of Moratuwa <br></br>   <br></br></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col>
          <Card className="shadow-sm hover-zoom">
            <Card.Img variant="top" src="https://irc.itum.mrt.ac.lk/id.jpg" />
            <Card.Body>
              <Card.Title><h1>Keynote Speaker</h1>Dr. Ishara Dharmasena</Card.Title>
              <Card.Text>
              <p> Wolfson School of Mechanical,
              <br></br> Electrical &
              Manufacturing Engineering
              <br></br> Loughborough University, England</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col>
          <Card className="shadow-sm hover-zoom">
            <Card.Img variant="top" src="https://irc.itum.mrt.ac.lk/wbmt.jpg" />
            <Card.Body>
              <Card.Title><h1>Special Speaker</h1>Assoc. Prof. W. B. M. Thoradeniya</Card.Title>
              <Card.Text>
              <p> Division of Civil Engineering Technology <br></br>Institute of Technology <br></br>University of Moratuwa</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  )
}
