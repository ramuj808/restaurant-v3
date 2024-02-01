import { Col, Row, Container, Button, Card } from "react-bootstrap";

const TakeOutPage = () => {
  return (
    <Container>
      <h1>Kanak Attack Online Order</h1>
      <Row className="mt-5">
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="..." alt="loco moco" />
            <Card.Body>
              <Card.Title>Loco Moco</Card.Title>
              <Card.Text>Beef patty and eggs all over rice</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="..." alt="Kalua Pork" />
            <Card.Body>
              <Card.Title>Kalua Pork</Card.Title>
              <Card.Text>Pork blah blah blah</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="..." alt="Shoyu Chicken" />
            <Card.Body>
              <Card.Title>Shoyu Chicken</Card.Title>
              <Card.Text>Shoyu marinated chicken all over rice</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TakeOutPage;
