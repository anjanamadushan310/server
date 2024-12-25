import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Participant Dashboard Component
export default function AvailableSessions() {
    
    const [sessions, setSessions] = useState([]);

    return (
        <Container fluid style={{ background: "linear-gradient(to bottom, #224B22, #006400)", minHeight: "100vh", color: "#fff" }}>
            <Row className="py-3">
                <Col>
                    <h1 className="text-center">Participant Dashboard</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="text-dark">
                        <Card.Body>
                            <Card.Title>Available Sessions</Card.Title>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Session Title</th>
                                        <th>Time</th>
                                        <th>Speaker</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sessions.map((session, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{session.title}</td>
                                            <td>{session.time}</td>
                                            <td>{session.speaker}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
