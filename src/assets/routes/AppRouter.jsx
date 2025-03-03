import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { About } from "../pages/aboute/About"
import { Navbar } from "../components/Navbar/Navbar"
import { Joke } from "../components/Joke/Joke"
import { Chistes } from "../pages/chistes/Chistes"




export const AppRouter = () => {
    return (
        <>
           <Navbar />
           <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/joke" element={<Joke />}/>
               <Route path="chistes" element={<Chistes />}/>
           </Routes>
        </>
    )
}