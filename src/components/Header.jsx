import { useState } from "react";
// import Anemone from '../assets/sea-anemone-test.png'
// import Cartoon from "../assets/cartoon-anemone.png";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  Modal,
} from "react-bootstrap";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="none" className="font-light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={Cartoon} alt="logo" /> */}
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
                    type="email"
                    placeholder="e.g., Half Moon Bay"
                    autoFocus
                  />
                </Form.Group>
              </Form>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Enter
              </Button>
            </Modal.Body>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
