import { ErrorBoundary } from "react-error-boundary";
import { Header } from "../../components/Header/Header";
import { Joke } from "../../components/Joke/Joke";
import { ErrorFallBack } from "../../components/Error/ErrorFallBack";

import "./Chistes.css"


export const Chistes = () => {
    return (
        <>
            <div className="contenedor-parrafo">
               <h1>Chistes</h1> 
               <p className="parrafo-chiste">Elige una categoria para obtener un chiste</p>
            </div>
            <div className="image-chuck3"><img src="chuck3.png" alt="imagen chuck pistolas" style={{ width: '600px', height: 'auto' }}/></div> 
            <Header
              color="fondo"
            />

            <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <Joke />
            </ErrorBoundary>
        </>
    )
}