import React from 'react';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css'

const Educacao = () => {

    return (
        <Container className='container-reactBootstrap' fluid="md">
            <FloatingButton />

            <h1>
                Educación
            </h1>
            <p>
                Refugiados y Solicitantes de Refugio tienen derecho a la educación
                de acuerdo con la ley brasileña <b> 9.474/1997 </b>. Los sistemas
                educativos brasileños incluyen múltiples niveles:
            </p>

            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Educação básica para niños: Educación para niños y adolescentes
                    entre 0 y 17 años (Educación Infantil, Primaria y Secundaria);
                </ListGroup.Item>
                <ListGroup.Item as="li"> Educação básica para adultos: Educación para Adultos y Jóvenes (18
                    años o más);
                </ListGroup.Item>
                <ListGroup.Item as="li">Educação técnica: Educación Técnica; Educação universitária:
                    Universidad.
                </ListGroup.Item>
            </ListGroup>

            <p>
                Además, personas refugiadas y solicitantes de asilo con diplomas
                universitarios pueden revalidar sus diplomas con el apoyo del
                empresas com el <b> ACNUR </b> y sus socios. Desde 2003, el
                <b> ACNUR</b> ha implementado la <b>Cátedra Sérgio Vieira de Mello
                    (CSVM)</b> en cooperación con los centros universitarios
                nacionales de todo el país y con el <b> Comité Nacional para los
                    Refugiados (CONARE)</b>. El objetivo de la Cátedra es promover la
                educación, la investigación y la extensión académica dirigida a la
                población en condición de refugiado, además de ofrecer una serie de
                servicios.lejidad.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/942889137260863548/pexels-pragyan-bezbaruah-1720186.jpg" alt="niñas en clase" />
                <figcaption className="figure-caption">Niñas en classe (Educación Infantil y Primaria).</figcaption>
            </figure>
            <p className="subtitle-reactBootstrap"><b>Educación para niños y adolescentes </b></p>
            <p>
                La educación pública (gratuita) para niños y adolescentes se divide
                en tres niveles, según la edad:
            </p>

            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Educación Infantil (0-5 años), lo que incluye guarderías y
                    preescolares;
                </ListGroup.Item>
                <ListGroup.Item as="li"> La educación primaria (6-14 años) cubre las escuelas estatales y
                    municipales, divididas en 9 grados distintos;
                </ListGroup.Item>
                <ListGroup.Item as="li">La Educación Secundaria (15-17 años) también cuenta con escuelas
                    estatales y municipales, y se divide en 1er – 3er año.
                </ListGroup.Item>
            </ListGroup>
            <p>
                Vaya a la escuela más cercana a su casa para inscribir a su hijo/a.
                Traiga sus documentos de identificación personal (Protocolo/
                Cartera/ RNE, CPF). Tenga en cuenta que los niños refugiados y
                solicitantes de refugio deben ser matriculados en la escuela en
                cualquier momento del año, incluso si no tienen la documentación
                completa requerida.
                La ley brasileña de refugio determina que los procesos
                administrativos – como las inscripciones en escuelas – sean
                facilitados para personas refugiadas.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://media.discordapp.net/attachments/896170579525246979/942889136531075152/pexels-pixabay-159844.jpg?width=702&height=468" alt="profesor en clase" />
                <figcaption className="figure-caption">Profesor en clase (Educación Secundaria).</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap">
                <b>Educación de Adultos</b>
            </p>
            <p>
                <b>Tengo 18 años de edad o más y no terminé la
                    escuela. ¿Puedo continuar mis estudios en Brasil?</b></p>
            <p>
                Sí. Existe un programa gubernamental específico para adultos (18
                años o más) que no completaron la Escuela Primaria o Secundaria:
                Educación para Adultos y Jóvenes (EJA). La EJA es ofrecida por
                escuelas estatales y municipales en modalidades presenciales y de
                aprendizaje a distancia.
            </p>

            <p>
                <b>Admisión a la Universidad: ¿Cómo puedo comenzar o continuar mis
                    estudios en una universidad brasileña?</b>
            </p>
            <p>
                Los solicitantes de refugio y los refugiados pueden acceder a las
                universidades públicas y privadas en Brasil si ya han terminado la
                educación secundaria. Es recomendable tener un nivel avanzado de
                portugués, ya que la mayoría de los cursos no están disponibles en
                idiomas extranjeros.
            </p>
            <p>
                Las universidades determinan diversas modalidades de exámenes de
                ingreso (‘Vestibular’). Usted debe consultar los requisitos y la
                documentación para cada institución. El examen más común adoptado es
                el <b> ENEM</b>, que se realiza anualmente por el Instituto Nacional
                de Estudios e Investigaciones <b>(INEP)</b> .
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://media.discordapp.net/attachments/896170579525246979/942889138024230962/pexels-pixabay-267885.jpg?width=702&height=468" alt="graduación de estudiante" />
                <figcaption className="figure-caption">Graduación de estudiantes vestidos con toga</figcaption>
            </figure>

            <p>
                <b>Reconocimiento del Diploma: Ya he terminado la Universidad en mi
                    país de origen. ¿Cómo puedo reconocer mis diplomas en Brasil?</b>
            </p>
            <p>
                La revalidación de diplomas en Brasil fue regulada por la Portaría
                Normativa nº 22, del 13 de diciembre de 2016, del Ministerio de la
                Educación (MEC). Los diplomas universitarios de graduación
                extranjeros deben ser revalidados por una universidad pública en
                Brasil para que sean reconocidos en el país. Otros diplomas, como
                los másteres y doctorados, pueden ser revalidados por universidades
                particulares. El Ministerio de la Educación (MEC) regula el proceso
                de reconocimiento de todos los diplomas emitidos en el extranjero.
                El MEC otorgó autonomía a las universidades públicas brasileñas para
                determinar las condiciones para el reconocimiento de los títulos
                universitarios. Por lo tanto, los requisitos relacionados con la
                documentación, la duración del proceso y el campo de estudio varían
                entre las universidades. Sin embargo, hay algunos pasos comunes
                frecuentes que se deben seguir en este procedimiento:
            </p>

            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Infórmese sobre qué universidad pública brasileña ofrece una
                    especialidad en la misma área de conocimiento de la suya.
                </ListGroup.Item>
                <ListGroup.Item as="li"> Antes de iniciar el trámite de revalidación, es necesario:
                    comparar el contenido programático de los cursos; analizar la nota
                    de la prueba; verificar si el curso ya tuvo alguna turma graduada
                    (para que sea reconocido por el Ministerio de Educación de
                    Brasil); verificar el precio de la tasa de revalidación; verificar
                    si el proceso de revalidación está en funcionamiento y, si
                    posible, contactar previamente el coordinador del curso para sanar
                    otras dudas.
                </ListGroup.Item>
                <ListGroup.Item as="li">Presentar la solicitud de revalidación acompañada de su
                    certificado de refugiado expedida por el CONARE y todos los
                    documentos pertinentes disponibles (tales como diploma de
                    graduación, programa de estudios y registros escolares).
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Las Universidades por lo general cobran una tasa por este proceso,
                    que puede variar mucho entre las instituciones. Además, hay
                    algunas universidades que determinaron una reducción de la tasa
                    para las personas en situación de vulnerabilidad (autodeclaración)
                    o de refugio – es por ello que el refugiado debe procurar en todo
                    el país la mejor relación costo-beneficio.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Un comité especial compuesto por profesores universitarios
                    evaluará su solicitud de revalidación.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Si hay divergencias entre el curso cursado en el extranjero y el
                    ofrecido por la universidad, o en el caso de que no haya
                    documentación suficiente, el comité puede solicitarle que realice
                    exámenes (realizados en portugués) o clases complementarias para
                    reconocer la equivalencia de titulaciones.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Algunas universidades también requieren un certificado de
                    competencia en lengua portuguesa para extranjeros. El CELPE-Bras
                    es el único certificado oficial brasileño de competencia en
                    portugués y se otorga en cuatro niveles: Intermedio, Intermedio
                    Superior, Avanzado y Superior Avanzado. Para más información, haga <a target='_blank' href="https://www.gov.br/inep/pt-br">
                        clic aquí.</a>
                </ListGroup.Item>
            </ListGroup>

            <figure>
                <img className='imagem-reactBootstrap' src="https://cdn.discordapp.com/attachments/896170579525246979/942890665421987970/pexels-pixabay-256395.jpg" alt="graduación de estudiante" />
                <figcaption className="figure-caption">Salón de classes en Brasil</figcaption>
            </figure>

        </Container >
    );
}

export default Educacao;