import { Header } from "../../components/Header/Header";

import "./About.css"

export const About = () => {
    return (
        <>
            <div className="contenedor-parrafo">
               <h1>Quien es Chuck Norris</h1> 
               <p className="parrafo">Chuck Norris es una leyenda viva del cine de acción, un artista marcial consumado, un autor prolífico y un hombre de valores inquebrantables. Su influencia y legado perdurarán mucho más allá de los límites de la pantalla, haciendo de él una figura icónica y admirada en la historia del entretenimiento.</p>
            </div>
            <div className="image-chuck"><img src="chuck2.png" alt="imagen chuck pistolas" style={{ width: '660px', height: 'auto' }}/></div>  
            <img
                src="fuego.gif" 
                alt="GIF de Chuck Norris"
                className="gif-chuck"
            /> 
            <img
                src="fuego.gif" 
                alt="GIF de Chuck Norris"
                className="gif-chuck2"
            />
                

            <Header
                color="fondo"
                
            />
            
            
        </>
    )
}