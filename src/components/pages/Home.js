import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/main.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import PhotoApp from "../../img/app.png";

export default function Home() {
  return (
    <div className="container" id="home">
      <div className="row">
        <div className="col-lg-5 mr-5">
          <div className="display-3 mt-5 mb-2"> Bienvenue! </div>
          <div className="h5 ml-2"> Connectez vous pour commencer! </div>
          <Form>
            <Form.Group controlId="formGroupEmail" className="mt-2 mb-1">
              <Form.Control name="email" type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Row>
              <Button
                name="submit"
                type="submit"
                className="submit_connexion mt-3 mb-2 ml-1"
              >
                Submit
              </Button>
              <a href="#" className="text-center mt-4 ml-5"> Mot de passe oublié ? </a>
            </Form.Row>
          </Form>
        </div>
        <div className="col-lg-5 ml-5">
          <Image src={PhotoApp} fluid width="90%" />
        </div>
      </div>
    </div>
  );
}
