import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link to="/" className="title" >Owl</Link>
            <div className="menu" onClick={() => (setMenuOpen(!menuOpen))}>
                {menuOpen?<FaTimes/>:<FaBars />}
            </div>
            <ul className={menuOpen?"open":""}>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
