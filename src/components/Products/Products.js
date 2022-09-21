import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import Auriculares from "../../assets/Auriculares.png";
import Parlantes from "../../assets/Parlantes.jpg";
import mouses from "../../assets/mouses.jpg";

const Products = () => {
  return (
    <Container>
      <CardGroup>
        <Card className="mx-5 w-25">
          <Card.Img variant="top" src={Auriculares} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Products;
