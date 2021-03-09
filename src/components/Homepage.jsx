import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/section_connexion.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export const Homepage = (props) => (
    
    <div className="container" id="section_connexion">
        <div className="row">
            <div className="col-6">
                <div className="display-2 mb-2">Bienvenue !</div>
                <div className="h5 ml-2">Connectez-vous pour commencer !</div>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Row>
                        <Button type="submit" className="submit_connexion mt-3 mb-2 ml-1">
                            Submit
                            </Button>
                        <a className="text-center mt-4 ml-5">Mot de passe oublié?</a>
                    </Form.Row>
                </Form>
            </div>
            <div className="col-6">
                <Image src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-3.png" fluid />
            </div>
        </div>
    </div>
)

export default Homepage;

