import React from "react"
import { Link } from 'react-router-dom';
import '../../styles/GlobalStyle.css'
//import '../../styles/style.scss'


const Header = () => {
    return (
        
     <header className="header">
        <Link to="home.html" className="logo"> BienVenido </Link>
        
        <nav className="navbar">
            <div id="close-navbar" className="fas fa-times"></div>
            <Link to="home.html">Comienzo</Link>
            <Link to="about.html">Acerca de</Link>
            <Link to="work.html">trabajos</Link>
            <Link to="contact.html">Contactos</Link>
        </nav>

        <div className="icons">
            <div id="account-btn" className="fas fa-user"></div>
            <div id="menu-btn" className="fas fa-bars"></div>
        </div>
    </header>
    )
}
export default Header;