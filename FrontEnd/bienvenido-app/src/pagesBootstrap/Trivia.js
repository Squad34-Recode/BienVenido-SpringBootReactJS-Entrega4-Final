import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';
import ListGroup from 'react-bootstrap/ListGroup';

import '../styles/pagesBootstrap.css'

const Trivia = () => {
    return (
        <Container className='container-reactBootstrap' fluid="md">
            <div>
                <h1 className="title-reactBootstrap">Trivia sobre Brasil</h1></div>

            <FloatingButton />

            <ListGroup as="ol" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">La ciudad brasileña de São Vicente fue el primer asentamiento permanente portugués en
                    las Américas. Fue fundada en 1532 por Martín Alfonso de Sousa. Actualmente es un gran centro turístico
                    del estado de São Paulo.
                </ListGroup.Item>
                <ListGroup.Item as="li">Con más de 211 millones de habitantes, Brasil es el país más poblado de América del
                    Sur, el segundo de toda América y el sexto del mundo.
                </ListGroup.Item>
                <ListGroup.Item as="li">La construcción de Brasilia, la actual capital del país, duró sólo 41 meses (de 1956 a
                    1960). El Río de Janeiro había sido la capital durante los 197 años anteriores.
                </ListGroup.Item>
                <ListGroup.Item as="li">Una gran cantidad de nazis huyeron a Brasil después de la Segunda Guerra Mundial. Entre ellos, Josef Mengele — el Ángel de la Muerte —, conocido por sus crueles
                    experimentos y su fascinación por los gemelos. De hecho, la alta tasa de gemelos en la
                    ciudad de Cândido Godói, cerca de la frontera con Argentina, se le ha atribuido a Josef
                    (aunque no se ha demostrado).
                </ListGroup.Item>
                <ListGroup.Item as="li">Brasil es el mayor exportador de café del mundo desde hace más de 150 años. Llegó a suministrar el 80 % del café mundial en la década de los veinte. Actualmente aporta
                    cerca del 30 % de las exportaciones.
                </ListGroup.Item>
                <ListGroup.Item as="li">El río Amazonas, que discurre por Brasil, es el río más caudaloso del mundo. El río tiene un caudal medio de 250 mil metros cúbicos
                </ListGroup.Item>
                <ListGroup.Item as="li">Brasil tiene más de 4000 aeropuertos. Solo Estados Unidos le supera con más de 13 mil.
                </ListGroup.Item>
                <ListGroup.Item as="li">Brasil posee 22 Patrimonios Mundiales de la UNESCO. Brasil posee 22 Patrimonios Mundiales de la UNESCO. Entre los más conocidos se encuentra el Parque nacional de Iguazú, que alberga una de las
                    cataratas más grandes e impresionantes del mundo; las Cataratas del Iguazú.
                </ListGroup.Item>
                <ListGroup.Item as="li">Brasil tiene fronteras con todos los países del continente sudamericano excepto Chile y Ecuador.
                </ListGroup.Item>
                <ListGroup.Item as="li">El popular arquitecto Oscar Niemeyer ha diseñado más de 500 estructuras, la gran
                    mayoría de ellas en Brasil. La distintiva catedral de Brasilia es una de sus obras más populares.
                </ListGroup.Item>
            </ListGroup>

        </Container>
    )
}
export default Trivia;