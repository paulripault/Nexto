// import userEvent from "@testing-library/user-event";
import React from "react";
import "./Features.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IosPic from "../../src/img/button-app.png";
import AndPic from "../../src/img/button-play.png";
import DescPic from "../../src/img/mobile-chat.png";
// import { useState } from "react";

function Features() {
  return (
    <div className="container" id="section_features">
      <section>
        <div>
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5 discover_div">
              <h3 className="discover">
                Découvrez une toute nouvelle <br></br>
                <span className="text-desc"> application de messagerie !</span>
              </h3>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a
                ut quibusdam! Ab provident, saepe, nostrum consequuntur nihil
                vitae officia magni ad corrupti dolorem repellat necessitatibus
                nobis incidunt voluptate nulla.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 mt-8 mr-n5">
                  <img src={DescPic} alt="descpic" fluid width="400px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row align-items-center justify-content-center p-5">
          <a href="#">
            <img src={IosPic} alt="descpic" fluid width="200px" />
          </a>
          &nbsp;
          <a href="">
            <img src={AndPic} alt="descpic" fluid width="200px" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Features;
