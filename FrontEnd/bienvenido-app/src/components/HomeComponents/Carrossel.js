import React from "react";
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import venezubra from '../../images/vevenezubra.jpg';
import crianca from '../../images/PicsArt_01-05-04.47.09.jpg';
import filaRefugiados from '../../images/venezuela-refugees-bolivar.jpg';

import "../../styles/SlideSwiper.css";
import "swiper/css";
import "swiper/css/pagination";

const Carrossel = () => {

    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="carousel mySwiper"
            >
                <SwiperSlide>
                    <section id="carousel-content1" className="carousel-content" >
                        <div className="content-container">
                            <h3>Bienvenido a Brasil!</h3>
                            <p>
                                Todo lo que necesita saber sobre su nuevo hogar lo puede encontrar aquí
                            </p>
                            <Link to='/trabalhos' class="btn">vamos a empezar</Link>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id="carousel-content2" className="carousel-content">
                        <div className="content-container">
                            <h3>Bienvenido a Brasil!</h3>
                            <p>
                                Todo sobre documentación, derechos, ciudades, clima y empleo se puede encontrar aquí
                            </p>
                            <Link to='/saude' class="btn">vamos a empezar</Link>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id="carousel-content3" className="carousel-content" >
                        <div className="content-container">
                            <h3>Bienvenido a Brasil!</h3>
                            <p>
                                información gratuita para los más diversos temas
                            </p>
                            <Link to='/culinaria' class="btn">vamos a empezar</Link>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Carrossel; 