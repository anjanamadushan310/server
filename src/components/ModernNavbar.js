// Import necessary React and Bootstrap components
import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the Navbar component
const ModernNavbar = () => {
  return (
    // Main Navbar container
    <Navbar
      expand="lg" // Ensures the navbar is responsive
      style={{
        background: "linear-gradient(to bottom, #224B22, #006400)", // Gradient background from top to bottom
        padding: '10px 0', // Padding for better spacing
      }}
      variant="dark" // Dark variant for better contrast
      sticky="top" // Navbar sticks to the top during scrolling
    >
      <Container>
        {/* Logo and site name */}
        <Navbar.Brand href="/Admin" style={{ fontWeight: 'bold', color: 'white' }}>
          <img
            src="https://via.placeholder.com/40" // Placeholder for the site logo (replace with your logo)
            alt="Site Logo"
            style={{ marginRight: '10px', borderRadius: '50%' }} // Style for the logo
          />
          Site Name
        </Navbar.Brand>

        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible navbar items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Navigation links */}
            <Nav.Link href="/home" style={{ color: 'white', fontWeight: 'bold' }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: 'white', fontWeight: 'bold' }}>
              About
            </Nav.Link>
            <Nav.Link href="/tracks" style={{ color: 'white', fontWeight: 'bold' }}>
              Tracks
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: 'white', fontWeight: 'bold' }}>
              Contact Us
            </Nav.Link>

            {/* Dropdown menu for Downloads */}
            <NavDropdown
              title="Downloads"
              id="download-dropdown"
              menuVariant="dark"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#action1">Brochure</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Rules</NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown menu for Past Years */}
            <NavDropdown
              title="Past Years"
              id="past-years-dropdown"
              menuVariant="dark"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#action3">2023</NavDropdown.Item>
              <NavDropdown.Item href="#action4">2022</NavDropdown.Item>
              <NavDropdown.Item href="#action5">2021</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Join and Login buttons aligned to the right */}
          <div className="d-flex gap-2">
            <Button
              href="/join"
              variant="outline-light" // Button with outline style
              style={{ fontWeight: 'bold' }}
            >
              Join
            </Button>
            <Button
              href="/login"
              variant="light" // Button with filled style
              style={{ fontWeight: 'bold', color: '#006400' }}
            >
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Export the component for use in other parts of the app
export default ModernNavbar;
