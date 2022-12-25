import { Children, createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const FiltrosContext = createContext()

const FiltrosProvider = ({ children }) => {
    
    const [datos, setDatos] = useState([])
    const [busqueda, setBusqueda] = useState('');

    const [categoria, setCategoria] = useState({
        status: 'alive',
        gender: 'male',
    })


    useEffect(() => {
        //consultar api
        const consultarApi = async () => {
            const { data } = await axios(`https://rickandmortyapi.com/api/character/?name=${busqueda}&status=${categoria.status}&gender=${categoria.gender}`);
            setDatos(data.results)
        }

        consultarApi()

    }, [categoria, busqueda])


    return (
        <FiltrosContext.Provider
            value={{
                categoria,
                setCategoria,
                datos, busqueda, setBusqueda

            }}>
            {children}
        </FiltrosContext.Provider>
    )
}


export default FiltrosContext

export {
    FiltrosProvider
}

