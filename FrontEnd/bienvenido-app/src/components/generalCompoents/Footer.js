import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/GlobalStyle.css'
//import '../../styles/style.scss'


const Footer = () => {
    return (

        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3><i>BienVenido</i></h3>
                    <p>
                        Todo lo que necesita saber sobre su nuevo hogar lo puede encontrar aquí.
                    </p>
                    <div className="share">
                        <Link to="#" className="fab fa-facebook-f"></Link>
                        <Link to="#" className="fab fa-twitter"></Link>
                        <Link to="#" className="fab fa-instagram"></Link>
                        <Link to="#" className="fab fa-linkedin"></Link>
                    </div>
                </div>
            </div>

            <div className="box">
                <h3> enlaces útiles </h3>
                <Link to="#" className="link"> centro de ayuda </Link>
                <Link to="contact.html" className="link"> hacer preguntas </Link>
                <Link to="#" className="link"> enviar comentarios </Link>
                <Link to="#" className="link"> política privada </Link>
                <Link to="#" className="link"> condiciones de uso </Link>
            </div>

            <div className="box">
                <h3> boletín </h3>
                <p> suscríbete para recibir las últimas actualizaciones </p>
                <form action="">
                    <input
                        type="E-mail"
                        name=""
                        placeholder="Escriba su e-mail"
                        id=""
                        className="email"
                    />
                    <button type="submit" className="btn">cadastrar</button>
                </form>
            </div>
            <div className="credit">
                desarrollado por <span>Squad34</span> |reservados todos los derechos!
            </div>
        </section>

    )
}

export default Footer;