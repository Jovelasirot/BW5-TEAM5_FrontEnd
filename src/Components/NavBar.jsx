import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary fixed-top d-flex align-items-center"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex  align-items-center">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/nature-and-environment/green-energy-icon.png"
            width={"40 px"}
          />
          <span className="ms-2">Epic-Energy </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Register</Nav.Link>
            <Nav.Link href="#link">Log-in</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
