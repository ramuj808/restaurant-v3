import { Col, Row, Container } from "reactstrap";
// Card, CardBody, CardHeader

const AboutPage = () => {
  return (
    <Container>
      <Row className="row-content">
        <Col sm="6">
          <h3>About Us</h3>
          <p>
            Kanak Attack represents the local cuisine of Hawaii. The culmination
            of the homemade onolicious, food, drinks and company that the locals
            of Hawaii continue to celebrate and welcome with open arms and
            aloha. With ohana and aloha as our foundation, Kanak Attack offers
            to the locals an experience of the local kine grindz that your
            Grandma and tutus would make.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
