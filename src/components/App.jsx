import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // required stylesheet
import "../styles.css"; // my stylesheet

import { Container, Row, Col } from "react-bootstrap";

import ItemCard from "./ItemCard";
import Chart from "./Chart";
import items from "../data.json";

export default function App() {
  return (
    <div className="App">
      <h1 className="header">Mettalic Ingots</h1>
      <Container>
        {" "}
        <Row />
      </Container>
      <Container>
        {" "}
        <Row>
          {items.map(data => (
            <Col xs={3} className="mb-5" key={`${data.id}`}>
              <ItemCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
