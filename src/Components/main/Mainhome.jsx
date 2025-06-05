import React from "react";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import useStore from "../../store/useStore";

const Mainhome = ({ datos }) => {
  const { color } = useStore();

  return (
    <Container className="main">
      <h1 className="text-center m-5">
        Portafolio de {datos.nombre} {datos.apellido}
      </h1>
      <img
        src="https://concepto.de/wp-content/uploads/2020/08/Programacion-informatica-scaled-e1724960033513.jpg"
        className="img-fluid rounded border border-secondary"
        alt="Programacion imagen"
      ></img>
      <Row>
        <Col xs={12} md={4}>
          <Card
            className={`m-2 ${
              color ? "bg-dark text-light" : "bg-light text-dark"
            } d-flex flex-column mb-4`}
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Card.Title>Lenguajes</Card.Title>
              <Card.Text>
                Tengo conocimientos en los siguientes lenguajes:
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item
                className={color ? "bg-dark text-light" : "bg-light text-dark"}
              >
                {datos.lenguajes?.[0]}
              </ListGroup.Item>
              <ListGroup.Item
                className={color ? "bg-dark text-light" : "bg-light text-dark"}
              >
                {datos.lenguajes?.[1]}
              </ListGroup.Item>
              <ListGroup.Item
                className={color ? "bg-dark text-light" : "bg-light text-dark"}
              >
                {datos.lenguajes?.[2]}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card
            className={`m-2 ${
              color ? "bg-dark text-light" : "bg-light text-dark"
            } d-flex flex-column`}
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Card.Title>Sobre mi</Card.Title>
              <Card.Text>{datos.descripcion}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card
            className={`m-2 ${
              color ? "bg-dark text-light" : "bg-light text-dark"
            } d-flex flex-column`}
            style={{ height: "100%" }}
          >
            <Card.Body>
              <Card.Title>Hobbies</Card.Title>
              <Card.Text>{datos.hobbie}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Mainhome;
