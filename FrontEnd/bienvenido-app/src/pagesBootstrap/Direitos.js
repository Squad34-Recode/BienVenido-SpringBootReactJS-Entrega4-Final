import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css';

const Direitos = () => {

    return (
        <>
            <Container className='container-reactBootstrap' fluid="md">

                <h1 className="title-reactBootstrap">
                    Derechos y deberes de los ciudadanos brasileños:
                </h1>

                <FloatingButton />
                <p className="subtitle-reactBootstrap"><b>Entienda lo que dice la Constitución Federal</b></p>

                <figure>
                    <img className='imagem-reactBootstrap' src="https://www.fiergs.org.br/sites/default/files/styles/2x1_md/public/paragraphs--image-top/martelo_juiz.png?itok=C1JRF47P" alt="Primeiro Slide" />
                    <figcaption className="figure-caption"> </figcaption>
                </figure>

                <p className="">Los derechos y deberes de los ciudadanos brasileños se pueden dividir, básicamente, en tres grupos: Derechos y Deberes Individuales y Colectivos (civiles), Derechos Sociales y Derechos Políticos.</p>

                <div className="">
                    <p>Independientemente del estatus social, color, etnia o religión, existen <b>derechos y deberes de los ciudadanos brasileños</b> que deben ser cumplidos para el buen ejercicio de la ciudadanía nacional.</p>
                    <p>La Constitución Federal (CF) establece, en términos generales, los <b>derechos y deberes del ciudadano brasileño</b>, que siempre deben cumplir, porque cuando un ciudadano cumple con sus obligaciones, al otro se le garantizan sus derechos.</p>
                </div>

                <p className='subtitle-reactBootstrap'>Los derechos de los brasileños</p>

                <p>Los derechos y garantías fundamentales del ciudadano brasileño se pueden dividir, básicamente, en tres grupos:</p>
                <br />
                <p>Derechos y Deberes Individuales y Colectivos (civiles), Derechos Sociales y Derechos Políticos.</p>
                <br />
                <p>Siga leyendo y comprenda cada uno mejor:</p>
                <br />
                <p><b>Derechos y deberes individuales y colectivos</b></p>
                <br />
                <p>El <b>artículo 5 de la Constitución Federal</b>, uno de los principales artículos de la FC, destaca que todos somos iguales ante la ley, sin distinción alguna entre personas.</p>
                <br />
                <p>Además, este artículo garantiza el derecho a la vida, la libertad, la igualdad, la seguridad, la propiedad y otros, derechos considerados fundamentales.</p>


                <p>Art. 5 Todas las personas son iguales ante la ley, sin distinción de ningún tipo, garantizando a los brasileños y extranjeros residentes en el País la inviolabilidad del derecho a la vida, la libertad, la igualdad, la seguridad y la propiedad, en los siguientes términos:</p>


                <p> Entre las diversas disposiciones de este precepto legal, cabe destacar:</p>

                <ListGroup as="ol" className='listgroup-reactBootstrap'>
                    <ListGroup.Item as="li">Los hombres y las mujeres son iguales en derechos y obligaciones;
                    </ListGroup.Item>
                    <ListGroup.Item as="li"> Nadie está obligado a hacer o abstenerse de hacer nada excepto en virtud de la ley;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Nadie será sometido a torturas ni a tratos inhumanos;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">El pensamiento, las creencias y los cultos religiosos son gratuitos;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">La expresión intelectual, artística, científica y comunicativa es libre, es decir, sin censura;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">La intimidad, la vida privada, el honor, la imagen, la correspondencia y el secreto telefónico son inviolables;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">El trabajo y la profesión son gratuitos;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">El acceso a la información es gratuito;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">La circulación en el país es gratuita;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">La reunión pacífica en lugares abiertos al público es gratuita;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">La propiedad es un derecho;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">La pequeña propiedad rural, que es explotada por la familia, no se puede pignorar;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">El derecho de herencia;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Protección al Consumidor;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">El derecho de acceso directo al Poder Judicial;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Los delitos de racismo, tortura y narcotráfico son irresistibles;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">No habrá pena de muerte;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Não haverá condenação sem sentença judicial;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Entre otros.
                    </ListGroup.Item>
                </ListGroup>

                <p className='subtitle-reactBootstrap'>Derechos sociales</p>
                <p>Los derechos sociales están prescritos en el artículo 6 de la Constitución,
                    que prescribe los derechos de los ciudadanos a la educación, la salud, la alimentación, el trabajo, la vivienda, el transporte,
                    el esparcimiento, la seguridad, la seguridad social, la protección de la maternidad,
                    la infancia y también la asistencia a los indigentes.</p>

                <p>Art. 6 Los derechos sociales son la educación, la salud, la alimentación, el trabajo, la vivienda, el transporte, el esparcimiento,
                    la seguridad, la seguridad social, la protección de la maternidad y la infancia, la asistencia a los desamparados,
                    en la forma de esta Constitución.</p>

                <p className='subtitle-reactBootstrap'>Derechos sociales</p>
                <p>Los derechos políticos se encuentran en los artículos 14, 15 y 16 de la Constitución Federal y básicamente garantizan
                    a los ciudadanos el derecho al voto directo y secreto, con igual valor para todos, y el derecho a presentarse como candidato
                    en las elecciones.</p>

                <h3 className="subtitle-reactBootstrap">CAPITULO IV DERECHOS POLITICOS</h3>
                <p>Art. 14. La soberanía popular se ejercerá por sufragio universal y por voto directo y secreto,
                    con igual valor para todos, y, en los términos de la ley, mediante:</p>

                <p>
                    <b>¡Aviso!</b> Además de los derechos previstos en la Constitución Federal, <b> el Estatuto de la Niñez y la Adolescencia,
                        el Estatuto de la Vejez</b>, el Código de Defensa del Consumidor y varios otros diplomas legales específicos
                    también tienen numerosos derechos relevantes para los ciudadanos de todas las edades.
                </p>

                <p className="subtitle-reactBootstrap">Los deberes del ciudadano</p>
                <p>A pesar de todos los derechos, los ciudadanos también tienen deberes que cumplir. Algunos de ellos son:</p>
                <br />

                <ListGroup as="ol" className='listgroup-reactBootstrap'>
                    <ListGroup.Item as="li">Elija los gobernantes del país;
                    </ListGroup.Item>
                    <ListGroup.Item as="li"> Cumplir con todas las leyes y la Constitución;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Proteger el medio ambiente y todos los bienes públicos y sociales de Brasil;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Respete los derechos de otras personas;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Efectuar los impuestos y contribuciones a la seguridad social adeudados;
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Educar y proteger a los demás; y
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Contribuir a las autoridades.
                    </ListGroup.Item>
                </ListGroup>

            </Container>
        </>
    )
}

export default Direitos;