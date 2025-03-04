import { Header } from "../../components/Header/Header";
import { Joke } from "../../components/Joke/Joke";

import "./Chistes.css"

export const Chistes = () => {
    return (
        <>
            <div className="contenedor-parrafo">
               <h1>Chistes</h1> 
               <p>Elige una categoria para obtener un chiste</p>
            </div>
            <Header
                color="fondo"
                
            />

            <Joke />
        </>
    )
}