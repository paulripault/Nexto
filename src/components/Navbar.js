import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { RiChat1Line } from "react-icons/ri";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function navbar() {
  return (
    <div className="container" id="Navbar">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/" className="logo-title">
          <div>
            <RiChat1Line />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links">
            <Nav.Link href="/features" className="hvr-underline-from-left">
              Fonctionnalités
            </Nav.Link>
            <Nav.Link href="/contact" className="hvr-underline-from-left">
              Contact
            </Nav.Link>
            <Nav.Link href="/about" className="hvr-underline-from-left">
              A propos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
