// import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";


const NavBar = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="navbar">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">

                        <b>📰News-App</b>
                    </NavLink >


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                        {/* // ← 3-line icon */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">
                                    Home
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/business">
                                    Business
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/entertainment">
                                    Entertainment
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/general">
                                    General
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/health">
                                    Health
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/science">
                                    Science
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sports">
                                    Sports
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/technology">
                                    Technology
                                </NavLink >
                            </li>

                        </ul>


                        {/* Theme Toggle Button */}
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {/* {darkMode ? '☀️' : '🌙'} */}
                            {darkMode ? '☀️' : '🌙'}
                            {/* Ya ☀️ for light mode */}
                        </button>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;
