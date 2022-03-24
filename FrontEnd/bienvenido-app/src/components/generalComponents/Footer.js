import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/GlobalStyle.css';
import emailjs from "emailjs-com";
import {toast} from 'react-toastify';


export default function Footer(){
    const form = useRef();

function enviarEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_43jbz67', form.current, 'rkTSTT9GUnwsRGPj7')
      .then((result) => {
        toast.info("Registro hecho");
        toast.info("¡Revisa tu bandeja de entrada ene email!");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
 


//const Footer = () => {
    return (
        <>
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


                    <div className="box">
                        <h3> enlaces útiles </h3>
                        <Link to="/emergencia" className="link"> centro de ayuda </Link>
                        <Link to="/contact" className="link"> hacer preguntas </Link>
                        <Link to="/contact" className="link"> enviar comentarios </Link>
                        <Link to="#" className="link"> política privada </Link>
                        <Link to="#" className="link"> condiciones de uso </Link>
                    </div>

                    <div className="box">
                        <h3> boletín </h3>
                        <p> suscríbete para recibir las últimas actualizaciones </p>
                        <form ref={form} onSubmit={enviarEmail}>
                        <input
                                type="text"
                                name="nombre"
                                placeholder="Escriba su nombre"
                                id=""
                                className="nombre"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Escriba su e-mail"
                                id=""
                                className="email"
                            />
                            <button type="submit" className="btn">cadastrar</button>
                        </form>
                    </div>
                </div>
                <div className="credit">
                    desarrollado por <span>Squad34</span> | reservados todos los derechos!
                </div>
            </section>
        </>
    )
}


