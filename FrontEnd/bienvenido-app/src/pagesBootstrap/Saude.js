import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css'

const Saude = () => {
    return (
        <Container className="container-reactBootstrap" fluid="md">
            <FloatingButton />
            <h1>
                Salud y Bien estar
            </h1>
            <p>
                Como refugiado o solicitante de asilo, usted tiene derecho de
                acceder al Sistema Único de Salud (SUS) como cualquier ciudadano
                brasileño. El SUS es el sistema gratuito de salud que comprende
                procedimientos de básica, media y alta complejidad.
            </p>

            <p className="subtitle-reactBootstrap"><b>SUS - Sistema Único de Salud</b></p>
            <p>
                El SUS es un sistema de salud pública que garantiza el acceso
                universal y gratuito a toda la población del país, incluidos los
                refugiados y solicitantes de asilo. Los servicios del SUS van desde
                procedimientos básicos hasta los más complejos, servicios de
                emergencia y emergencia, atención hospitalaria, asistencia
                farmacéutica, entre otros. Es posible encontrar hospitales públicos
                y Unidades Básicas de Salud (UBS) en todos los estados brasileños.
            </p>
            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/942840793348063242/1200px-SUS_apenas_preenchimento.svg.png" alt="SUS logo" />
                <figcaption className="figure-caption">Logotipo del sistema único de salud SUS</figcaption>
            </figure>

            <p>
                En las Unidades Básicas de Salud (UBS), puede consultar con un
                médico general. Además, si es necesario, el médico puede remitirlo a
                un especialista. Cuando vaya a un UBS por primera vez, traiga su Protocolo /
                Carteira/ RNE y CPF. Usted recibirá una tarjeta del SUS (sistema de
                salud). Este documento guarda toda la información médica sobre el
                individuo y proporciona acceso a consultas y exámenes. Por lo tanto,
                cada vez que busque atención médica, debe traer su tarjeta SUS.
                <br />
                <b>Unidad Pronto-Atendimento (UPA)</b> :
                En caso de urgencia o emergencia, diríjase a estas unidades que
                ofrecen atención médica básica las 24 horas del día, los 7 días de
                la semana. <br />
                <b> Hospitales y Unidad de Pronto Socorro Unidades (UPS)</b> :
                algunas de estas unidades están abiertas 24/7. Estos servicios
                brindan atención médica para los casos más complejos, incluyendo
                casos en que hay necesidad de hospitalización. Llame a una
                ambulancia a las 192.<br />
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/942843664659513374/DSC_6431.jpg" alt="Placa Upa" />
                <figcaption className="figure-caption">Plato UPA</figcaption>
            </figure>

            <p className='subtitle-reactBootstrap'>
                <b>¿Tendré que pagar por la medicina que me recetó el médico?</b>
            </p>
            <p>
                Es posible tener acceso a varios medicamentos gratuitos en el centro
                de salud del SUS donde se le consulta. Para obtener la medicina de
                manera gratuita, es necesario presentar la receta médica, la tarjeta
                SUS y un documento de identidad.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/942853483923668992/pexels-pixabay-208512.jpg" alt="Placa Upa" />
                <figcaption className="figure-caption">Medicamentos y Drogas</figcaption>
            </figure>

            <p className='subtitle-reactBootstrap'><b>¿Qué precauciones de salud debo tener en Brasil?</b></p>
            <p>
                Usted está residiendo en un país tropical con un clima caliente y
                húmedo. Es muy importante que tome ciertas precauciones. En primer
                lugar, debe beber mucha agua todos los días, y asegúrese de mantener
                a los niños hidratados. Por otra parte, durante los dos últimos
                años, Brasil ha experimentado brotes de dos enfermedades
                transmitidas por mosquitos, el dengue y zika. Es muy importante
                observar las instrucciones del gobierno sobre la prevención y lucha
                contra esas enfermedades.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/942854547758534656/pexels-vincent-gerbouin-1168764.jpg" alt="Paisagem Tropical" />
                <figcaption className="figure-caption">Paisaje tropical, común en Brasil</figcaption>
            </figure>

            <p className='subtitle-reactBootstrap'><b>Vacunación</b></p>
            <p>
                En Brasil, a los padres se les exige que vacunen a sus hijos. Los
                niños, a pesar de su nacionalidad o si son solicitantes de refugio o
                refugiados, pueden ser vacunados gratuitamente en los centros de
                salud pública. El Programa Nacional de Inmunización (PNI) ofrece a
                las personas todas las vacunas recomendadas por la Organización
                Mundial de la Salud (OMS) en el Calendario Nacional de Vacunación.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/942854820946124930/pexels-gustavo-fring-3985170.jpg" alt="Paisagem Tropical" />
                <figcaption className="figure-caption">Vacunación por SUS</figcaption>
            </figure>

        </Container>)
}

export default Saude;