import React, { useState } from "react"; // Import React and useState for component state
import { useForm } from "react-hook-form"; // Import useForm for form management
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

export default function RegistrationForm() {
  const [show, setShow] = useState(true); // State to control the visibility of the modal
  const [fileError, setFileError] = useState(""); // State to store file validation errors

  // Destructure methods and state from useForm
  const {
    register, // Function to register input fields
    handleSubmit, // Function to handle form submission
    watch, // Function to watch input values
    formState: { errors, isValid }, // Access errors and form validity
  } = useForm({ mode: "all" }); // Enable real-time validation

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form Data: ", data); // Log form data to the console
    alert("Registration Successful!"); // Show success alert
  };

  // Function to validate file input
  const handleFileValidation = (e) => {
    const file = e.target.files[0]; // Get the selected file
    // Check if the file type is valid
    if (file && !["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
      setFileError("Only PDF, JPG, or PNG files are allowed."); // Set error message
      e.target.value = ""; // Clear the file input
    } else {
      setFileError(""); // Clear error if file is valid
    }
  };

  const password = watch("password"); // Watch the password input value

  return (
    <div>
      <Modal
        show={show} // Control modal visibility
        onHide={() => {}} // Disable close functionality
        backdrop="static" // Prevent closing on outside click
        keyboard={false} // Disable closing on pressing ESC
        centered // Center the modal
      >
        <Modal.Header
          style={{
            backgroundColor: "#224B22", // Set background color
            color: "white", // Set text color
          }}
        >
          <Modal.Title>Registration Form</Modal.Title> {/* Modal title */}
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Form onSubmit={handleSubmit(onSubmit)}> {/* Handle form submission */}
              {/* First Name */}
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text" // Text input
                      placeholder="Enter First Name" // Placeholder text
                      {...register("firstName", { required: "First Name is required" })} // Register input and set validation rules
                    />
                    {/* Display error message */}
                    {errors.firstName && (
                      <small className="text-danger">{errors.firstName.message}</small>
                    )}
                  </Form.Group>
                </Col>
                
                {/* Second Name */}
                <Col md={6}>
                  <Form.Group controlId="secondName">
                    <Form.Label>Second Name</Form.Label>
                    <Form.Control
                      type="text" // Text input
                      placeholder="Enter Second Name" // Placeholder text
                      {...register("secondName", { required: "Second Name is required" })} // Register input and set validation rules
                    />
                    {/* Display error message */}
                    {errors.secondName && (
                      <small className="text-danger">{errors.secondName.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Mobile Number */}
              <Row>
                <Col md={6}>
                  <Form.Group controlId="mobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="tel" // Input for phone number
                      placeholder="Enter Mobile Number" // Placeholder text
                      {...register("mobileNumber", {
                        required: "Mobile number is required", // Required validation
                        pattern: {
                          value: /^[0-9]{10,15}$/, // Regex for valid mobile numbers
                          message: "Invalid mobile number", // Error message for invalid pattern
                        },
                      })}
                    />
                    {/* Display error message */}
                    {errors.mobileNumber && (
                      <small className="text-danger">{errors.mobileNumber.message}</small>
                    )}
                  </Form.Group>
                </Col>

                {/* Email */}
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email" // Input for email
                      placeholder="Enter Email" // Placeholder text
                      {...register("email", {
                        required: "Email is required", // Required validation
                        pattern: {
                          value: /^\S+@\S+$/i, // Regex for valid email
                          message: "Invalid email format", // Error message for invalid pattern
                        },
                      })}
                    />
                    {/* Display error message */}
                    {errors.email && (
                      <small className="text-danger">{errors.email.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Password */}
              <Row>
                <Col md={6}>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password" // Password input
                      placeholder="Enter Password" // Placeholder text
                      {...register("password", {
                        required: "Password is required", // Required validation
                        minLength: {
                          value: 6, // Minimum length validation
                          message: "Password must be at least 6 characters", // Error message
                        },
                      })}
                    />
                    {/* Display error message */}
                    {errors.password && (
                      <small className="text-danger">{errors.password.message}</small>
                    )}
                  </Form.Group>
                </Col>

                {/* Confirm Password */}
                <Col md={6}>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control
                      type="password" // Password input
                      placeholder="Re-enter Password" // Placeholder text
                      {...register("confirmPassword", {
                        required: "Re-Password is required", // Required validation
                        validate: (value) =>
                          value === password || "Passwords do not match", // Custom validation for matching passwords
                      })}
                    />
                    {/* Display error message */}
                    {errors.confirmPassword && (
                      <small className="text-danger">{errors.confirmPassword.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Gender */}
              <Row>
                <Col md={12}>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select" // Dropdown input for gender
                      {...register("gender", { required: "Gender is required" })} // Register input and set validation rules
                    >
                      <option value="">Select Gender</option> {/* Placeholder option */}
                      <option value="male">Male</option> {/* Male option */}
                      <option value="female">Female</option> {/* Female option */}
                      <option value="other">Other</option> {/* Other option */}
                    </Form.Control>
                    {/* Display error message */}
                    {errors.gender && (
                      <small className="text-danger">{errors.gender.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Vegetarian */}
              <Row>
                <Col md={6}>
                  <Form.Group controlId="vegetarian">
                    <Form.Label>Are you Vegetarian?</Form.Label>
                    <div>
                      {/* Radio button for vegetarian */}
                      <Form.Check
                        type="radio"
                        label="Vegetarian"
                        value="vegetarian"
                        {...register("vegetarian", { required: "Please select an option" })}
                      />
                      {/* Radio button for non-vegetarian */}
                      <Form.Check
                        type="radio"
                        label="Non-Vegetarian"
                        value="non-vegetarian"
                        {...register("vegetarian", { required: "Please select an option" })}
                      />
                    </div>
                    {/* Display error message */}
                    {errors.vegetarian && (
                      <small className="text-danger">{errors.vegetarian.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Address */}
              <Row>
                <Col md={12}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea" // Multi-line text input
                      rows={3} // Set number of rows
                      placeholder="Enter Address" // Placeholder text
                      {...register("address", {
                        required: "Address is required", // Required validation
                        minLength: {
                          value: 10, // Minimum length validation
                          message: "Address must be at least 10 characters", // Error message
                        },
                      })}
                    />
                    {/* Display error message */}
                    {errors.address && (
                      <small className="text-danger">{errors.address.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Country */}
              <Row>
                <Col md={12}>
                  <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text" // Text input for country
                      placeholder="Enter Country" // Placeholder text
                      {...register("country", { required: "Country is required" })} // Register input and set validation rules
                    />
                    {/* Display error message */}
                    {errors.country && (
                      <small className="text-danger">{errors.country.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* NIC or Passport Number */}
              <Row>
                <Col md={12}>
                  <Form.Group controlId="idOrPassport">
                    <Form.Label>NIC or Passport Number</Form.Label>
                    <Form.Control
                      type="text" // Text input for NIC or passport
                      placeholder="Enter NIC or Passport Number" // Placeholder text
                      {...register("idOrPassport", {
                        required: "NIC or Passport Number is required", // Required validation
                      })}
                    />
                    {/* Display error message */}
                    {errors.idOrPassport && (
                      <small className="text-danger">{errors.idOrPassport.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* File Upload */}
              <Form.Group controlId="paymentReceipt">
                <Form.Label>Upload Payment Receipt (PDF, JPG, PNG)</Form.Label>
                <Form.Control
                  type="file" // File input
                  accept=".jpg,.jpeg,.png,.pdf" // Allowed file types
                  {...register("paymentReceipt", { required: "Payment receipt is required" })}
                  onChange={handleFileValidation} // Call file validation function
                />
                {/* Display error message */}
                {fileError && <small className="text-danger">{fileError}</small>}
              </Form.Group>

              {/* Submit Button */}
              <Button
                type="submit" // Submit form
                disabled={!isValid || fileError} // Disable button if form is invalid or file error exists
                className="w-100 mt-3" // Full width with margin-top
                style={{ backgroundColor: "#006400", borderColor: "#006400" }} // Custom styles
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
