import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css'

const Biomas = () => {

    return (
        <Container className='container-reactBootstrap' fluid="md">
            <div>
                <h1 className="title-reactBootstrap">Biomas y Regiones</h1></div>

            <FloatingButton />

            <p>
                Vamos a comenzar nuestro texto con un pequeño ejercicio. Intenta recordar algunas
                regiones de Brasil que hayas visto por televisión. Por ejemplo, cuando te acuerdas lo que ya
                viste sobre la Amazonia.</p><p>¿Qué imagen tienes de la Amazonia? Grandes árboles, muchos ríos y bichos que no estás
                    acostumbrado a ver. ¿No es así? Ahora, vamos a intentar otro ejemplo. Cuando piensas en
                    el Nordeste, ¿qué paisaje viene a tu cabeza? Lugares secos, casi sin árboles, apenas con
                    aquellos cactus que recuerdan las películas del desierto…</p><p>Es claro que la Amazonia no tiene sólo lo que imaginas. Así como el Nordeste no es un
                        inmenso desierto. Pero las imágenes que vinieron a tu mente en este ejercicio muestran
                        factores determinantes de cada uno de esos lugares como flora, fauna y temperatura.
                        Existen muchos vegetales, animales y tipos de clima, pero esos elementos no están todos
                        presentes en todos los lugares. En un determinado local existen bichos más comunes,
                        plantas que predominan, hace más calor o más frío, llueve más o menos.</p><p>Ecosistema es el nombre dado al conjunto de los seres vivos o no que caracterizan un
                            lugar, una región. Podemos decir, entonces, que forman parte de un ecosistema animales,
                            plantas, bacterias, el agua, el viento, el suelo, la luz del sol… todo eso junto, o sea, la forma
                            como todos estos factores se relacionan, como están ligados, es lo que determina un
                            ecosistema. Los ecosistemas pueden dividirse en terrestres y acuáticos. Además de esta división,
                            pueden clasificarse en naturales, como por ejemplo bosques, selvas, desiertos y océanos y
                            artificiales, creados por el hombre, como represas, acuarios y plantaciones.</p><p>Recordando apenas algunos elementos, como la diversidad de animales que has visto, las
                                especies de plantas que conoces, los cambios de clima que ya viviste y el tamaño
                                Biomas brasileños.</p><p>Biomas brasileños de nuestro planeta, debes estar preguntándote cuántos ecosistemas existen en la Tierra. Sí,
                                    son muchos. Existen ecosistemas dentro de otros ecosistemas, como es el caso de un lago
                                    que pertenece a un bosque. Todos juntos forman la Biosfera, la parte del planeta que está
                                    ocupada por seres vivos.</p><p>Biomas son reuniones de ecosistemas agrupados de acuerdo con aspectos de vegetación,
                                        relieve y clima. Aquí en Brasil, el Ministerio de Medio Ambiente admite la existencia de siete
                                        biomas: Bioma Amazonia, Bioma Cerrado, Bioma Caatinga, Bioma Pantanal, Bioma Mata
                                        Atlántica, Bioma Campos Sulinos y Bioma Costero. Vamos a aprender un poco más sobre
                                        aquel que recordamos hace poco: Bioma Amazonia.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://nova-escola-producao.s3.amazonaws.com/rZj77nWtmGTzeQMFmxC3uW2a38PEJnn8wzAyqFudrwQUG7m6SRxgcdehkYMh/sistematizacao" alt="Mapa de Biomas Brasil" />
                <figcaption className="figure-caption">Mapa con todos el biomas brasileños</figcaption>
            </figure>
        </Container>
    )
}

export default Biomas;