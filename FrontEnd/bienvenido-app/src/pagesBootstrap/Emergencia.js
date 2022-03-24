import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css';

const Emergencia = () => {
    return (
        <Container className='container-reactBootstrap' fluid='md'>
            <FloatingButton />

            <h1>Teléfonos de Emergencia</h1>

            <p>
                Puede llamar a estos números de forma gratuita desde su teléfono móvil. La mayoría de ellos están disponibles toda la semana durante las 24 horas del día.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://ufrj.br/wp-content/uploads/2020/09/hucff12-1200x800.jpg" alt="centro de emergencia" />
                <figcaption className="figure-caption">Hospital Universitario Clementino Fraga Filho ubicado en la UFRJ en Río de Janeiro</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b>Marque  100: Disque Direitos Humanos (Línea Directa de Derechos Humanos)</b></p>
            <p>Lá Línea Directa de Derechos Humanos es un Servicio público prestado por la Secretaría de Derechos Humanos de la Presidencia de la República, vinculado al Defensor Nacional de Derechos Humanos, para recibir reclamaciones relacionadas con violaciones de derechos humanos, especialmente aquellas que afectan a poblaciones vulnerables, por ejemplo: niños, ancianos, personas con discapacidad, LGBTI, los sin hogar, y asuntos relacionados con las compañías aéreas.
            </p>
            <p>
                Las reclamaciones son recibidas, examinadas y enviadas a las autoridades competentes dentro de 24 horas. El servicio también ofrece información sobre derechos humanos en Brasil y directrices sobre acciones y servicios en derechos humanos disponibles a nivel federal, estatal y municipal. La línea telefónica gratuita se ofrece 24/7 y las quejas pueden ser anónimas y confidenciales si así se solicita. Para registrar una queja, usted tendrá que proporcionar información sobre el abuso, así como sobre la víctima.
            </p>

            <p className="subtitle-reactBootstrap"><b>Marque 180: Central de Atendimento de la Mujer - Ministerio de Justicia</b></p>
            <p>La Secretaría Especial de la Mujer (Ministerio de Justicia) ofrece una línea telefónica gratuita para recibir informes de violencia contra la mujer y orientar a las mujeres sobre sus derechos y la legislación vigente, haciendo referencia a los servicios locales cuando sea necesario.</p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943315066529415258/pexels-kat-smith-568021.jpg" alt="mulher triste" />
                <figcaption className="figure-caption">Di no a la violencia contra las mujeres !
                    Reportalo !</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b>Marque 181: Disque Denúncia (línea de información criminal)</b></p>
            <p>Línea telefónica gratuita para denunciar crímenes y agresiones si desea permanecer <b> ANÓNIMO</b>.</p>

            <p className="subtitle-reactBootstrap"><b>Marque 190: Polícia Militar (Policía Militar)</b></p>
            <p>Línea telefónica gratuita para reportar emergencias, p. crímenes, asaltos, protección de los ciudadanos en
                situación de riesgo, amenazas a la vida, denuncias de robos y ataques a la seguridad pública. También puede
                utilizar este número para ponerse en contacto con el Servicio de Bomberos.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://www.al.es.gov.br/appdata/imagens_site/capa_39046_PoliciaMilitarES.jpg" alt="policial militar" />
                <figcaption className="figure-caption">Policía militar en patrulla</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b>Marque 192: Ambulancia Pública (SAMU)</b></p>
            <p>Llame a una ambulancia pública para servicios de atención de emergencia. Usted debe decir: 1 – lo que le pasó
                al paciente; 2 – dirección y referencia del lugar; 3 – información del paciente, como nombre, edad y sexo.</p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943311986484191272/pexels-pavel-danilyuk-6754163.jpg" alt="ambulancia SAMU" />
                <figcaption className="figure-caption">Servicio de atención móvil de emergencia (SAMU)</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b>Marque 193: Corpo de Bombeiro (Servicio de Bomberos)</b></p>
            <p>El cuerpo de bomberos brasileño atiende casos incendios, accidentes con animales, fugas de gas, productos
                químicos y desastres naturales como inundaciones e incendios.</p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/943311987260129340/pexels-pixabay-260367.jpg" alt="ambulancia SAMU" />
                <figcaption className="figure-caption">Bomberos luchando contra el fuego</figcaption>
            </figure>
        </Container>
    )
}

export default Emergencia;

