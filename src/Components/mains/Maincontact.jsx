import React, { useState } from "react";
import { Button,Form,Container } from "react-bootstrap"; 

const Maincontact = () => {
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
    console.log(consulta)
  };
  return (
    <Container>
      <Form>
        <h2 className="text-center">Contáctame a mi Mail</h2>
        <Form.Group className="mb-3">
        <Form.Label>Ingrese su nombre</Form.Label>
        <Form.Control type="text" onChange={handleChange} name="nombre"  required/>
      </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Ingrese su consulta</Form.Label>
        <Form.Control type="text" onChange={handleChange} name="consulta"  required/>
      </Form.Group>
        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
};
export default Maincontact