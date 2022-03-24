import React from 'react';
import { Link } from 'react-router-dom';
import ContactUsComp from '../components/ContactComponents/ContactUsComp';
import MenssageComp from '../components/ContactComponents/MenssageComp';
import QuestComp from '../components/ContactComponents/QuestComp';
import RecodePro from '../components/ContactComponents/RecodeProp'

const Contato = () => {

    return (
        <>
            <section className='breadcrumb-title'>
                <h1>Contactos</h1>
                <ul class="breadcrumb">
                    <li><Link to='/' className='breadcrumb-link'>Comienzo</Link></li>
                    <li>/</li>
                    <li>Contactos</li>
                </ul>
            </section>
            <ContactUsComp />
            <MenssageComp />
            <QuestComp h3Quest='¿Cómo contactar para obtener ayuda?' pQuest='Para ponerse en contacto con nosotros, simplemente llámenos a través del buzón de mensajes, redes sociales o por teléfono a través de nuestros números de contacto. ' />
        </>
    )
}
export default Contato;