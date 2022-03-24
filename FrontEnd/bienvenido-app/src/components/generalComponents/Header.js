import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';
import bienVenidoLogo from '../../images/logotipobien.png';

import '../../styles/GlobalStyle.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <img src={bienVenidoLogo} alt="" className="logo" />
                <Link to="/" className="logo-name"> BienVenido </Link>
                <nav className="navbar">
                    <div id="close-navbar" className="fas fa-times"></div>
                    <Link to="/">Comienzo</Link>
                    <Link to="/about">Acerca de</Link>
                    <Link to="/work">Trabajos</Link>
                    <Link to="/contact">Contactos</Link>
                    <Link to="/"><FontAwesomeIcon id="account-btn" icon={faUser} size='1.5x' color="white" /></Link>
                </nav>

                <div className="icons">
                    <FontAwesomeIcon id="menu-btn" icon={faBars} size='3x' color="white" />
                </div>
            </header >
        </>
    )
}
export default Header;