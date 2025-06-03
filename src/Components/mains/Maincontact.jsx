import React, { useState } from "react";
import { Button } from "bootstrap";

const Maincontact = () => {
  const initialState = {
    nombre: "",
    consulta: "",
  };
  const [consulta, setConsulta] = useState(initialState);

  const handlechange = (e) => {
    setConsulta({...consulta[e.target.name]:e.target.value})
  };

  return (
    <div>
      <form action="">
        <h2>Contactame a mi mail</h2>
        <label htmlFor="">Nombre</label>
        <input type="text" onChange={handlechange} name="nombre" />
        <br />
        <label htmlFor="">Consulta</label>
        <input type="text" onChange={handlechange} name="consulta" />
        <br />

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Maincontact;
