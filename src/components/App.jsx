import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // required stylesheet
import "../styles.css"; // my stylesheet

import { Container, Row, Col } from "react-bootstrap";

import ItemCard from "./ItemCard";
import Chart from "./Chart";
import items from "../data";

export default function App() {
  return (
    <div className="App">
      <h1>React Boilerplate Text</h1>
      <Container> <Row><p>hello</p></Row></Container>
    </div>
  );
}
