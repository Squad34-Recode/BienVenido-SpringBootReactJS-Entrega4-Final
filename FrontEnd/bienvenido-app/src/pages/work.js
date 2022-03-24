import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import Image1 from '../images/linkedin.jpg';
import Image2 from '../images/indeed.jpg';
import Image3 from '../images/getninja.jpg';
import Image4 from '../images/empregos,com.jpg';
import Image5 from '../images/infojoobs.jpg';
import Image6 from '../images/vagas.jpg';
import Image7 from '../images/cie.jpg';
import Image8 from '../images/sine.jpg';
import Image9 from '../images/trovit.jpg';



const Work = () => {
    useEffect(() => {
        Aos.init({duration:3000});
    }, []);


    return (
        <>
            <section className='breadcrumb-title'>
                <h1>Trabajos</h1>
                <ul class="breadcrumb">
                    <li><Link to='/' className='breadcrumb-link'>Comienzo</Link></li>
                    <li>/</li>
                    <li>Trabajos</li>
                </ul>
            </section>

            <section class="courses">
                <h1 class="heading">sitios famosos de búsqueda de empleo</h1>

                <div className="box-container">
                <div data-aos ="flip-up" className="box">
                        <div className="image">
                            <img src={Image2} />

                        </div>
                        <div className="content">
                            <h3>Acerca de indeed</h3>
                            <p>
                                De hecho, es el sitio de empleo n. ° 1 del mundo1 con más de 250 millones de visitantes únicos2 por mes.
                                Indeed trabaja para poner a los solicitantes en primer lugar,
                                brindándoles acceso gratuito a la búsqueda de empleo, publicación de currículums y búsqueda de empresas.
                                Todos los días, conectamos a millones de personas con nuevas oportunidades.
                            </p>
                            <a className="btn"
                                href="https://br.indeed.com/?from=gnav-homepage"
                                target="_blank"
                                rel="noopener noreferrer">visita la página web</a>
                            <div class="icons">

                            </div>
                        </div>
                    </div>

                    <div data-aos ="flip-up" className="box">
                        <div className="image">
                            <img src={Image1} />
                        </div>
                        <div className="content">
                            <h3>Acerca de LinkedIn</h3>
                            <p>
                                LinkedIn es la red profesional más grande del mundo,
                                con más de 774 millones de usuarios en más de 200 países y territorios en todo el mundo.
                            </p>
                            <a className="btn"
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer">visita la página web</a>
                            <div className="icons">

                            </div>
                        </div>
                    </div>

                    <div data-aos ="flip-up" className="box">
                        <div className="image">
                            <img src={Image3} />
                        </div>
                        <div className="content">
                            <h3>Acerca De GetNinjas</h3>
                            <p>
                                GetNinjas es una aplicación disponible para teléfonos Android e iOS
                                que tiene como objetivo conectar clientes con profesionales.
                                ¡Hay más de 500 tipos de servicios que puede contratar o proporcionar!
                            </p>
                            <a className="btn"
                                href="https://www.getninjas.com.br/"
                                target="_blank"
                                rel="noopener noreferrer">visita la página web</a>
                            <div className="icons">

                            </div>
                        </div>
                    </div>
                    </div>
                    <br/>

                    <div className="box-container">
                    <div data-aos ="fade-left" className="box">
                        <div className="image">
                            <img src={Image4} />

                        </div>
                        <div className="content">
                            <h3>Acerca de empregos</h3>
                            <p>
                                Empregos.com.br se encuentra entre los principales portales de empleo y carrera de Brasil,
                                siendo el único que cuenta con un canal exclusivo para la orientación profesional.
                                Hay más de 190.000 empresas registradas, más de 3,3 millones de CV y más de 150 mil vacantes.
                            </p>
                            <a className="btn"
                                href="https://www.empregos.com.br/"
                                target="_blank"
                                rel="noopener noreferrer">visita la página web
                            </a>
                            <div className="icons">

                            </div>
                        </div>
                    </div>

                    <div data-aos ="fade-left" className="box">

                        <div className="image">
                            <img src={Image5} />
                        </div>
                        <div className="content">
                            <h3>Acerca de infojobs</h3>
                            <p>
                                InfoJobs es una plataforma de oportunidades profesionales y de búsqueda de talento que desde hace
                                más de 15 años ofrece herramientas avanzadas para gestionar y facilitar los procesos de selección de empresas.
                                Y los candidatos tienen la ventaja de registrar su currículum de forma gratuita.
                            </p>
                            <a className="btn"
                                href="https://www.infojobs.com.br/"
                                target="_blank"
                                rel="noopener noreferrer">visita la página web</a>
                            <div className="icons">

                            </div>
                        </div>
                    </div>

                    <div data-aos ="fade-left" className="box">
                        <div className="image">
                            <img src={Image6} />

                        </div>
                        <div className="content">
                            <h3>Acerca de Vagas</h3>
                            <p>
                                Nós temos nossa própria cultura e jeito de trabalhar. Somos uma empresa de tecnologia radicalmente horizontal,
                                ou seja, sem chefes, onde mais de 140 pessoas trabalham diariamente por um propósito.
                            </p>
                            <a className="btn"
                                href="https://www.vagas.com.br/"
                                target="_blank"
                                rel="noopener noreferrer">visita la página web</a>
                            <div className="icons">

                            </div>
                        </div>
                    </div>
                    </div>
                    <br/>
                    <div className="box-container">
                    <div data-aos ="fade-right" className="box">
                        <div className="image">
                            <img src={Image7} />
                        </div>
                        <div className="content">
                            <h3>Acerca De CIEE</h3>
                            <p>
                                O Centro de Integração Empresa-Escola – CIEE é uma associação civil de direito privado,
                                sem fins lucrativos e de fins não econômicos, reconhecida como entidade de assistência social que,
                                por meio de diversos programas, dentre eles o de aprendizagem e o estágio de estudantes,
                                possibilita aos adolescentes e jovens uma formação integral, ingressando-os ao mundo do trabalho.
                            </p>
                            <a className="btn"
                                href="https://portal.ciee.org.br/"
                                target="_blank"
                                rel="noopener noreferrer">visita la página web</a>
                            <div className="icons">

                            </div>
                        </div>
                    </div>

                    <div data-aos ="fade-right" className="box">
                        <div className="image">
                            <img src={Image8} />

                        </div>
                        <div className="content">
                            <h3>Acerca De Sine</h3>
                            <p>
                                Serviço de busca de vagas de emprego no Sistema Nacional de Emprego (Sine)
                                e agendamento de entrevista com possíveis empregadores.
                            </p>
                            <a className="btn"
                                href="https://www.gov.br/pt-br/servicos/buscar-emprego-no-sistema-nacional-de-emprego-sine"
                                target="_blank"
                                rel="noopener noreferrer">visita la página web</a>
                            <div className="icons">

                            </div>
                        </div>
                    </div>

                    <div data-aos ="fade-right" className="box">
                        <div className="image">
                            <img src={Image9} />
                        </div>
                        <div className="content">
                            <h3>Acerca De Trovit</h3>
                            <p>
                                ¿Qué trabajo realmente te apasiona? ¿Cómo es esa casa que siempre quisiste?
                                No podemos soñar con tu vida ideal, pero sí que podemos ayudarte a encontrarla.
                            </p>
                            <a className="btn"
                                href="https://empregos.trovit.com.br/"
                                target="_blank"
                                rel="noopener noreferrer">visita la página web</a>
                            <div className="icons">

                            </div>
                        </div>
                    </div>
                </div>
        
            </section>
        </>
    )
}
export default Work;