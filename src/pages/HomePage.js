import { Container, Col } from "reactstrap";

const HomePage = () => {
  return (
    <Container>
      <Col sm="6">
        <p>Some kind of photo</p>
      </Col>
      <Col sm="6">
        <h2>Our Mission</h2>
        <p>
          Food coma. Better known as <strong>KANAK ATTACK</strong> in the state
          of Hawaii. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce porttitor accumsan orci, sed rhoncus nisl rhoncus sit amet.
          Pellentesque vehicula accumsan ullamcorper. Vivamus vehicula, quam in
          commodo viverra, lorem nisi molestie libero, sed aliquam tortor dui
          consectetur enim. Fusce accumsan, urna eu condimentum posuere, enim
          tortor facilisis odio, vitae sollicitudin sem leo tempus felis.
          Vivamus tincidunt ullamcorper augue quis iaculis. Nam dapibus laoreet
          dignissim. Sed aliquam velit ante, et hendrerit tellus sodales sed.
          Donec egestas cursus bibendum.
        </p>
      </Col>
    </Container>
  );
};

export default HomePage;
