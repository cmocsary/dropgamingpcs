import React, { useRef } from "react";
import "./Contacto.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("desde enviar");
    emailjs.sendForm("service_45i6w8a","template_eqls60d",e.target,"user_SCNjIfPVylGGEcXRytpin")
    .then(response=>console.log(response))
    .catch(error=>console.log(error))

  };

  return (
    <>
      <hr></hr>
      <section className="py-5 cont">
        <p className="text-center fs-1 text-light">Contactanos</p>
        <Container className=" text-light">
          <Row>
            <Col sm={12} lg={6} className="text-center py-4">
              <p>
                Si deseas consultar mayor informacion sobre los productos o
                nuestros servicios, puedes hacerlo completando el Formulario de
                la derecha y te responderemos a brevedad.
              </p>
              <p className="py-4">
                O puedes Comunicarte con nosotros a traves de los numeros de
                Telefono.
              </p>
              <FontAwesomeIcon className="fa-1x" icon={faPhone} /> (0381)
              156439417
              <div>
                <FontAwesomeIcon className="fa-1x" icon={faWhatsapp} />
                (0381) 156439417
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <Form className="pb-4" onSubmit={sendEmail}>
                <Row className="pb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ej. Juan Maria" name="from_name" />
                  </Form.Group>
                </Row>

                <Form.Group className="pb-3" controlId="formGridAddress1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ej. email@email" name="email" />
                </Form.Group>

                <Form.Group className="pb-3" controlId="formGridAddress2">
                  <Form.Label>Telefono(Opcional)</Form.Label>
                  <Form.Control placeholder="Ej. 154123456" name="telefono"/>
                </Form.Group>

                <Row className="pb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control placeholder="Tucuman" name="provincia"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control placeholder="S.M. de Tucuman" name="ciudad"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>CP</Form.Label>
                    <Form.Control placeholder="4000" name="cp"/>
                  </Form.Group>

                  <Form.Group label="Comments" className="mt-3">
                  <Form.Label>Dejanos tu Consulta</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    name="consulta"
                    style={{ height: "100px" , padding:"0px"}}
                    />
                </Form.Group>
                </Row>
              
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Deseo recibir notificaciones"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contacto;
