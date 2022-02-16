import React from "react";
import { Link } from 'react-router-dom';

const Slide = () => {
    return (
        <section className="teachers">
            <h1 className="heading">← organizadores →</h1>

            <div className="swiper teachers-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slide">
                        <div className="image">
                            <img src="images/pedrosouz.png" alt="" />
                            <div className="share">
                                <Link to="#" className="fab fa-facebook-f"></Link>
                                <Link to="#" className="fab fa-twitter"></Link>
                                <Link to="#" className="fab fa-instagram"></Link>
                                <Link to="https://www.linkedin.com/in/jo%C3%A3o-pedro-g-souza-4b660621b/" className="fab fa-linkedin"></Link>
                            </div>
                        </div>
                        <div className="content">
                            <h3>João pedro</h3>
                            <span>Front-end developer</span>
                        </div>
                    </div>

                    <div className="swiper-slide slide">
                        <div className="image">
                            <img src="images/cj.jpg" alt="" />
                            <div className="share">
                                <Link to="#" className="fab fa-facebook-f"></Link>
                                <Link to="#" className="fab fa-twitter"></Link>
                                <Link to="#" className="fab fa-instagram"></Link>
                                <Link to="https://www.linkedin.com/in/carlosjunior137/" className="fab fa-linkedin"></Link>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Carlos de Lima Júnior</h3>
                            <span>Back-end developer</span>
                        </div>
                    </div>

                    <div className="swiper-slide slide">
                        <div className="image">
                            <img src="images/pedrosantos.png" alt="" />
                            <div className="share">
                                <Link to="#" className="fab fa-facebook-f"></Link>
                                <Link to="#" className="fab fa-twitter"></Link>
                                <Link to="#" className="fab fa-instagram"></Link>
                                <Link to="https://www.linkedin.com/in/pedro-santos-3a27921a3/" className="fab fa-linkedin"></Link>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Pedro Santos</h3>
                            <span>Front-end developer</span>
                        </div>
                    </div>

                    <div className="swiper-slide slide">
                        <div className="image">
                            <img src="images/gabriel (1).png" alt="" />
                            <div className="share">
                                <Link to="#" className="fab fa-facebook-f"></Link>
                                <Link to="#" className="fab fa-twitter"></Link>
                                <Link to="#" className="fab fa-instagram"></Link>
                                <Link to="https://www.linkedin.com/in/gabriel-oliveira-a82332216/" className="fab fa-linkedin"></Link>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Gabriel Oliveira</h3>
                            <span>Full-Stack developer</span>
                        </div>
                    </div>



                    <div className="swiper-slide slide">
                        <div className="image">
                            <img src="images/diogo (1).jpg" alt="" />
                            <div className="share">
                                <Link to="#" className="fab fa-facebook-f"></Link>
                                <Link to="#" className="fab fa-twitter"></Link>
                                <Link to="#" className="fab fa-instagram"></Link>
                                <Link to="https://www.linkedin.com/in/diogo-reis-89877b39/" className="fab fa-linkedin"></Link>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Diogo Ramalho</h3>
                            <span>Back-end developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Slide;