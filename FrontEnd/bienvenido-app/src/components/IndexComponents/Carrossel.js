import React from "react";
import { Link } from 'react-router-dom';
import '../../script'

const Carrossel = () => {
    return(
        <section className="home">
            <div className="swiper home-slider">
                <div className="swiper-wrapper">
                    <section
                        className="swiper-slide slide inline">
                        <div className="content">
                            <h3>Bienvenido a Brasil!</h3>
                            <p>
                                Todo lo que necesita saber sobre su nuevo hogar lo puede encontrar aquí
                            </p>
                            <Link to="#" className="btn">vamos a empezar</Link>
                        </div>
                    </section>

                    <section
                        className="swiper-slide slide inline2 ">
                        <div className="content">
                            <h3>Bienvenido a Brasil!</h3>
                            <p>
                                Todo sobre documentación, derechos, ciudades, clima y empleo se puede encontrar aquí
                            </p>
                            <Link to="#" className="btn">vamos a empezar</Link>
                        </div>
                    </section>

                    <section
                        className="swiper-slide slide inline3">
                        <div className="content">
                            <h3>Bienvenido a Brasil!</h3>
                            <p>
                                información gratuita para los más diversos temas
                            </p>
                            <Link to="#" className="btn">vamos a empezar</Link>
                        </div>
                    </section>
                </div>

                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}
export default Carrossel; 