import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
          <hr />
        <section>
          <section className="row">
            <div className="col-sm-12 col-md-6">
              <p>Drop Gamming PCs</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p> Todos los derechos reservados © 2022 Copyright Text</p>
            </div>
          </section>
        </section>
      </Container>
    </>
  );
};

export default Footer;
