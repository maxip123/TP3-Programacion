import React from "react";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import useStore from "../../store/useStore";
const Mainproyects = () => {
  const { color } = useStore();
  return (
    <Container className="main">
      <>
        <Card
          className={`m-2 ${
            color ? "bg-dark text-light" : "bg-light text-dark"
          } d-flex flex-column`}
          style={{ height: "100%" }}
        >
          <a
            className="text-reset "
            href="https://github.com/maxip123/chess-quizz-python"
          >
            <Card.Body>
              <Card.Title>Quiz ajedrez en Python</Card.Title>
              <Card.Text>
                Proyecto de un quiz de ajedrez con niveles en Python consola
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
        <Card className={`m-2 ${
            color ? "bg-dark text-light" : "bg-light text-dark"
          } d-flex flex-column`}
          style={{ height: "100%" }}>
          <a
            className="text-reset"
            href="https://github.com/maxip123/prisma-mongoTest"
          >
            <Card.Body>
              <Card.Title>Backend con Prisma y Mongodb</Card.Title>
              <Card.Text>Backend sencillo usando Prisma express y mongodb</Card.Text>
            </Card.Body>
          </a>
        </Card>
        <Card className={`m-2 ${
            color ? "bg-dark text-light" : "bg-light text-dark"
          } d-flex flex-column`}
          style={{ height: "100%" }}>
          <a
            className="text-reset"
            href="https://github.com/maxip123/TP1-Programaciont"
          >
            <Card.Body>
              <Card.Title>Curriculum simple</Card.Title>
              <Card.Text>Curriculum simple usando react  </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </>
    </Container>
  );
};

export default Mainproyects;
