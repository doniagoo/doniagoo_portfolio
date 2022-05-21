import React from 'react'
import { Button } from "reactstrap";
import {Link} from "react-router-dom";

const Otros = () => {
  return (
    <>
      <div className="body-inicio m-5">
        <h1>¿Cómo se ha hecho?</h1>
      </div>
      <h4>
        Esta aplicación a sido creada con React.js y una API externa de <Link to="/">Ricky And Morty</Link> en la que se logra obtener<br/>todos los  personajes que han aparecido en la serie.<br/><br/>Si quieres conocer más sobre qué personajes te hablo, solo tienes que darle click al botón amarillo!
      </h4>
      <div>
        <Button color="warning" className="btn btn-lg m-5"><Link to="/buscador" className="text-dark">Ir a ver Personajes</Link></Button>
      </div>
    </>
  )
}

export default Otros