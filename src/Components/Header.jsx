import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import useStore from "../store/useStore";
import { Link } from "react-router-dom";

export const Header = () => {
  const { color, cambiarColor } = useStore();

  return (
    <>
      <Navbar
        bg={color ? "dark" : "light"}
        data-bs-theme={color ? "dark" : "light"}
        expand="lg"
        className=" shadow-sm"
      >
        <Container>
          <Navbar.Brand
            as={Link}
            className={color ? "text-light" : "text-dark"}
            to="/"
          >
            Mi Portafolio
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                className={color ? "text-light" : "text-dark"}
                to="/"
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={color ? "text-light" : "text-dark"}
                to="/contact"
              >
                Contacto
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={color ? "text-light" : "text-dark"}
                to="/Proyect"
              >
                Proyectos
              </Nav.Link>
            </Nav>
            <Button
              variant={color ? "light" : "dark"}
              onClick={cambiarColor}
              className="ms-auto mt-2 mt-lg-0"
            >
              Cambiar color
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
