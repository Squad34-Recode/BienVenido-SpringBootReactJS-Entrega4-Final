import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css'

const Governo = () => {
    return (
        <Container className='container-reactBootstrap' fluid="md">
            <div>
                <h1 className="title-reactBootstrap">Gobierno Brasileño</h1>
            </div>
            <FloatingButton />

            <p className="subtitle-reactBootstrap"><b>División Político Administrativa</b></p>
            <p>a forma de gobierno es de República Federativa. La organización político administrativa
                comprende la Unión, los estados, el Distrito Federal y los municipios, todos autónomos en
                los términos de la Constitución. Los territorios federales integran la Unión, y su creación,
                transformación en estado o reintegración al estado de origen es regulada por ley
                complementaria. Cada estado dicta su propia constitución y se encuentra regido por un
                gobernador. La nación está subdividida en la capital y 26 estados y 5.570 municipalidades.
                (Constitución Política de la Republica Federativa del Brasil, 1988).</p>

            <p className="subtitle-reactBootstrap"><b>Parlamento nacional</b></p>
            <p>El Congreso Nacional (Congresso nacional) es bicameral. La Cámara de Diputados
                (Cámara dos Deputados) esta formada con 513 miembros directamente elegidos por 4
                años. El Senado Federal está formado con 81 miembros directamente elegidos, que son
                nombrados por 8 años, pero donde un tercio y dos tercios van renovándose
                alternativamente cada 4 años ( primero 1/3, y después los 2/3 restantes).</p>

            <p className="subtitle-reactBootstrap"><b>Gobierno municipal</b></p>
            <p>El órgano ejecutivo de los municipios es el Prefecto y el órgano legislativo es la Cámara
                Municipal.</p>

            <p className="subtitle-reactBootstrap"><b>Duración del mandatos</b></p>
            <p>"La elección del Prefecto, del Viceprefecto y de los Vereadores, es por un mandato de
                cuatro años, mediante votación directa y simultánea realizada en todo el Estado".
                Constitución Política de la Republica Federativa del Brasil, 1988. Cap.IV De los Municipios
                (Art. 29. I y II). Congreso Nacional. Cámara de Diputados: 4 años. Senado: son nombrados
                por 8 años, pero donde un tercio y dos tercios van renovándose alternativamente cada 4
                años. ( primero 1/3, y después los 2/3 restantes).</p>

            <p className="subtitle-reactBootstrap"><b>Sistema de representación</b></p>
            <p>Mayoritario para alcaldes (prefeitos), proporcional para concejales (vereadores).
                Constitución Política de la Republica Federativa del Brasil, 1988. Cap.IV De los Municipios
                (Art. 29. I y IV).Congreso Nacional. Cámara de Diputados: 513 miembros son elegidos a
                través de una lista abierta con el sistema de representación proporcional. Senado: 81
                miembros son elegidos por mayoría de votos, tres para cada uno de los 26 estados y
                Brasilia (Distrito Federal). Voto obligatorio.</p>

            <p className="subtitle-reactBootstrap"><b>Tipo de listas</b></p>
            <p>Abierta. Congreso Nacional. Cámara de Diputados:lista abierta con el sistema de
                representación proporcional. Senado: Voto en bloque, método de mayoría simple, bajo el
                cual resultan electos a los cargos los candidatos con mayor número de votos.</p>

            <p className="subtitle-reactBootstrap"><b>Ley de cuotas y paridad</b></p>
            <p>En 1995 se aprueba cuota 20% en listas electoras para el legislativo municipal,(1) Ley
                9100/1995. Establece normas para elecciones municipales 1996. En 1997 se define que se
                registrarán un mínimo de 30% y un máximo de 70% para candidaturas de cada sexo. Art.10
                Se modifica como una medida transitoria, registrar candidatos en un 25% para las
                municipales de 1998 (Art.80). En la actualidad todas las elecciones son con 30% de
                candidatos/as, Ley 9504/97. Establece normas para las elecciones. Se aplica a nivel
                municipal, legislativo y nacional.</p>

            <p className="subtitle-reactBootstrap"><b>Circunscripción electoral</b></p>
            <p>Uninominal para alcaldes (prefeitos) y plurinominal para concejales (vereadores). Congreso
                Nacional. Cámara de Diputados: 27 distritos electorales plurinominales (son elegidos de 8 a
                70 plazas, con relación la población) correspondientes a 26 estados del país y el Distrito
                Federal. Senado: 27 plurinominales distritos electorales correspondientes a 26 estados del
                país y el Distrito Federal donde se eligen 3 miembros por cada uno.</p>

            <p className="subtitle-reactBootstrap"><b>Instrumentos jurídicos que norman el municipio</b></p>
            <p>Constitución Política de la República Federativa del Brasil, 1988. Cap.IV De los Municipios.</p>

            <p className="subtitle-reactBootstrap"><b>Justicia electoral</b></p>
            <p>El Tribunal Superior Electoral es el órgano dirigido a asegurar los medios efectivos que
                garantizan a la sociedad una plena manifestación de su voluntad, por el ejercicio del
                derecho a votar y ser votado.</p>

        </Container>
    )
}
export default Governo;