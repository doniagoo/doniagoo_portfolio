import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// import SolveApp from "./SolveApp";
import "bootstrap/dist/css/bootstrap.min.css";

let character1 = require("../assets/img/character1.png");
let character2 = require("../assets/img/character2.png");
let solve_app = require("../assets/img/solve_app.png");

const Projects = () => {
  return (
    <>
      <div className="body-about m-5 gap-5">
        <h1 className="mb-4">
          <b>Proyectos</b>
        </h1>
        <article class="card">
          <div class="card_content">
            <Link to="/solve_app">
              <h3 class="card_title m-5">Solve App</h3>
              <p class="card_description mx-5 mt-3">
                ¡HAZ CLICK para saber más!
              </p>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default Projects;
