import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/components/Footer.css";
import { RiGithubFill } from "react-icons/ri";
import LogoNexto from "../../src/img/logonexto.png";
import Nav from "react-bootstrap/Nav";

function footer() {
  return (
    <footer>
      <section className="footer fixed-bottom">
        <div className="copyrights ">
          <p className="text-center">
            <img
              src={LogoNexto}
              alt="logo_nexto"
              className="img-fluid"
              width="64px"
              height="64px"
            />
            &nbsp;
            <span>
              <RiGithubFill
                size="2rem"
                href="https://github.com/paulripault/Nexto"
              />
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default footer;
