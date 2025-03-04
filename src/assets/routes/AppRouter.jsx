import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { About } from "../pages/aboute/About"
import { Chistes } from "../pages/chistes/Chistes"
import { Navbar } from "../components/Navbar/Navbar"
import { Joke } from "../components/Joke/Joke"





export const AppRouter = () => {
    return (
        <>
           <Navbar />
           <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/joke" element={<Joke />}/>
               <Route path="/chistes" element={<Chistes />}/>
           </Routes>
        </>
    )
}