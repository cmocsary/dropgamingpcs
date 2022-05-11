import React from "react";
import "./Footer.css";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="bg-dark">
        <Container>
          <Row className="text-center">
            <Col sm={12} lg={4} className="mt-3">
              <p className="fs-3 fuente">Informacion</p>
              <Nav className="navbar navbar-dark d-flex flex-column">
                <Link to="/" className="nav-link Link" exact={true}>
                  Inicio
                </Link>
                <Link
                  to="/ofertas"
                  className="nav-link Link"
                  exact={true}
                >
                  Ofertas
                </Link>
                <Link
                  to="/sobreNosotros"
                  className="nav-link Link"
                  exact={true}
                >
                  Sobre Nosotros
                </Link>
                <Link
                  to="/novedades"
                  className="nav-link Link"
                  exact={true}
                >
                  Novedades
                </Link>
                <Link
                  to="/contacto"
                  className="nav-link Link"
                  exact={true}
                >
                  Contacto
                </Link>
              </Nav>
            </Col>
            <Col sm={12} lg={4} className="mt-3">
              <p className="fs-3 fuente">Redes Sociales</p>
              <div className="text-center text-light">
                <FontAwesomeIcon className="fa-3x mx-2" icon={faFacebookSquare} />
                <FontAwesomeIcon className="fa-3x" icon={faInstagramSquare} />
              </div>
            </Col>
            <Col sm={12} lg={4} className="mt-3">
              <p className="fs-3 fuente">Contacto</p>
              <div className="text-center text-light">
                <FontAwesomeIcon className="fa-3x" icon={faPhone} />
                <p className="fs-5">(0381) 156439417</p>
                <p className="fs-5">(4000) San Miguel de Tucuman </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center text-light copy">
          <p> Todos los derechos reservados © 2022 Copyright Text</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
