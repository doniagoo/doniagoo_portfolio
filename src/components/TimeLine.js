import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedPage from "./AnimatedPage";
// import "./timeline.css";
// import { AnimatedPage } from "./AnimatedPage";

let character1 = require("../assets/img/character1.png");
let character2 = require("../assets/img/character2.png");

const TimeLine = () => {
  return (
    <AnimatedPage>
      <div className="container" id="time">
        <div class="container-timeline">
          <div class="timeline">
            <ul>
              <li>
                <div class="timeline-content">
                  <h3 class="date">Sep. 2017 - Jun. 2019</h3>
                  <h1>Bachillerato</h1>
                  <p>
                  Escola Joan Pelegrí
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">Ago. 2019 - Jul. 2020</h3>
                  <h1>Camarero de Lounge Bar en Londres</h1>
                  <p>
                  HClub - London
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">Sep. 2020 - Jun. 2022</h3>
                  <h1>Grado Superior Desarrollo de Aplicaciones Web</h1>
                  <p>
                  Politècnics Barcelona
                  </p>
                </div>
              </li>
              <li>
                <div class="timeline-content">
                  <h3 class="date">Ene. 2022 - May. 2022</h3>
                  <h1>Full - Stack Developer (prácticas)</h1>
                  <p>
                  Ormon Global
                  </p>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div></AnimatedPage>
  );
};

export default TimeLine;
