import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// import SolveApp from "./SolveApp";
import "bootstrap/dist/css/bootstrap.min.css";

let character1 = require("../assets/img/character1.png");
let character2 = require("../assets/img/character2.png");
let solve_app = require("../assets/img/solve_app.png");
let github_pages = require("../assets/img/github_pages.png");
let gadi_games = require("../assets/img/gadi_games.png");

const Projects = () => {
  return (
    <>
      <div className="body-project">
        <h1 className="card-text-top">
          <b>Proyectos</b>
        </h1>
        <div className="box-cards">
          <Link to="/solve_app">
            <article class="card">
              <div className="card-img">
                <img src={solve_app}></img>
              </div>
              <div class="card_content">
                <h2 class="card_title">
                  <b>Solve App</b>
                </h2>
                <p class="card_description">
                  <b>¡HAZ CLICK para saber más!</b>
                </p>
              </div>
            </article>
          </Link>
          <Link to="/gadi_games">
            <article class="card">
              <div className="card-img">
                <img src={gadi_games}></img>
              </div>
              <div class="card_content">
                <h2 class="card_title">
                  <b>Gadi Games</b>
                </h2>
                <p class="card_description">
                  <b>¡HAZ CLICK para saber más!</b>
                </p>
              </div>
            </article>
          </Link>
          <a href="https://doniagoo.github.io/dwec/">
            <article class="card">
              <div className="card-img">
                <img src={github_pages}></img>
              </div>
              <div class="card_content">
                <h2 class="card_title">
                  <b>GitHub Pages</b>
                </h2>
                <p class="card_description">
                  <b>¡HAZ CLICK para saber más!</b>
                </p>
              </div>
            </article>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
