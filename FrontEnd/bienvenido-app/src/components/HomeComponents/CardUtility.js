import React from "react";
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import translator from '../../images/Online translator-pana.png'
import paper from '../../images/Paper map-amico.png'
import Emergency from '../../images/Emergency call-pana.png'

import '../../styles/GlobalStyle.css'

const CardUtility = () => {

    return (
        <>
            <section class="home-courses">
                <h1 className="heading">Utilidades</h1>
                <Swiper
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper home-courses-slider"
                >
                    <SwiperSlide>
                        <div class="slide">
                            <div class="image">
                                <img src={translator} alt="ilustração tradutor" />
                                <h3>TRADUCTOR</h3>
                            </div>
                            <div class="content">
                                <h3>TRADUCTOR</h3>
                                <p>traductor para entrenar un nuevo idioma</p>
                                <a href="https://translate.google.com.br/?hl=pt-BR&sl=es&tl=pt&op=translate" target="_blank"
                                    class="btn" rel="noreferrer">Acceso</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
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
                                <a href="https://www.google.com.br/maps" target="_blank" className="btn" rel="noreferrer">Acceso</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slide">
                            <div class="image">
                                <img src={Emergency} alt="" />
                                <h3>EMERGENCIA</h3>
                            </div>
                            <div className="content">
                                <h3>EMERGENCIA</h3>
                                <p>números en caso de que necesite ayuda</p>
                                <a href="https://help.unhcr.org/brazil/onde-encontrar-ajuda/telefones-de-emergencia/" target="_blank" className="btn" rel="noreferrer">Acceso</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper >
            </section>
        </>
    )
}
export default CardUtility;