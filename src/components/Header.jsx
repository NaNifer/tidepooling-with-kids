// import { useState } from "react"; 
// import Anemone from '../assets/sea-anemone-test.png'
import Cartoon from '../assets/cartoon-anemone.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Header() {
    return (
      <Navbar bg="light" expand="lg">
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
                <NavDropdown.Item href="#action/3.3">Half Moon Bay</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  New Search
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }