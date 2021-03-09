import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import PhotoApp from "../img/app.png";
import { BsCheckCircle } from "react-icons/bs";
// import { Redirect } from "react-router-dom";
// import redirection testing

function Home() {
  const wait = function (duration = 1000) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, duration);
    });
  };

  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onChange",
  });
  const { isSubmitting, isValid, isSubmitSuccessful } = formState;

  const onSubmit = async (data) => {
    console.log(data.email);
    await wait(1000);
  };

  // if (isSubmitSuccessful) {
  //     return <Redirect to = "/features"
  //     setTimeout = "5000" / > ;
  //     //si le formulaire est soumis correctement redirection
  // }

  // debugg
  // console.log(errors);

  return (
    <div className="container" id="section_connexion">
      <div className="row">
        <div className="col-lg-5 mr-5">
          <div className="display-3 mt-5 mb-2"> Bienvenue! </div>
          <div className="h5 ml-2"> Connectez vous pour commencer! </div>
          {isSubmitSuccessful && (
            <div className="alert alert-success connexion">
              <BsCheckCircle /> &nbsp; Connexion établit
            </div>
          )}
          <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="col form-group">
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                className="form-control formGroupEmail"
                id="email"
                name="email"
                ref={register({
                  required: "Vous devez entrer un email valide !",
                })}
              />
              {errors.email && <span> {errors.email.message} </span>}
            </div>
            <div className="col form-group">
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                className="form-control formGroupPassword"
                id="password"
                name="password"
                ref={register({ required: true })}
              />
            </div>
            <div className="col form-group">
              <button
                disabled={isSubmitting || !isValid}
                type="submit"
                className="btn btn-primary"
              >
                Connexion
              </button>
              <div className="container" id="userLogged"></div>
            </div>
          </form>
        </div>
        <div className="col-lg-5 ml-5">
          <Image src={PhotoApp} fluid width="90%" />
        </div>
      </div>
    </div>
  );
}

export default Home;
