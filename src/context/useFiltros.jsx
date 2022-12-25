import { useContext } from "react";
import FiltrosContext from "../components/FiltrosProvider";



const useFiltros = () =>{
    return useContext(FiltrosContext)
}
export default useFiltros;