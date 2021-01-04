import React from "react";
import "../../css/contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = (props) => {
    return (
        <div class='contact'>
            <div class='text'>
                <h1>Nous contacter</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam fugit laborum velit.</p>
            </div>
            <div class='form'>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Veuillez entrez votre problème ici par une simple phrase </Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Envoyer
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Contact;