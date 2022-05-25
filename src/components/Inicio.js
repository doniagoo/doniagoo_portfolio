import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css';
import AnimatedPage from "./AnimatedPage";

let character1 = require("../assets/img/character1.png");

const Inicio = () => {
  return (
    <AnimatedPage>
      <div className="body-inicio gap-5">
        <div className="text-left">
          <div className="text-name">
            <h5>IAGO DE OLIVEIRA</h5>
          </div>
          <div className="text-position">
            <h1>
              <b class="front-end">FRONT-END</b>
              <b>DEVELOPER</b>
            </h1>
          </div>
          <div className="text-habilities">
            <h6>Web Developer | UX/UI Designer</h6>
          </div>
        </div>
        <div className="image-character">
          <img className="character1" src={character1}></img>
          <div>
            <Link to="/projects">
              <button className="btn-action mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>{" "}
                <b>Projects</b>
              </button>
            </Link>
            <a href="mailto:bcniago@gmail.com">
              <button className="btn-message">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div></AnimatedPage>
  );
};

export default Inicio;
