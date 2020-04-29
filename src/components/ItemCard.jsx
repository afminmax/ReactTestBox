import React from "react";
import { Card,Button } from "react-bootstrap";

export default function ItemCard({data}) {
  return (
    <Card classname="h-100 shadow-sm bg-white rounded">
      <Card.Img variant="top" src={data.image} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
        </div>
      </Card.Body>
      <Card.Text className="text-secondary">{data.desc}</Card.Text>
      <Button className='mt-auto font-weight-bold'>See Chart </Button>
    </Card>
  );
}
