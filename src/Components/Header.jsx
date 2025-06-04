import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import useStore from '../store/useStore';
import { Link } from 'react-router-dom';

export const Header = () => {

    const {color,cambiarColor}= useStore()

  return (
    <>
      <Navbar bg={color ?"dark ":"light"} data-bs-theme={color ?"dark ":"light"}>
        <Container>
          <Navbar.Brand as={Link} className={color ?"text-light":"text-dark"} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} className={color ?"text-light":"text-dark"} to="/">Home</Nav.Link>
            <Nav.Link as={Link} className={color ?"text-light":"text-dark"} to="/contact">Contacto</Nav.Link>
            <Nav.Link as={Link} className={color ?"text-light":"text-dark"} to="/Proyect">Proyectos</Nav.Link>
            <Button variant={color ?"light ":"dark"} onClick={cambiarColor}>Cambiar color</Button>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  )
}
