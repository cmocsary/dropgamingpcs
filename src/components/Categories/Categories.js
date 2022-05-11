import React from "react";
import "./Categories.css";
import { Container, Nav, NavLink, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faKeyboard,
  faComputerMouse,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <>
      <Container>
        <Row>
          <Nav className="mt-5 d-flex justify-content-between">
            <Col sm={12} lg={3} className="d-flex justify-content-center my-4">
              <NavLink className="categories justify-content-center align-items-center">
                <FontAwesomeIcon className="fa-4x" icon={faDesktop} />
              </NavLink>
            </Col>
            <Col sm={12} lg={3} className="d-flex justify-content-center my-4">
              <NavLink className="categories justify-content-center align-items-center">
                <FontAwesomeIcon className="fa-4x" icon={faKeyboard} />
              </NavLink>
            </Col>
            <Col sm={12} lg={3} className="d-flex justify-content-center my-4">
              <NavLink className="categories justify-content-center align-items-center">
                <FontAwesomeIcon className="fa-4x" icon={faComputerMouse} />
              </NavLink>
            </Col>
            <Col sm={12} lg={3} className="d-flex justify-content-center my-4">
              <NavLink className="categories justify-content-center align-items-center">
                <FontAwesomeIcon className="fa-4x" icon={faComputer} />
              </NavLink>
            </Col>
          </Nav>
        </Row>
      </Container>
    </>
  );
};

export default Categories;
