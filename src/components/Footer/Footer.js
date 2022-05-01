import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <Container>
        <hr />
          <section className="row">
            <div className="col-sm-12 col-md-6 text-center">
              <p className="fs-3">Informacion</p>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Productos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Nosotros
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 text-center">
            <FontAwesomeIcon className="fa-3x" icon={faPhone}/>
            <p className="fs-5">Contacto</p>
            <p className="fs-5">(0381) 156439417</p>
            <p className="fs-5">(4000) San Miguel de Tucuman </p>
            </div>
          </section>
          <div className="text-center">
          <p> Todos los derechos reservados © 2022 Copyright Text</p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
