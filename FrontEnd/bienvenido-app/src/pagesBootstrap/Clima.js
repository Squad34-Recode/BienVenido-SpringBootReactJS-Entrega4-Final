import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css'

const Clima = () => {

    return (
        <Container className='container-reactBootstrap' fluid='md'>
            <FloatingButton />

            <h1>Clima Brasileño</h1>
            <p>
                Brasil tiene el 93% de su territorio ubicado en el Hemisferio Sur, el resto (7%) está en el Hemisferio Norte, lo que significa que el territorio se encuentra en la zona intertropical del planeta, con excepción de la región Sur.
            </p>
            <p>
                Debido a la inmensidad del territorio brasileño (8.514.876 km²), se identifican varios tipos de climas, siendo los principales: ecuatorial, tropical, tropical de altura, tropical húmedo, semiárido y subtropical.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943332577559867392/pexels-akil-mazumder-1072824.jpg" alt="Planta na palma da mão" />
                <figcaption className="figure-caption">Flora brasileña en la palma de tu mano.</figcaption>
            </figure>

            <p className='subtitle-reactBootstrap'><b>Clima Ecuatorial</b></p>
            <p>
                El clima ecuatorial se identifica en casi todos los estados de la región Norte, además de parte de Mato Grosso y Maranhão. Esta característica climática se caracteriza por alta temperatura, alta humedad y baja amplitud térmica, variando entre 24°C y 26°C por año. La cantidad de lluvia es abundante, con índices pluviométricos por encima de los 2.000 mm, prácticamente no se perciben periodos secos. La selva amazónica está influenciada por este clima.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943330727603372042/floresta-temperada.jpg" alt="Vegetação Equatorial" />
                <figcaption className="figure-caption">La vegetación del clima ecuatorial brasileño.</figcaption>
            </figure>

            <p className='subtitle-reactBootstrap'><b>Clima Tropical</b></p>
            <p>
                El clima tropical influye en gran parte del centro del país, especialmente en los estados del Medio Oeste,
                incluidas partes de Maranhão, Piauí, Ceará, Bahía y Minas Gerais. En general, las temperaturas son altas
                durante la mayor parte del año, con un promedio de 24°C, y el rango de temperatura fluctúa entre 5°C y 6°C por
                año. La cantidad de lluvia es de alrededor de 1.500 mm por año, con dos estaciones bien definidas: una
                estación seca (mayo a septiembre) y una estación lluviosa (octubre a abril).
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943330728140218430/clima-tropical-dedetizadora-panda-1024x768-1024x768.jpg" alt="Costa Tropical" />
                <figcaption className="figure-caption">Una costa tropical típica de los estados brasileños</figcaption>
            </figure>

            <p className='subtitle-reactBootstrap'><b>Clima Tropical de Altura</b></p>
            <p>
                El clima tropical de altura está presente en las regiones montañosas y altiplanicies, especialmente en la
                región Sudeste. En estos lugares existe baja amplitud térmica, la temperatura promedio oscila entre 17°C y
                22°C, y la cantidad de lluvia es de 1.500 mm por año.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943331880281980958/serra-da-mantiqueira.jpg" alt="Montanha e morros" />
                <figcaption className="figure-caption">Montañas y regiones montañosas de Brasil</figcaption>
            </figure>

            <p className='subtitle-reactBootstrap'><b>Clima Tropical Húmedo</b></p>
            <p>
                El clima tropical húmedo ocurre principalmente en la costa este y sur de Brasil, caracterizándose por alta
                temperatura y alto contenido de humedad. Las temperaturas medias anuales rondan los 25°C y las precipitaciones
                entre 1250 mm y 2000 mm.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943332030110904380/floresta-amazonica.jpg" alt="Rios e Pantanos" />
                <figcaption className="figure-caption">Pantanos y ríos con vegetación</figcaption>
            </figure>

            <p className='subtitle-reactBootstrap'><b>Clima Semiárido</b></p>
            <p>
                El clima semiárido es propio de la región Nordeste, especialmente en el interior, lugar conocido como el
                polígono de sequía, debido a la escasez de lluvias. Tiene temperaturas altas durante todo el año, el promedio
                anual varía entre 26°C y 28°C. Las lluvias son escasas, con un promedio anual de menos de 750 mm, además,
                están mal distribuidas.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943330727880163368/geografia-semiarido-clima.jpg" alt="Caatinga" />
                <figcaption className="figure-caption">Caatinga, bioma típico del semiárido brasileño</figcaption>
            </figure>

            <p className='subtitle-reactBootstrap'><b>Clima Subtropical</b></p>
            <p>
                El clima subtropical se da sólo en la región Sur, esta característica climática es totalmente diferente al
                resto de Brasil. Las temperaturas medias anuales rondan los 18°C, con amplitud térmica elevada. Las lluvias
                están bien distribuidas, los índices pluviométricos superan los 1.250 mm anuales.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2018/11/vegetacao-do-brasil-uma-riqueza-incalculavel-que-vem-da-variedade-9.jpg" alt="Bioma genérico subtropical" />
                <figcaption className="figure-caption">Bioma tipo Pampa encontrado en el Rio Grande do Sul</figcaption>
            </figure>

        </Container>
    )
};

export default Clima;