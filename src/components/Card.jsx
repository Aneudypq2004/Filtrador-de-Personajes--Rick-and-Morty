import { useEffect, useState } from "react";


export default function Card({ personajes }) {


  const { name, status, species, gender, image, origin } = personajes

  const origen = origin.name

  return (

    <div className="card">

      <img src={image} alt={`personaje ${name}`} />

      <div className="card-contenido">

        <div className="card-nombre">
          <h3 className="nombre">{name}</h3>
          <div className={`${status === 'Alive' ? 'green' : 'red'} status`}> </div>
        </div>

        <div className="card-flex">


          <div className="card-categoria">
            <p>gender</p>
            <p>species</p>
            <p>origin</p>
          </div>

          <div className="card-info">
            <p>{gender}</p>
            <p>{species}</p>
            <p>{origen.substr(0,6)}</p>

          </div>


        </div>


      </div>

    </div>

  )
}
