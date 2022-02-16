import React from "react";
import { Link } from 'react-router-dom';
import translator from '../../images/Online translator-pana.png'
import paper from '../../images/Paper map-amico.png'
import Emergency from '../../images/Emergency call-pana.png'

const CardUtility = () => {
    return (
        <section className="home-courses">
             <h1 className="heading">Utilidades</h1>

            <div className="swiper home-courses-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide">
                        <div className="image">
                            <img src={translator} alt="" />
                            <h3>TRADUCTOR</h3>
                        </div>
                        <div className="content">
                            <h3>TRADUCTOR</h3>
                            <p>traductor para entrenar un nuevo idioma</p>
                            <Link to="https://translate.google.com.br/?hl=pt-BR&sl=es&tl=pt&op=translate" target="_blank" className="btn">Acceso</Link>
                        </div>
                    </div>

                    <div className="swiper-slide slide">
                        <div className="image">
                            <img src={paper} alt="" />
                            <h3>GPS/MAPA</h3>
                        </div>
                        <div className="content">
                            <h3>GPS/MAPA</h3>
                            <p>
                                un mapa para obtener más información sobre su ubicación y sus
                                alrededores
                            </p>
                            <Link to="https://www.google.com.br/maps" target="_blank" className="btn">Acceso</Link>
                        </div>
                    </div>

                    <div className="swiper-slide slide">
                        <div className="image">
                            <img src={Emergency} alt="" />
                            <h3>EMERGENCIA</h3>
                        </div>
                        <div className="content">
                            <h3>EMERGENCIA</h3>
                            <p>números en caso de que necesite ayuda</p>
                            <Link to="https://help.unhcr.org/brazil/onde-encontrar-ajuda/telefones-de-emergencia/" target="_blank" className="btn">Acceso</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CardUtility;