import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function navbar() {
  return (
    <div className="container" id="Navbar">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="#home" className="logo-title">
          Nexto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links">
            <Nav.Link href="#home" className="hvr-underline-from-left">
              Accueil
            </Nav.Link>
            <Nav.Link href="#link" className="hvr-underline-from-left">
              Fonctionnalités
            </Nav.Link>
            <Nav.Link href="#link" className="hvr-underline-from-left">
              Confidentialité
            </Nav.Link>
            <Nav.Link href="#link" className="hvr-underline-from-left">
              A propos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr></hr>
    </div>
  );
}