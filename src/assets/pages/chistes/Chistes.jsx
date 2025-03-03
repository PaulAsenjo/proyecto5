import { Header } from "../../components/Header/Header";
import { Joke } from "../../components/Joke/Joke";


export const Chistes = () => {
    return (
        <>
            <Header 
                color= "joke" 
                title="Datos Random de Chuck Norris"
                subtitle="Acá podrás ver una selección de chistes según categoria"
            />
            <Joke />
        </>
    )
}