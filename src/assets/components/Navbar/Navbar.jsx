import { Link } from "react-router-dom"

import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav className="nav-container">
            <div>
            <ul className="ul-style">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/about"}>Sobre Chuck</Link>
                <Link to={"/chistes"}>Chistes</Link>  
            </ul>
            </div>

        </nav>
    )
}