import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import LogoDrop from "../../assets/LogoDrop.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="Nav" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={LogoDrop}
            width="90"
            height="90"
            alt="Logo de Drop"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <section className="d-flex me-1 my-2 my-lg-0" >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
            <Nav.Link href="#" disabled>
              Novedades
            </Nav.Link>
            <Nav.Link href="#" disabled>
              Contacto
            </Nav.Link>
          </section>
          {/*   <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
