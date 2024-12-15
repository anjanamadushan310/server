import React, { useState } from "react";
import { useForm } from "react-hook-form";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

export default function RegistrationForm() {
    const [show, setShow] = useState(true); // State to control modal visibility
    const [fileError, setFileError] = useState(""); // State to manage file validation error
  
    // useForm hook to manage form inputs and validation
    const {
      register, // Function to register input fields
      handleSubmit, // Function to handle form submission
      formState: { errors, isValid }, // Destructure form state: errors and isValid for validation
    } = useForm({ mode: "all" }); // Validation mode set to trigger on input changes
  
    // Function to handle form submission
    const onSubmit = (data) => {
      console.log("Form Data: ", data); // Log the submitted form data
      alert("Registration Successful!"); // Show success alert
    };
  
    // Function to validate uploaded files
    const handleFileValidation = (e) => {
      const file = e.target.files[0]; // Get the selected file
      // Check if file type is not allowed
      if (file && !["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
        setFileError("Only PDF, JPG, or PNG files are allowed."); // Set file error message
        e.target.value = ""; // Reset the file input
      } else {
        setFileError(""); // Clear file error
      }
    };

  return (
    <div>
     <Modal
      show={show} // Show the modal
      onHide={() => {}} // Prevent modal from closing
      backdrop="static" // Lock the backdrop to prevent clicking outside
      keyboard={false} // Disable ESC key to close modal
      centered // Center the modal vertically
    >
      {/* Modal Header with title */}
      <Modal.Header
        style={{
          backgroundColor: "#224B22", // Set background color to dark green
          color: "white", // Set text color to white
        }}
      >
        <Modal.Title>Registration Form</Modal.Title>
      </Modal.Header>

      {/* Modal Body */}
      <Modal.Body>
        <Container>
          {/* Form with submission handler */}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {/* First Name Input */}
              <Col md={6}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text" // Text input
                    placeholder="Enter First Name" // Placeholder text
                    {...register("firstName", { required: "First Name is required" })} // Register field with validation
                  />
                  {errors.firstName && (
                    <small className="text-danger">{errors.firstName.message}</small> // Show validation error
                  )}
                </Form.Group>
              </Col>

              {/* Second Name Input */}
              <Col md={6}>
                <Form.Group controlId="secondName">
                  <Form.Label>Second Name</Form.Label>
                  <Form.Control
                    type="text" // Text input
                    placeholder="Enter Second Name" // Placeholder text
                    {...register("secondName", { required: "Second Name is required" })} // Register field with validation
                  />
                  {errors.secondName && (
                    <small className="text-danger">{errors.secondName.message}</small> // Show validation error
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {/* Mobile Number Input */}
              <Col md={6}>
                <Form.Group controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="tel" // Telephone input
                    placeholder="Enter Mobile Number" // Placeholder text
                    {...register("mobileNumber", {
                      required: "Mobile number is required", // Validation: Required
                      pattern: {
                        value: /^[0-9]{10,15}$/, // Pattern for numeric mobile number
                        message: "Invalid mobile number", // Error message for invalid input
                      },
                    })}
                  />
                  {errors.mobileNumber && (
                    <small className="text-danger">{errors.mobileNumber.message}</small> // Show validation error
                  )}
                </Form.Group>
              </Col>

              {/* Email Input */}
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email" // Email input
                    placeholder="Enter Email" // Placeholder text
                    {...register("email", {
                      required: "Email is required", // Validation: Required
                      pattern: {
                        value: /^\S+@\S+$/i, // Email format regex
                        message: "Invalid email format", // Error message for invalid email
                      },
                    })}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email.message}</small> // Show validation error
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {/* Password Input */}
              <Col md={6}>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password" // Password input
                    placeholder="Enter Password" // Placeholder text
                    {...register("password", {
                      required: "Password is required", // Validation: Required
                      minLength: {
                        value: 6, // Minimum length of 6
                        message: "Password must be at least 6 characters", // Error message
                      },
                    })}
                  />
                  {errors.password && (
                    <small className="text-danger">{errors.password.message}</small> // Show validation error
                  )}
                </Form.Group>
              </Col>

              {/* Participant Category Input */}
              <Col md={6}>
                <Form.Group controlId="category">
                  <Form.Label>Participant Category</Form.Label>
                  <Form.Control as="select" {...register("category", { required: true })}>
                    <option value="">Select Category</option> {/* Default option */}
                    <option value="1">Category 1</option> {/* Option 1 */}
                    <option value="2">Category 2</option> {/* Option 2 */}
                    <option value="3">Category 3</option> {/* Option 3 */}
                  </Form.Control>
                  {errors.category && (
                    <small className="text-danger">Category is required</small> // Show validation error
                  )}
                </Form.Group>
              </Col>
            </Row>

            {/* Vegetarian Preference */}
            <Form.Group controlId="vegetarian">
              <Form.Label>Vegetarian?</Form.Label>
              <Form.Control as="select" {...register("vegetarian", { required: true })}>
                <option value="">Select</option> {/* Default option */}
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Control>
              {errors.vegetarian && (
                <small className="text-danger">Please specify vegetarian preference</small> // Validation message
              )}
            </Form.Group>

            {/* Payment Receipt Upload */}
            <Form.Group controlId="paymentReceipt">
              <Form.Label>Upload Payment Receipt (PDF, JPG, PNG)</Form.Label>
              <Form.Control
                type="file" // File input
                accept=".jpg,.jpeg,.png,.pdf" // Accepted file types
                {...register("paymentReceipt", { required: "Payment receipt is required" })}
                onChange={handleFileValidation} // Custom file validation function
              />
              {fileError && <small className="text-danger">{fileError}</small>} {/* Show file error */}
            </Form.Group>

            {/* Submit Button */}
            <Button
              type="submit" // Submit button
              disabled={!isValid || fileError} // Disabled until all fields are valid
              className="w-100 mt-3" // Full-width button with margin
              style={{ backgroundColor: "#006400", borderColor: "#006400" }} // Green button
            >
              Submit
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
    </div>
  )
}
