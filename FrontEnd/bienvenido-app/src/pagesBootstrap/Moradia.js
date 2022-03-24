import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css';

const Moradia = () => {

    return (
        <Container className='container-reactBootstrap' fluid='md'>
            <FloatingButton />

            <h1>Alojamiento/Vivienda</h1>

            <p className='subtitle-reactBootstrap'><b>Alojamientos Públicos</b></p>
            <p>
                Si usted llega al país y no tiene lugar para quedarse, puede buscar un albergue (dirigido por el sistema
                público o la sociedad civil). Por favor, vaya al Centro de Referencia Especializado de Asistencia Social
                (CREAS) más cercano para encontrar información sobre alojamientos (lunes a viernes, 08-18h). La estancia en
                los refugios públicos es gratuita.
            </p>
            <p>
                Aunque hay algunos albergues específicamente diseñados para recibir solicitantes de refugio y refugiados,
                las vacantes son limitadas (como en São Paulo). La mayoría de las vacantes están abiertas para brasileños y
                extranjeros que se encuentran en situación vulnerable. Albergues tienen diversos límites de permanencia, que
                van desde sólo una noche hasta aquellos en los que es posible permanecer durante varios meses.
            </p>

            <p className='subtitle-reactBootstrap'><b>Cartilla sobre la Seguridad en el Acceso a Tierra y Vivivenda para personas Refugiadas y Migrantes</b></p>
            <p>Esta cartilla tiene como objetivo ayudar a las personas refugiadas, solicitantes de refugio y migrantes en
                Brasil a conocer sus derechos para que sepan actuar en el momento de alquilar o comprar un inmueble (terreno o
                casa) en área urbana o rural.
            </p>
            <p>En Brasil, existen leyes que tratan de alquiler, compra y venta de inmuebles y adquisición de terrenos
                públicos, es decir, que pertenecen al poder público. Por tanto, esta cartilla propone presentar los
                principales aspectos de dichas normas en un lenguaje que permita su comprensión.
            </p>
            <p>
                Además de la legislación, la cartilla contiene información sobre los servicios jurídicos gratuitos, brindados
                por las Defensorías Públicas, a los que pueden acceder personas refugiadas, solicitantes de refugio y
                migrantes que no tienen las condiciones financieras necesarias para pagar un abogado o los gastos de un
                proceso judicial.
            </p>
            <p>
                De esta forma, esperamos que esta cartilla sea un instrumento informativo para el ejercicio de derechos. Para
                acceder a ella, haga clic en el imagen de abajo or en el botão, para descargar el folleto puesto a disposición por acnur
                brasil
            </p>

            <div>
                <a
                    href="https://cdn.discordapp.com/attachments/896170579525246979/943319498847580250/Cartilha-Moradia-espanhol-web.pdf" target='_blank'>
                    <img src="https://cdn.discordapp.com/attachments/896170579525246979/943320613475459122/Capturar-1-211x300.png"
                        className='img-fluid' alt="" />
                </a>
            </div>

            <button type="button" class="btn">
                <a href="https://cdn.discordapp.com/attachments/896170579525246979/943319498847580250/Cartilha-Moradia-espanhol-web.pdf" target="_blank" rel="noopener norwferrer noreferrer">
                    Descargar
                </a>
            </button>

        </Container>
    )
};

export default Moradia;