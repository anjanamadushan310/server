// Import necessary modules
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
    const [schedule, setSchedule] = useState([]);
    const [users, setUsers] = useState([]);
    const [liveParticipants, setLiveParticipants] = useState([]);
    const [contactInfo, setContactInfo] = useState({});
    const [aboutInfo, setAboutInfo] = useState("");
    const [homepageImage, setHomepageImage] = useState(null);
    const [speakers, setSpeakers] = useState([]);

    const handleUpdateSchedule = () => {
        // Add logic to update schedule
    };

    const handleEditContactUs = () => {
        // Add logic to edit contact info
    };

    const handleEditAbout = () => {
        // Add logic to edit "About"
    };

    const handleHomepageImageUpload = () => {
        // Add logic to upload homepage image
    };

    const handleEditSpeakers = () => {
        // Add logic to edit speakers
    };

    return (
        <Container fluid style={{ background: "linear-gradient(to bottom, #224B22, #006400)", minHeight: "100vh", color: "#fff" }}>
            <Row className="py-3">
                <Col>
                    <h1 className="text-center">Admin Dashboard</h1>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={4}>
                    <Card className="text-dark">
                        <Card.Body>
                            <Card.Title>Registered Users</Card.Title>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-dark">
                        <Card.Body>
                            <Card.Title>Live Participants</Card.Title>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {liveParticipants.map((participant, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{participant.name}</td>
                                            <td>{participant.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-dark">
                        <Card.Body>
                            <Card.Title>Update Schedule</Card.Title>
                            <Form>
                                <Form.Group controlId="scheduleInput">
                                    <Form.Label>Schedule Details</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={schedule}
                                        onChange={(e) => setSchedule(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="success" onClick={handleUpdateSchedule}>Update</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Card className="text-dark">
                        <Card.Body>
                            <Card.Title>Edit Contact Us</Card.Title>
                            <Form>
                                <Form.Group controlId="contactInfo">
                                    <Form.Label>Contact Information</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={contactInfo}
                                        onChange={(e) => setContactInfo(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="success" onClick={handleEditContactUs}>Save</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="text-dark">
                        <Card.Body>
                            <Card.Title>Edit About</Card.Title>
                            <Form>
                                <Form.Group controlId="aboutInfo">
                                    <Form.Label>About Information</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={aboutInfo}
                                        onChange={(e) => setAboutInfo(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="success" onClick={handleEditAbout}>Save</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Card className="text-dark">
                        <Card.Body>
                            <Card.Title>Homepage Image</Card.Title>
                            <Form>
                                <Form.Group controlId="homepageImage">
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={(e) => setHomepageImage(e.target.files[0])}
                                    />
                                </Form.Group>
                                <Button variant="success" onClick={handleHomepageImageUpload}>Upload</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="text-dark">
                        <Card.Body>
                            <Card.Title>Edit Speakers</Card.Title>
                            <Form>
                                <Form.Group controlId="speakersInfo">
                                    <Form.Label>Speaker Details</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={speakers}
                                        onChange={(e) => setSpeakers(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="success" onClick={handleEditSpeakers}>Save</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;
