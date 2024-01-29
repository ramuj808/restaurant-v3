import { Container, Col, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <Row className="row-content align-items-center">
        <Col sm="4">
          <h5>Our Address</h5>
          <address>
            91-319 Your Way Hwy
            <br />
            Ewa Beach, HI
            <br />
            96706
          </address>
        </Col>
        <Col>
          <a role="button" className="btn btn-link" href="tel:">
            <i className="fa fa-phone" /> 808-555-5555
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:fakeemail@fakeemail.co"
          >
            <i className="fa fa-envelope-o" /> jpantoca@gmail.com
          </a>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h2>Send Us Your Feedback</h2>
          <hr />
        </Col>
        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
