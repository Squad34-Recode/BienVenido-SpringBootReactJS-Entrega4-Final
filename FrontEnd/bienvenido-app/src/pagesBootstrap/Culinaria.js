import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css';

const Culinaria = () => {

    return (
        <Container className='container-reactBootstrap' fluid='md'>
            <FloatingButton />

            <h1>
                Cocina Brasileña
            </h1>

            <p>
                Conocer la cocina brasileña es ir más allá de los platos, es como
                hacer un verdadero viaje que nos lleva a un conocimiento profundo de
                las culturas y raíces de Brasil. Esto se debe a que cada región
                tiene sus propias características, influenciadas por la mezcla que
                reúne tradición, ingredientes y alimentos introducidos por los
                pueblos indígenas e inmigrantes. En Youtube es posible encontrar varios canales que enseñan sobre la
                cocina brasileña, haga <a href="https://youtube.com/playlist?list=PLeNuwEIIktf4zDz1_bUIqzoZZHm-4Hsey">clic aquí </a> para ver algunas recomendaciones.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943224878964817930/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg" alt="Diversidad de la cocina brasileña" />
                <figcaption className="figure-caption">Diversidad de la cocina brasileña</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b>Cocina brasileña en el Norte</b></p>
            <p>
                Considerado el mayor ejemplo de cocina típicamente nacional,
                combina características indígenas y europeas. Sus principales
                ingredientes son el cupuaçu, el guaraná, la mandioca, el jambu, el
                pirarucú, el tucunaré, el achiote, además del famoso açaí y las
                nueces de Brasil.Los platos típicos son: Pato no Tucupi, Tacacá y
                Maniçoba.
            </p>

            <p className="subtitle-reactBootstrap"><b>Cocina brasileña en el Noreste</b></p>
            <p>
                Mariscos, raíces, condimentos especiados y carne seca, diversidad
                gastronómica resultado de las variaciones climáticas que afectan a
                la región, que también sufre de influencias africanas y portuguesas.
                Sus ingredientes principales son aceite de palma, camarones,
                cangrejo, leche de coco, guanábana, jengibre, mandioca y maíz. Los
                platos típicos son el acarajé, la buchada, el cangrejo, la cocada,
                el cuscús, la paçoca, la tapioca y el sarapatel.
            </p>

            <p className="subtitle-reactBootstrap"><b>Cocina brasileña en el Medio Oeste</b></p>
            <p>
                Fuerte en la ganadería, la cocina sin duda se centra en la carne de
                res, cabra y cerdo, que aún recibe influencia indígena e inmigrantes
                africanos, portugueses, italianos y sirios. Además, el menú regional
                también cuenta con carnes exóticas y pescados típicos, debido a la
                riqueza de la fauna del Pantanal. Entre los ingredientes más
                utilizados en la región se encuentran la cecina, la yerba mate, el
                pequi, la yuca y el maíz. Los platos típicos son el arroz con pequi,
                la sopa paraguaya, el empadão de Goiás, el caldo de piraña y la vaca
                anegada.
            </p>

            <p className="subtitle-reactBootstrap"><b>Cocina brasileña en el Sur</b></p>
            <p>
                Con una fuerte influencia de las colonias europeas allí instaladas,
                los platos del Sur mezclan referencias italianas, alemanas,
                portuguesas y españolas. En Rio Grande do Sul, la barbacoa es el
                plato principal, otros estados también tienen pasta, polenta, pollo,
                raíces y granos. Entre los ingredientes más utilizados destacamos la
                carne de res y ovino, la harina de maíz y la yerba mate. Los platos
                típicos son el asado, el barreado, el galeto, el arroz carreteiro,
                los capeletti y la sopa de Santa Catarina.
            </p>

            <p className="subtitle-reactBootstrap"><b>Cocina brasileña en el Sureste</b></p>
            <p>
                La más mestiza de todas las regiones, la cocina del Sudeste recibe
                hoy varias influencias, nacionales e internacionales, sin embargo,
                inicialmente la esencia de la cocina era indígena, portuguesa y
                africana, con raíces, carnes, granos y vegetales. Actualmente los ingredientes principales son arroz, frijoles, huevos, carnes, pasta,palmitos, mandioca, plátanos, patatas y fécula. Dentre los platos
                típicos son el tutú de frijol, torneado a paulista, guiso capixaba,
                estofado de frijoles, picadillo de São Paulo y pan de queso.
            </p>


        </Container>
    )
}

export default Culinaria;