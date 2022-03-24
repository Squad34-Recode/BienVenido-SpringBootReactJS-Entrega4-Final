import React from 'react';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css'

const Legislacao = () => {

    return (
        <Container className='container-reactBootstrap' fluid='md'>
            <FloatingButton />
            <h1>Leyes e Reglas</h1>

            <p className='subtitle-reactBootstrap'><b>Deberes de los Refugiados y Solicitantes de Asilo </b></p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Respetar todas las <a href="http://www4.planalto.gov.br/legislacao/">leyes brasileñas</a>
                </ListGroup.Item>
                <ListGroup.Item as="li">Respetar las personas, entidades y organismos públicos y privados.
                </ListGroup.Item>
                <ListGroup.Item as="li">Respetar las personas, entidades y organismos públicos y privados.
                </ListGroup.Item>
                <ListGroup.Item as="li">Renovar su Documento de Identificación (Protocolo Provisorio o Carteira/RNE) en las Comisarías de la Policía Federal;
                </ListGroup.Item>
                <ListGroup.Item as="li">Informar su domicilio, número de teléfono y correo electrónico y mantenerlos actualizados en las Comisarías de Policía Federal y / o CONARE.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Permanecer en el país durante el procedimiento de refugio. Si se enfrenta a una emergencia y necesita salir de Brasil durante el procedimiento, debe comunicarse con CONARE para explicar la situación. No abandone el país como solicitante de refugio sin antes informar al CONARE. Si regresa a su país de origen, puede perder el estatus de refugiado al regresar a Brasil. Para obtener más información sobre la autorización de viaje, acceda a la sección de viajes al extranjero.
                </ListGroup.Item>
            </ListGroup>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943324930341228554/pexels-sora-shimazaki-5668481.jpg" alt="Martelo da Justiça" />
                <figcaption className="figure-caption">Martillo de la justicia brasileña.</figcaption>
            </figure>

        </Container>
    )
}

export default Legislacao;