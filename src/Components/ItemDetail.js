import React from "react";
import { Card, Button } from "react-bootstrap";
// >>Aspectos a incluir en el entregable:

// ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio.

// >>Ejemplo inicial:
// Desarrolla la vista de detalle expandida del producto con su imagen título, descripción y precio

function ItemDetail({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Detalle del producto.</Card.Text>
        <p>${item.price}</p>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;