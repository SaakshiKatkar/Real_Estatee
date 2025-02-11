import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import Login from '../Pages/Login';
import Register from '../Pages/Register';


function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);  // Controls if Login or Register is shown

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-light">
        <Container>
          <Navbar.Brand href="#home" className='text-danger fw-bold fs-2'>RealEstate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown title="Buy" id="basic-nav-dropdown" className='me-2'>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Sell" id="basic-nav-dropdown" className='me-2'>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Rent" id="basic-nav-dropdown" className='me-2'>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dashboard" id="basic-nav-dropdown" className='me-2'>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="outline-danger me-3" onClick={handleShow}>
              Login / Register
            </Button>
            <Button variant="outline-danger">
              Submit Property
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Login/Register */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? 'Login' : 'Register'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? <Login /> : <Register />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => setIsLogin(!isLogin)} // Toggle between Login and Register
          >
            Switch to {isLogin ? 'Register' : 'Login'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
