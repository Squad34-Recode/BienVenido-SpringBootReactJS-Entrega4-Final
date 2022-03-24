import React from 'react';

import CardInfo from '../components/HomeComponents/CardInfo'
import CardUtility from '../components/HomeComponents/CardUtility';
import Carrossel from '../components/HomeComponents/Carrossel';
import CelApp from '../components/HomeComponents/CelApp';
import Direitos from '../images/direitos.png'
import Saude from '../images/saude.png'
import Education from '../images/educaçao.png'
import Costumes from '../images/costumes.png'
import Cidades from '../images/cidades.png'
import Cocina from '../images/culinaria.png'
import Locomotion from '../images/locomoçao.png'
import Trabajos from '../images/trbalho.png'
import Telefonicas from '../images/telefones.png'
import Emergencia from '../images/Emergency call-pana.png'
import Alquiler from '../images/House searching-pana.png'
import Documentacion from '../images/documentos.png'
import Leyes from '../images/leis.png'
import Moneda from '../images/dinheiro.png'
import Clima from '../images/clima.png'
import Biomas from '../images/biomas.png'
import Trivia from '../images/curiosidades.png'
import Gobierno from '../images/governo.png'

const Home = () => {
    return (
        <>
            <Carrossel />
            <section class="subjects">
                <h1 class="heading">Descubra más sobre Brasil</h1>
                <div class="box-container">
                    <CardInfo pagBoots='/direitos' imgSrc={Direitos} imgAlt='direchos' textH3='Derechos' textP='derechos que tienes cuando llegas a Brasil' />
                    <CardInfo pagBoots='/saude' imgSrc={Saude} imgAlt='Salud' textH3='Salud' textP='Todo sobre salud y bien estar.' />
                    <CardInfo pagBoots='/educacao' imgSrc={Education} imgAlt='Education' textH3='Educación' textP='todo sobre la educación en Brasil' />
                    <CardInfo pagBoots='/cultura' imgSrc={Costumes} imgAlt='Cultura y Costmbres' textH3='Cultura y Costumbres' textP='la cultura de brasil y sus costumbres' />
                    <CardInfo pagBoots='/capitais' imgSrc={Cidades} imgAlt='Ciudades' textH3='Ciudades y Capitales' textP='Ciudades com mejores oportunidades' />
                    <CardInfo pagBoots='/culinaria' imgSrc={Cocina} imgAlt='Cocina' textH3='Cocina brasileña' textP='recetas locales deliciosas' />
                    <CardInfo pagBoots='/trabalhos' imgSrc={Trabajos} imgAlt='Trabajos' textH3='Trabajos y salarios' textP='Plataformas de búsqueda de empleo' />
                    <CardInfo pagBoots='/transporte' imgSrc={Locomotion} imgAlt='Locomotion' textH3='Locomoción' textP='saber cómo llegar a otras ciudades y estados' />
                    <CardInfo pagBoots='/telefones' imgSrc={Telefonicas} imgAlt='telefonicas' textH3='Líneas telefónicas' textP='líneas telefónicas para comunicarse en todo el país' />
                    <CardInfo pagBoots='/emergencia' imgSrc={Emergencia} imgAlt='Emergencia' textH3='Líneas telefónicas de emergencia' textP='líneas telefónicas en caso de emergencia' />
                    <CardInfo pagBoots='/moradia' imgSrc={Alquiler} imgAlt='Alquiler' textH3='Alojamiento e Vivienda' textP='como conseguir un alojamiento popular' />
                    <CardInfo pagBoots='/documentacao' imgSrc={Documentacion} imgAlt='Documentación' textH3='Documentación' textP='todo lo que necesita saber sobre documentación' />
                    <CardInfo pagBoots='/legislacao' imgSrc={Leyes} imgAlt='Leyes' textH3='Leyes y reglas' textP='leyes y reglas en todo el país' />
                    <CardInfo pagBoots='/moeda' imgSrc={Moneda} imgAlt='Moneda' textH3='Moneda brasileña' textP='los valores y cómo evitar el fraude' />
                    <CardInfo pagBoots='/clima' imgSrc={Clima} imgAlt='Clima' textH3='Clima brasileño' textP='todo sobre el clima brasileño' />
                    <CardInfo pagBoots='/biomas' imgSrc={Biomas} imgAlt='Biomas' textH3='biomas y regiones' textP='todo sobre los biomas e regiones' />
                    <CardInfo pagBoots='/trivia' imgSrc={Trivia} imgAlt='Trivia' textH3='trivia sobre Brasil' textP='curiosidades' />
                    <CardInfo pagBoots='/governo' imgSrc={Gobierno} imgAlt='Gobierno' textH3='gobierno brasileño' textP='las 3 potencias de brasil' />
                </div>
            </section>

            <CelApp />
            <CardUtility />
        </>
    )
}
export default Home;