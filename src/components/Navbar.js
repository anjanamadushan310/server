import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container, Dropdown  } from 'react-bootstrap';


const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">

        
      <Container>

     
    
        <Navbar.Brand href="#home">Site Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#a">About</Nav.Link>
            <Nav.Link href="/">Tracks</Nav.Link>
            <Nav.Link href="#features">Contact Us</Nav.Link>
        
          </Nav>


          {/* Navbar Toggle for mobile */}
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
    
    {/* First Dropdown */}
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        First Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#action/1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#action/2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#action/3">Action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    {/* Second Dropdown */}
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Second Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#action/4">Option A</Dropdown.Item>
        <Dropdown.Item href="#action/5">Option B</Dropdown.Item>
        <Dropdown.Item href="#action/6">Option C</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
  </Nav>
         </Navbar.Collapse>



</Navbar.Collapse> 


<button type="button" class="btn btn-success">Join</button>

      </Container>
    </Navbar>
  );
};

export default MyNavbar;
