import { Link, NavLink } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {

    return (

        <header className="navbar">

            <div className="container navbar-container">

                <Link
                    to="/"
                    className="logo">

                    🚗 Car AI Advisor

                </Link>

                <nav>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>

                        Home

                    </NavLink>

                    <NavLink
                        to="/recommendations"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>

                        Recommendations

                    </NavLink>

                    <NavLink
                        to="/compare"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>

                        Compare

                    </NavLink>

                    <NavLink to="/cars" className={({ isActive }) => isActive ? "active" : ""}>
                        Cars
                    </NavLink>

                    <NavLink to="/history" className={({ isActive }) => isActive ? "active" : ""}>
                        History
                    </NavLink>
                    <NavLink to="/add-review" className={({ isActive }) => isActive ? "active" : ""}>
                        Reviews
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                        Contact
                    </NavLink>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;