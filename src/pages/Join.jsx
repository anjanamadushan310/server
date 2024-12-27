import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Join() {
  const [show, setShow] = useState(true);

  // Lock the background and set body colors when the modal is shown
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling after modal is closed
    }
  }, [show]); // Only run when 'show' state changes

  const handleClose = () => setShow(false);

  return (
    <>
      {/* Modal for conference registration */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#224B22' }}>
          <Modal.Title style={{ color: 'white' }}>Conference Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body 
          style={{ 
            backgroundColor: 'white', // Modal background color to white
            color: 'black'  // Text color inside the modal to black
          }}
        >
          <h5>Registration Fee</h5>
          <ul>
            <li><strong>Presenters (local):</strong> LKR 5000</li>
            <li><strong>Presenters (foreign):</strong> USD 50</li>
            <li><strong>Participants (local):</strong> LKR 2000</li>
          </ul>

          <h5>Mode of Payment</h5>
          <ul>
            <li><strong>Bank Name:</strong> Bank of Ceylon</li>
            <li><strong>Account Name:</strong> Institute of Technology University of Moratuwa</li>
            <li><strong>Account Number:</strong> 83062337</li>
            <li><strong>SWIFT Code:</strong> BCEYLKLX 0568</li>
            <li><strong>Branch:</strong> Homagama branch</li>
          </ul>

          <h5>Payment Instructions</h5>
          <ul>
            <li>Mention your NIC during the deposit as a reference.</li>
            <li>Attach the bank slip to the registration form, clearly indicating the name of the participant.</li>
          </ul>

          {/* Register button linking to another page */}
          <Link to="/register">
            <Button 
              variant="success" 
              onClick={handleClose} 
              style={{ width: '100%', backgroundColor: '#228B22', borderColor: '#228B22' }}
            >
              Register Now
            </Button>
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}
