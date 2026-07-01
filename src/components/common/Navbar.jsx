import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import "../../styles/navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header className="navbar">

            <div className="container navbar-container">

                <Link
                    to="/"
                    className="logo">

                    🚗 Car AI Advisor

                </Link>

                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}>

                    {menuOpen ? <FaTimes /> : <FaBars />}

                </button>

                <nav className={menuOpen ? "nav-links active-menu" : "nav-links"}>

                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </NavLink>

                    <NavLink to="/recommendations" onClick={() => setMenuOpen(false)}>
                        Recommendations
                    </NavLink>

                    <NavLink to="/compare" onClick={() => setMenuOpen(false)}>
                        Compare
                    </NavLink>

                    <NavLink to="/cars" onClick={() => setMenuOpen(false)}>
                        Cars
                    </NavLink>

                    <NavLink to="/history" onClick={() => setMenuOpen(false)}>
                        History
                    </NavLink>

                    <NavLink to="/add-review" onClick={() => setMenuOpen(false)}>
                        Reviews
                    </NavLink>

                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </NavLink>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;