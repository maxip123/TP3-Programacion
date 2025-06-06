import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import useStore from "../../store/useStore";

const Maincontact = () => {
  const { color } = useStore();
  const initialState = {
    nombre: "",
    consulta: "",
  };
  const [consulta, setConsulta] = useState(initialState);
  const handleChange = (e) => {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(consulta);
  };
  return (
    <Container className={color ? "bg-dark text-light main" : "bg-light text-dark main"} >
      <Form>
        <h2 className="text-center m-5 fs-1">Contáctame a mi Mail</h2>
        <Form.Group className="mb-3">
          <Form.Label className="fs-4">Ingrese su nombre</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="nombre"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fs-4">Ingrese su consulta</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="consulta"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
};
export default Maincontact;
