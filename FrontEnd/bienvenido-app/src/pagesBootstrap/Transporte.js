import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton'

const Transporte = () => {
    return (
        <Container className="container-reactBootstrap" fluid="md">
            <FloatingButton />

            <h1 className="text-center">
                Medios de transporte <br />de cada ciudad Brasileña!
            </h1>
            <p>
                Estos son algunos de losmedios de transporte utilizados en las
                ciudades Brasileñas:
            </p>

            <h3 className='subtitle-reactBootstrap'>Región Sureste</h3>
            <p>
                Ciudades de la región sureste, como São Paulo, Río de Janeiro y
                Belo Horizonte, los medios de transporte por carretera (automóvil
                y autobús) y el ferrocarril (tren y metro) están ultilizados. Es
                posible emitir una tarjeta donde le permite comprar boletos más
                baratos, son: Bilhete Único, BOM, TOP y E-Facil en São Paulo;
                Bilhete Único, RioCard Mais y SuperVia en Río de Janeiro; BhBus,
                Ótimo y BhBus master que está destinado a usuarios de 65 años o
                más en Belo Horizonte.
            </p>
            <h3 className='subtitle-reactBootstrap'>Región Norte</h3>
            <p>
                Ciudades de la región norte, como Manaus, Palmas y Belém, los
                medios de transporte por carretera (automóvil y autobús) están
                ultilizados. Es posible emitir una tarjeta donde le permite
                comprar boletos más baratos, son: PassaFacil y Cartão Cidadão en
                Manaus; Seturb en Palmas; Setransbel, SIM y Passe Fácil en Belém.
            </p>
            <h3 className='subtitle-reactBootstrap'>Región Noreste</h3>
            <p>
                Ciudades de la región noreste, como Aracaju, Fortaleza y São Luís,
                los medios de transporte por carretera (automóvil y autobús) están
                ultilizados. Es posible emitir una tarjeta donde le permite
                comprar boletos más baratos, son: SET y Bilhete Único en São Luís;
                Bilhete Único y VTE en Fortaleza; AracajuCard en Aracaju.
            </p>
            <h3 className='subtitle-reactBootstrap'>Región Sur</h3>
            <p>
                Ciudades de la región sureste, como Curitiba y Porto Alegre, los
                medios de transporte por carretera (automóvil y autobús) y el
                ferrocarril (tren y metro) están ultilizados. Es posible emitir
                una tarjeta donde le permite comprar boletos más baratos, son:
                URBS en Curitiba; TRI en Porto Alegre.
            </p>
            <h3 className='subtitle-reactBootstrap'>Región Del Medio Oeste</h3>
            <p>
                Ciudades de la región sureste, como Goiâna y Campo Grande, los
                medios de transporte por carretera (automóvil y autobús) y el
                ferrocarril (tren y metro) están ultilizados. Es posible emitir
                una tarjeta donde le permite comprar boletos más baratos, son: SET
                y Cartão Facil en Goiâna; Bilhete Único y PagFacil en Campo
                Grande.
            </p>

        </Container >
    )
}

export default Transporte;