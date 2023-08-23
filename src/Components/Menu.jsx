import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function Menu({ login, setLogin }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand as={Link} to="/">
        DR 2023
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          {!login && (
            <>
              <Nav.Link as={Link} to="/login">
                Iniciar sesión
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Registrarse
              </Nav.Link>
            </>
          )}
          {login && (
            <>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/productos/alta">
                  Alta
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => setLogin(false)}>Cerrar sesión</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
