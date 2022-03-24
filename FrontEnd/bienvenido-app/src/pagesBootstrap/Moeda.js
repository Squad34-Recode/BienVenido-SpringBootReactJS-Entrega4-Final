import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';
import nota2 from '../images/cédula-2-reais_anverso-1.jpg';
import nota5 from '../images/cédula-5-reais_anverso-1.jpg';
import nota10 from '../images/cédula-10-reais_anverso-1.jpg';
import nota20 from '../images/cédula-20-reais_anverso.jpg';
import nota50 from '../images/cédula-50-reais_anverso.jpg';
import nota100 from '../images/cédula-100-reais_anverso.jpg';
import nota200 from '../images/cédula-200-reais_anverso-2.jpg';
import moedas from '../images/moedas-real.jpg';

import '../styles/pagesBootstrap.css';

const Moeda = () => {
    return (
        <Container className='container-reactBootstrap' fluid="md">
            <div>
                <h1 className="title-reactBootstrap">Moneda Brasileña</h1></div>

            <FloatingButton />

            <p className="subtitle-reactBootstrap"><b>Moneda y tipo de cambio</b></p>
            <p>La moneda oficial de Brasil es el Real. Su símbolo es el R$ y su fracción son los 100 centavos. Existen monedas de 5, 10, 25, 50 centavos y 1 real. En cuanto a billetes, se emiten de 2, 5, 10, 20, 50, 100 y 200 reales. Un consejo importante para todos los que piensen ir a Brasil es que eviten cambiar sus dólares o euros en los aeropuertos, pues ahí la cotización será mucho menor a la que puedan conseguir incluso en los hoteles.</p>

            <p className="subtitle-reactBootstrap"><b>Monedas:</b></p>
            <figure>
                <img className='imagem-reactBootstrap' src={moedas} alt="" />
                <figcaption className="figure-caption">Monedas brasileñas</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b>Billetes:</b></p><br></br>

            <p>2 Reales</p>
            <p><b>Anverso:</b> Efige simbólica de la república interpretada en forma del escultura.</p>
            <p><b>Marca atrás:</b> Figura de una tortuga peine, una de las cinco especies de tortugas marinas que se encuentran en la costa brasileña. La especie esta en peligro crítico de extinción, vive en arrecifes de coral y aguas costeras poco profundas.</p>

            <figure>
                <img className='imagem-reactBootstrap' src={nota2} alt="" />
                <figcaption className="figure-caption">Billete '2 Reales' brasileños</figcaption>
            </figure>

            <p>5 Reales</p>
            <p><b>Anverso:</b> Efige simbólica de la república interpretada en forma del escultura.</p>
            <p><b>Marca atrás:</b> Figura de una garza, una especie de fauna muy representativa que se encuentra en el territorio brasileño. Habitando lagos y rios, se convirtió en un objetivo de caza en busca de plumas, destinado a la producción de sombreros.</p>

            <figure>
                <img className='imagem-reactBootstrap' src={nota5} alt="" />
                <figcaption className="figure-caption">Billete '5 Reales' brasileños</figcaption>
            </figure>

            <p>10 Reales</p>
            <p><b>Anverso:</b> Efige simbólica de la república interpretada en forma del escultura.</p>
            <p><b>Marca atrás:</b> Figura de un Arara, un ave típica de la fauna de Brasil y otros países latinoamericanos. Distribuido por la Amazonía y los bosques en este del país, llegando al Espirito Santo, Río de Janeiro y el interior del estado de Paraná.</p>

            <figure>
                <img className='imagem-reactBootstrap' src={nota10} alt="" />
                <figcaption className="figure-caption">Billete '10 Reales' brasileños</figcaption>
            </figure>

            <p>20 Reales</p>
            <p><b>Anverso:</b> Efige simbólica de la república interpretada en forma del escultura.</p>
            <p><b>Marca atrás:</b> Figura de un tamarino león dorado, primate de pelo anaranjado y cola larga nativo del Bosque Atlántico, que es el símbolo de la lucha por la preservación de las especies brasileñas amenazadas de extinción.</p>

            <figure>
                <img className='imagem-reactBootstrap' src={nota20} alt="" />
                <figcaption className="figure-caption">Billete '20 Reales' brasileños</figcaption>
            </figure>

            <p>50 Reales</p>
            <p><b>Anverso:</b> Efige simbólica de la república interpretada en forma del escultura.</p>
            <p><b>Marca atrás:</b> Figura de un jaguar, un hermoso felino de gran tamaño, en peligro de extinción, pero que aún se encuentra principalmente en el Amazonas y pantanal Matogrossense. El jaguar está perdiendo hábitat cada vez, lo que dificulta la supervivencia.</p>

            <figure>
                <img className='imagem-reactBootstrap' src={nota50} alt="" />
                <figcaption className="figure-caption">Billete '50 Reales' brasileños</figcaption>
            </figure>

            <p>100 Reales</p>
            <p><b>Anverso:</b> Efige simbólica de la república interpretada en forma del escultura.</p>
            <p><b>Marca atrás:</b> Figura de un mero, pez marino de la familia de los serranído, y uno de los más conocidos entre los que se encuentran en las costas brasileñas, se alimenta de otros peces o crustáceos más pequeños.</p>

            <figure>
                <img className='imagem-reactBootstrap' src={nota100} alt="" />
                <figcaption className="figure-caption">Billete '100 Reales' brasileños</figcaption>
            </figure>

            <p>200 Reales</p>
            <p><b>Anverso:</b> Efige simbólica de la república interpretada en forma del escultura.</p>
            <p><b>Marca atrás:</b> Figura de un lobo de crin, considerado el cánido más grande de Sudamérica, que habita en áreas más abiertas del Cerrado, tiene una alimentación compuesta por plantas y pequeños animales. Es un animal que ha estado sufriendo la reducción de su hábitat y atropello y fuga en las carreteras.</p>

            <figure>
                <img className='imagem-reactBootstrap' src={nota200} alt="" />
                <figcaption className="figure-caption">Billete '200 Reales' brasileños</figcaption>
            </figure>
        </Container>
    )
}
export default Moeda;