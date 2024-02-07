import { Col, Row, Container, Button, Card } from "react-bootstrap";
import locoMoco from "../assets/img/Loco-Moco-4-scaled.jpg";
import kaluaPig from "../assets/img/Kalua-Pig-20.jpg";
import shoyuChicken from "../assets/img/Shoyu-Chicken-1.jpg";
import pokeNachos from "../assets/img/Poke-Nachos-9-683x1024.webp";
import malasadas from "../assets/img/Malasadas-11-1365x2048.webp";

const TakeOutPage = () => {
  return (
    <Container>
      <h1>Kanak Attack Online Order</h1>
      <Row className="mt-5">
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={locoMoco} alt="loco moco" />
            <Card.Body>
              <Card.Title>Loco Moco</Card.Title>
              <Card.Text>Beef patty and eggs all over rice</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={kaluaPig} alt="Kalua Pork" />
            <Card.Body>
              <Card.Title>Kalua Pork</Card.Title>
              <Card.Text>Pork blah blah blah</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={shoyuChicken} alt="Shoyu Chicken" />
            <Card.Body>
              <Card.Title>Shoyu Chicken</Card.Title>
              <Card.Text>Shoyu marinated chicken all over rice</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pokeNachos} alt="poke nachos" />
            <Card.Body>
              <Card.Title>Poke Nachos</Card.Title>
              <Card.Text>Our signature poke over a bed of nachos</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={malasadas} alt="malasadas" />
            <Card.Body>
              <Card.Title>Malasadas</Card.Title>
              <Card.Text>Our Dessert</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TakeOutPage;
