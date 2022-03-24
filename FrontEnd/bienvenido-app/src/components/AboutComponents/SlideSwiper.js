import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cj from '../../images/cj.jpg';
import joaoPedro from '../../images/pedrosouz.png';
import diogao from '../../images/diogo (1).jpg'
import gabriel from '../../images/gabriel (1).png'
import pedro from '../../images/pedrosantos.png'

import '../../styles/SlideSwiper.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-cube";
import 'swiper/css/scrollbar';

const SlideSwiper = () => {
    return (
        <>
            <Swiper
                className="mySwiper slider"
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Lazy]}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={{ clickable: false }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img className="slider-image swiper-lazy" src={cj} alt="CJ Dev" />
                    <div class="content">
                        <h3>Carlos de Lima Junior</h3>
                        <span>FullStack developer</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slider-image swiper-lazy" src={joaoPedro} alt="John Boy Dev" />
                    <div class="content">
                        <h3>João pedro</h3>
                        <span>Front-end developer</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slider-image swiper-lazy" src={diogao} alt="Diogao Dev" />
                    <div class="content">
                        <h3>Diogo Ramalho</h3>
                        <span>FullStack developer</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slider-image swiper-lazy" src={gabriel} alt="GB Dev" />
                    <div class="content">
                        <h3>Gabriel Oliveira</h3>
                        <span>Full-Stack developer</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="slider-image swiper-lazy" src={pedro} alt="Pedrão Dev" />
                    <div class="content">
                        <h3>Pedro Santos</h3>
                        <span>Front-end developer</span>
                    </div>
                </SwiperSlide>
            </Swiper >
        </>
    )
}
export default SlideSwiper;