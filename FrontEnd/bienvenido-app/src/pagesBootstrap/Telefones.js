import React from 'react';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css';

const Telefones = () => {

    return (
        <Container className='container-reactBootstrap' fluid='md'>
            <FloatingButton />

            <h1>Líneas Telefónicas</h1>

            <p>
                La Marcación Directa a Distancia (DDD) es el sistema utilizado para llamadas de larga distancia basado en la inserción de prefijos regionales. En Brasil se utilizan 67 códigos de área diferentes, repartidos por todo el territorio nacional. Con tantos números diferentes, es fácil confundirse. Para ayudarte, enumeramos a continuación todos los códigos de los estados del brazil.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943307577557655602/pexels-neosiam-594452.jpg" alt="telefone e celular" />
                <figcaption className="figure-caption">El celular retiró al fijo en el siglo XXI </figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b>Centro Oeste </b></p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Distrito Federal (61)</ListGroup.Item>
                <ListGroup.Item as="li">Goiás (62 y 64)</ListGroup.Item>
                <ListGroup.Item as="li">Mato Grosso (65 y 66)</ListGroup.Item>
                <ListGroup.Item as="li">Mato Grosso del Sur (67)</ListGroup.Item>
            </ListGroup>

            <p className="subtitle-reactBootstrap"><b>Noreste </b></p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Alagoas (82)</ListGroup.Item>
                <ListGroup.Item as="li">Bahía (71, 73, 74, 75 y 77)</ListGroup.Item>
                <ListGroup.Item as="li">Ceará (85 y 88)</ListGroup.Item>
                <ListGroup.Item as="li">Maranhao (98 y 99) </ListGroup.Item>
                <ListGroup.Item as="li">Paraíba (83) </ListGroup.Item>
                <ListGroup.Item as="li">Pernambuco (81 y 87)</ListGroup.Item>
                <ListGroup.Item as="li">Piauí (86 y 89)</ListGroup.Item>
                <ListGroup.Item as="li">Río Grande del Norte (84)</ListGroup.Item>
                <ListGroup.Item as="li">Sergipe (79)</ListGroup.Item>
            </ListGroup>

            <p className="subtitle-reactBootstrap"><b>Norte </b></p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Acres (68)</ListGroup.Item>
                <ListGroup.Item as="li">Amapá (96) </ListGroup.Item>
                <ListGroup.Item as="li">Amazonas (92 y 97)</ListGroup.Item>
                <ListGroup.Item as="li">Pará (91, 93 y 94)</ListGroup.Item>
                <ListGroup.Item as="li">Rondonia (69) </ListGroup.Item>
                <ListGroup.Item as="li">Roraima (95)</ListGroup.Item>
                <ListGroup.Item as="li">Tocantins (63)</ListGroup.Item>
            </ListGroup>

            <p className="subtitle-reactBootstrap"><b>Sureste </b></p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Espírito Santo (27 y 28)</ListGroup.Item>
                <ListGroup.Item as="li">Minas Gerais (31, 32, 33, 34, 35, 37 y 38)  </ListGroup.Item>
                <ListGroup.Item as="li">Rio de Janeiro (21, 22 y 24)</ListGroup.Item>
                <ListGroup.Item as="li">São Paulo (11, 12, 13, 14, 15, 16, 17, 18 y 19)</ListGroup.Item>
            </ListGroup>

            <p className="subtitle-reactBootstrap"><b>Sur </b></p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Paraná (41, 42, 43, 44, 45 y 46)</ListGroup.Item>
                <ListGroup.Item as="li">Rio Grande do Sul (51, 53, 54 y 55)  </ListGroup.Item>
                <ListGroup.Item as="li">Santa Catarina (47, 48 y 49) </ListGroup.Item>
            </ListGroup>

            <p className="subtitle-reactBootstrap"><b>Operadores Telefónicos</b></p>
            <p>Actualmente hay decenas de operadores que ofrecen el servicio en Brasil:</p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Algar Telecom - 12</ListGroup.Item>
                <ListGroup.Item as="li">Oi (Nos seguintes estados: AC, DF, GO, MT, MS, PR, RO, RS, SC e TO) - 14 </ListGroup.Item>
                <ListGroup.Item as="li">Vivo - 15 </ListGroup.Item>
                <ListGroup.Item as="li">Aerotech - 17 </ListGroup.Item>
                <ListGroup.Item as="li">Embratel (Claro) - 21 </ListGroup.Item>
                <ListGroup.Item as="li">Oi (Nos seguintes estados: AL, AM, AP, BA, CE, ES, MA, MG, PA, PB, PE, PI, RN, RJ, RR e SE) - 31 </ListGroup.Item>
                <ListGroup.Item as="li">Convergia - 32 </ListGroup.Item>
                <ListGroup.Item as="li">TIM - 41 </ListGroup.Item>
                <ListGroup.Item as="li">Sercomtel - 43 </ListGroup.Item>
                <ListGroup.Item as="li">Nextel - 99 </ListGroup.Item>
            </ListGroup>

        </Container>
    )
}

export default Telefones;