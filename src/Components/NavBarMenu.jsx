import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav, Navbar} from "react-bootstrap";

function NavBarMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Registro
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Ingresar
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarMenu;
