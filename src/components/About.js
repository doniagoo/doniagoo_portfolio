import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css';

let character1 = require("../assets/img/character1.png");
let character2 = require("../assets/img/character2.png");

const About = () => {
  return (
    <>
      <div className="body-about m-5 d-flex justify-content-center gap-5">
        <div className="text-left">
          <div className="text-title mb-5">
            <h1>
              <b>IAGO DE OLIVEIRA</b>
            </h1>
          </div>
          <div className="text-description">
            <p>
              ¿Cuántas veces has visto una página web o una aplicación que
              visualmente no es agradable de ver ni fácil de utilizar?
            </p>
            <br />
            <p>
              Por norma general son muchas las veces que me he encontrado en
              esta situación y llegados a un cierto punto cansa. Por este motivo
              y muchos más, decidí sumergirme en el mundo del desarrollo web.
            </p>
            <br />
            <p>Mi nombre es Iago, bienvenid@ a mi portafolio.</p>
            <br />
            <p>
              Tengo formación en desarrollo de aplicaciones web y me encanta la
              programacion web, sobre todo en el ámbito de Front End (área
              encargada de enfocarse en Optimización de la experiencia del
              usuario y el diseño de interfaces), en los cuales he logrado
              obtener diferentes habilidades técnicas que implican lenguajes de
              programación como JavaScript, HTML, CSS, PHP, MySql y frameworks
              como Vue, React, Laravel y Bootstrap.
            </p>
            <br />
            <p>
              Soy una persona con gran flexibilidad y esto probablemente se deba
              a que desde muy joven mis padres siempre se mudaban de país y eso
              sin duda hace que te tengas que adaptarte en cualquier ambiente y
              cultura por muy diferente que sea a la tuya. Por motivos como este
              y muchos más, he crecido con altas capacidades de responsabilidad.
              Un factor muy importante a la hora de diseñar es la creatividad y
              el haber viajado mucho y vivido diferentes culturas desde tan
              temprana edad hace que cuando piense en nuevas ideas tenga un
              amplio abanico de opciones por delante de otros
            </p>
            <br />
            <p>
              Gracias a las prácticas del ciclo formativo de grado superior y a
              que trabajé en Londres durante 1 año para aprender inglés, he
              logrado alcanzar gran nivel de profesionalidad, compromiso, alta
              capacidad de interlocución, trabajo bajo presión y en equipo.
            </p>
            <br />
            <p>
              Si quieres saber más sobre mí, sigue navegando por mi página web.{" "}
            </p>
            <br />
          </div>
        </div>
        <div className="image-character2">
          <img className="character2" src={character2}></img>
          <div>
            <button className="btn-action mx-1">
              <Link to="/about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>
            </button>
            <button className="btn-message">
              <a href="mailto:bcniago@gmail.com">
                <b>Contáctame</b>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
