import React from "react";
// import pic from '/public/index.html';
import { Button } from "reactstrap";
import {Link} from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <div className="body-inicio m-5">
        <h1>Bienvenido al mundo de Ricky and Morty!</h1>
      </div>
      <h4>
        En esta aplicacion podrás encontrarte con todos los personajes que
        aparecen en la famosa y popular Rick and Morty
      </h4>
      <div>
        <Button color="warning" className="btn btn-lg m-5"><Link to="/buscador" className="text-dark">Ir a ver Personajes</Link></Button>
      </div>
    </>
  );
};

export default Inicio;
