import {Link} from 'react-router-dom';
import React from "react"
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";
import LogoDrop from "../../assets/LogoDrop.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="Nav Link" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src={LogoDrop}
            width="90"
            height="90"
            alt="Logo de Drop"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div className='d-flex justify-content-end'>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          <section className="d-flex me-1 my-2 my-lg-0" >
            <Link to='/' className='nav-link' exact={true}>Home</Link>
            <Link to="/productos" className='nav-link' exact={true}>Productos</Link>
            <Link to="/sobreNosotros" className='nav-link' exact={true}>Sobre Nosotros</Link>
            <Link to="/novedades" className='nav-link' exact={true}>Novedades</Link>
            <Link to="/contacto" className='nav-link' exact={true}>Contacto</Link>
          </section>
          </Nav>
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
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
