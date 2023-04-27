import React, { useState } from "react";
import Cartoon from "../assets/cartoon-anemone.png";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import axios from 'axios';
require('dotenv').config();






export default function Header() {
  const {data, setData} = useState({});
  const {location, setLocation} = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const requestGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.DIRECT_APIKEY}`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(requestGeo).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <Navbar bg="none" className="font-light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Cartoon} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Current Conditions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fort Bragg</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Point Reyes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pacifica</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleShow}>
                New Search
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Modal size="sm" show={show} onHide={handleClose}>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Enter city for current conditions</Form.Label>
                  <Form.Control
                    type="text"
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    placeholder="e.g., Half Moon Bay"
                    autoFocus
                  />
                </Form.Group>
              </Form>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                View
              </Button>
            </Modal.Body>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
