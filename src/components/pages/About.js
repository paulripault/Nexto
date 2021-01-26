import React from "react";
import "../../css/main.css";
import { BsCheckCircle } from "react-icons/bs";
import photo1 from "../../img/photo-9.jpg";
import photo2 from "../../img/photo-10.jpg";
import photo3 from "../../img/photo-11.jpg";
import photo4 from "../../img/photo-19.jpg";

export const About = () => (

  <div className="container" id="section_about">
    <section>
      <div>
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6 col-lg-5 discover_div">
            <h3 className="discover">
              Découvrez ceux pour qui <br></br>
              <span className="text-desc"> ça change tout !</span>
            </h3>
            <p className="">
              Nous visons à prendre soin de vous. Besoin d'aide pour
              l'installation, trouver un bug ou simplement avoir besoin d'une
              clarification sur notre documentation ? Nous serons là pour
              donner un coup de main.
              </p>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <BsCheckCircle size={32} />
                  </span>
                  <p className="text-desc"> Speedy </p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <BsCheckCircle size={32} />
                  </span>
                  <p className="text-desc"> 5 Stars </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <BsCheckCircle size={32} />
                  </span>
                  <p className="text-desc"> Global Team </p>
                </div>
                <div className="d-flex">
                  <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <BsCheckCircle size={32} />
                  </span>
                  <p className="text-desc"> Good Looking </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6 mt-8 mr-n5">
                <img
                  src={photo1}
                  alt=""
                  className="photo1 img-fluid rounded mb-2 mr-4"
                ></img>
                <img
                  src={photo2}
                  alt=""
                  className="photo2 img-fluid rounded mr-4"
                ></img>
              </div>
              <div className="col-6">
                <img
                  src={photo3}
                  alt=""
                  className="photo3 img-fluid rounded mb-2 ml-4"
                ></img>
                <img
                  src={photo4}
                  alt=""
                  className="photo4 img-fluid rounded ml-4"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About;