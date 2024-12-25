import React, { useState } from "react"; // Import React and useState for component state
import { useForm } from "react-hook-form"; // Import useForm for form management
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import axios from "axios"; // Import axios for API requests

export default function RegistrationForm() {
  const [show, setShow] = useState(true); // State to control the visibility of the modal
  const [fileError, setFileError] = useState(""); // State to store file validation errors
  const [loading, setLoading] = useState(false); // State to indicate loading status
  const [responseMessage, setResponseMessage] = useState(""); // State to display server responses
  const [formValues, setFormValues] = useState({}); // State to store form values

  // Destructure methods and state from useForm
  const {
    register, // Function to register input fields
    handleSubmit, // Function to handle form submission
    watch, // Function to watch input values
    formState: { errors, isValid }, // Access errors and form validity
  } = useForm({ mode: "all" }); // Enable real-time validation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Function to handle form submission
  const onSubmit = async (data) => {
    console.log("Form Data: ", data); // Log form data to the console
    alert("Registration Successful!"); // Show success alert

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Display success message
      setResponseMessage(response.data.message || "Registration Successful!");
    } catch (error) {
      // Display error message
      setResponseMessage(
        error.response?.data?.message || "An error occurred during registration."
      );
    } finally {
      setLoading(false); // End loading
    }
  };

  // Function to validate file input
  const handleFileValidation = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file && !["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
      setFileError("Only PDF, JPG, or PNG files are allowed."); // Set error message
      e.target.value = ""; // Clear the file input
    } else {
      setFileError(""); // Clear error if file is valid
      handleInputChange(e);
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
                      value={formValues.firstName || ""}
                      onChange={handleInputChange}
                      name="firstName"
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
                      type="text"
                      placeholder="Enter Second Name"
                      {...register("secondName", { required: "Second Name is required" })}
                      value={formValues.secondName || ""}
                      onChange={handleInputChange}
                      name="secondName"
                    />
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
                      type="tel"
                      placeholder="Enter Mobile Number"
                      {...register("mobileNumber", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Invalid mobile number",
                        },
                      })}
                      value={formValues.mobileNumber || ""}
                      onChange={handleInputChange}
                      name="mobileNumber"
                    />
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
                      type="email"
                      placeholder="Enter Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                      value={formValues.email || ""}
                      onChange={handleInputChange}
                      name="email"
                    />
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
                      type="password"
                      placeholder="Enter Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      value={formValues.password || ""}
                      onChange={handleInputChange}
                      name="password"
                    />
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
                      type="password"
                      placeholder="Re-enter Password"
                      {...register("confirmPassword", {
                        required: "Re-Password is required",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      value={formValues.confirmPassword || ""}
                      onChange={handleInputChange}
                      name="confirmPassword"
                    />
                    {errors.confirmPassword && (
                      <small className="text-danger">{errors.confirmPassword.message}</small>
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
                      type="text"
                      placeholder="Enter Country"
                      {...register("country", { required: "Country is required" })}
                      value={formValues.country || ""}
                      onChange={handleInputChange}
                      name="country"
                    />
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
                      type="text"
                      placeholder="Enter NIC or Passport Number"
                      {...register("idOrPassport", {
                        required: "NIC or Passport Number is required",
                      })}
                     
                    />
                    {errors.idOrPassport && (
                      <small className="text-danger">{errors.idOrPassport.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Participant Category */}
              <Row>
                <Col md={12}>
                  <Form.Group controlId="gender">
                    <Form.Label>Participant Category</Form.Label>
                    <Form.Control
                      as="select"
                      {...register("gender", { required: "Gender is required" })}
                      value={formValues.gender || ""}
                      onChange={handleInputChange}
                      name="gender"
                    >
                      <option value="">Select Participant Category</option>
                      <option value="male">Host</option>
                      <option value="female">Co-Host</option>
                      <option value="other">Participant</option>
                    </Form.Control>
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
                      <Form.Check
                        type="radio"
                        label="Vegetarian"
                        value="vegetarian"
                        {...register("vegetarian", { required: "Please select an option" })}
                        checked={formValues.vegetarian === "vegetarian"}
                        onChange={handleInputChange}
                        name="vegetarian"
                      />
                      <Form.Check
                        type="radio"
                        label="Non-Vegetarian"
                        value="non-vegetarian"
                        {...register("vegetarian", { required: "Please select an option" })}
                        checked={formValues.vegetarian === "non-vegetarian"}
                        onChange={handleInputChange}
                        name="vegetarian"
                      />
                    </div>
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
                      as="textarea"
                      rows={3}
                      placeholder="Enter Address"
                      {...register("address", {
                        required: "Address is required",
                        minLength: {
                          value: 10,
                          message: "Address must be at least 10 characters",
                        },
                      })}
                      value={formValues.address || ""}
                      onChange={handleInputChange}
                      name="address"
                    />
                    {errors.address && (
                      <small className="text-danger">{errors.address.message}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* File Upload */}
              <Form.Group controlId="paymentReceipt">
                <Form.Label>Upload Payment Receipt (PDF, JPG, PNG)</Form.Label>
                <Form.Control
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  {...register("paymentReceipt", { required: "Payment receipt is required" })}
                  onChange={handleFileValidation}
                />
                {fileError && <small className="text-danger">{fileError}</small>}
              </Form.Group>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isValid || fileError}
                className="w-100 mt-3"
                style={{ backgroundColor: "#006400", borderColor: "#006400" }}
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
