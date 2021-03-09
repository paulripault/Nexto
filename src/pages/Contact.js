import React from "react";
import "./Contact.css";
import Image from "react-bootstrap/Image";
import ContactPic from "../../src/img/illustration-4.png";

function About() {
  return (
    <section className="contact">
      <div className="container" id="section_connexion">
        <div className="row">
          <div className="col-lg-5 mr-5">
            <div className="h5 ml-2">
              Besoin d'aide ? Hésitez pas à nous contacter !
            </div>
            <form className="mt-3">
              <div className="col form-group">
                <label htmlFor="nom"> Nom </label>
                <input
                  type="text"
                  className="form-control formGroupText"
                  id="nom"
                  name="nom"
                />
              </div>
              <div className="col form-group">
                <label htmlFor="sujet"> Sujet </label>
                <input
                  type="text"
                  className="form-control formGroupText"
                  id="sujet"
                  name="sujet"
                />
              </div>
              <div className="col form-group">
                <label htmlFor="messages"> Message </label>
                <textarea
                  rows="7"
                  className="form-control formGroupTextarea"
                  id="messages"
                  name="messages"
                />
              </div>
              <div className="col form-group">
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
                <div className="container" id="userLogged"></div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 ml-5">
            <Image src={ContactPic} fluid />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
