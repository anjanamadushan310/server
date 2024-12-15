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
            <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Image+1" />
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                This is a description of the first card. It can contain text about the card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col>
          <Card className="shadow-sm hover-zoom">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Image+2" />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                This is a description of the second card. You can modify the text accordingly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col>
          <Card className="shadow-sm hover-zoom">
            <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Image+3" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                This is a description of the third card. Feel free to customize it further.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  )
}
