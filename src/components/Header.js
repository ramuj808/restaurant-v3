import { Navbar, NavbarBrand } from "reactstrap";

const header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand>
        <h1 className="mt-1">Kanak Attack Restaurant</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default header;
