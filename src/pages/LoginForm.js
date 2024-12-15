import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap"; // Importing React-Bootstrap components
import { useForm } from "react-hook-form"; // Importing useForm for input validation

export default function LoginForm() {
     // State to handle modal visibility
  const [show, setShow] = useState(true);

  // useForm hook for form handling and validation
  const {
    register, // Register input fields
    handleSubmit, // Submit handler
    formState: { errors, isValid }, // Get errors and form validity
  } = useForm({ mode: "all" }); // Validation mode: on every input change

  // Function to handle successful login
  const onSubmit = (data) => {
    console.log("Login Data Submitted:", data);
  };
  return (
    <>
      {/* Modal component for popup */}
      <Modal show={show} backdrop="static" keyboard={false} centered>
        {/* Modal Header with top color */}
        <Modal.Header
          style={{
            backgroundColor: "#224B22", // Top header color
            color: "white", // Text color
          }}
        >
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        {/* Modal Body containing the form */}
        <Modal.Body>
          <Container>
            {/* React Hook Form to handle form submission */}
            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Email is required", // Validation rule
                    pattern: {
                      value: /^\S+@\S+$/i, // Email pattern
                      message: "Invalid email format",
                    },
                  })}
                />
                {/* Display validation error */}
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </Form.Group>

              {/* Password Input */}
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required", // Validation rule
                    minLength: {
                      value: 6, // Minimum password length
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {/* Display validation error */}
                {errors.password && (
                  <small className="text-danger">{errors.password.message}</small>
                )}
              </Form.Group>

              {/* Buttons Section */}
              <Row className="mt-4">
                <Col>
                  {/* Login Button */}
                  <Button
                    type="submit"
                    className="w-100"
                    disabled={!isValid} // Disable button until form is valid
                    style={{
                      backgroundColor: "#006400", // Bottom color
                      borderColor: "#006400", // Border color
                    }}
                  >
                    Login
                  </Button>
                </Col>
                <Col>
                  {/* Join Button */}
                  <Button
                    variant="outline-success"
                    className="w-100"
                    style={{
                      color: "#006400", // Text color
                      borderColor: "#006400", // Border color
                    }}
                    onClick={() => alert("Join button clicked")}
                  >
                    Join
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}
