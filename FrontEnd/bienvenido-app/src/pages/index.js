import React from 'react';

import CardInfo from '../components/IndexComponents/CardInfo'
import CardUtility from '../components/IndexComponents/CardUtility';
import Carrossel from '../components/IndexComponents/Carrossel';
import CelApp from '../components/IndexComponents/CelApp';
import direitos from '../images/direitos.png'
import saude from '../images/saude.png'
import Education from '../images/educaçao.png'
import Costumes from '../images/costumes.png'
import Cidades from '../images/cidades.png'
import Cocina from '../images/culinaria.png'

const index = () => {
    return (
        <div>
            <Carrossel />
            <section class="subjects">
                <h1 class="heading">Descubra más sobre Brasil</h1>
                <div class="box-container">
                    <CardInfo pagBoots='/derechos' imgSrc={direitos} imgAlt='direchos' textH3='Derechos' textP='derechos que tienes cuando llegas a Brasil' />
                    <CardInfo pagBoots='' imgSrc={saude} imgAlt='Salud' textH3='Salud' textP='Todo sobre salud y bien estar.' />
                    <CardInfo pagBoots='' imgSrc={Education} imgAlt='Education' textH3='Educación' textP='todo sobre la educación en Brasil' />
                    <CardInfo pagBoots='/cultura' imgSrc={Costumes} imgAlt='Cultura y Costmbres' textH3='Cultura y Costumbres' textP='la cultura de brasil y sus costumbres' />
                    <CardInfo pagBoots='' imgSrc={Cidades} imgAlt='Ciudades' textH3='Ciudades y Capitales' textP='Ciudades com mejores oportunidades' />
                    <CardInfo pagBoots='' imgSrc={Cocina} imgAlt='Cocina' textH3='Cocina brasileña' textP='recetas locales deliciosas' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                    <CardInfo pagBoots='' imgSrc='' imgAlt='' textH3='' textP='' />
                </div>
            </section>

            <CelApp />
            <CardUtility />
        </div>
    )
}
export default index;