import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "./Card";
import useFiltros from "../context/useFiltros";

export default function Header() {

    const { busqueda, setBusqueda } = useFiltros();
    
    return (
        <div className="bg-header">
            <div className="header">

                <h1 className="logo">Rick and Morty</h1>

                <div className="contenedor-buscador">

                    <input type='button ' className="buscador"
                        placeholder="Buscar Personaje" name="buscar"
                        value={busqueda}
                        onChange={e => setBusqueda(e.target.value)}
                    />

                    <svg className='icono-b' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => { }}>

                        <path fillRule="evenodd" clipRule="evenodd" d="M9.63158 0C14.951 0 19.2632 4.02944 19.2632 9C19.2632 11.1248 18.4752 13.0776 17.1574 14.6172L21.0901 18.2929C21.508 18.6834 21.508 19.3166 21.0901 19.7071C20.7043 20.0676 20.0972 20.0953 19.6774 19.7903L19.5766 19.7071L15.6429 16.0323C13.9953 17.2637 11.9055 18 9.63158 18C4.3122 18 0 13.9706 0 9C0 4.02944 4.3122 0 9.63158 0V0ZM9.63158 2C5.49429 2 2.14035 5.13401 2.14035 9C2.14035 12.866 5.49429 16 9.63158 16C13.7689 16 17.1228 12.866 17.1228 9C17.1228 5.13401 13.7689 2 9.63158 2Z" fill="black" />
                    </svg>


                </div>


            </div>

        </div>
    )
}
