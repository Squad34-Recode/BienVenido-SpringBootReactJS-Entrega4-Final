import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';

const ContactUsComp = () => {

    return (

        <section className="contact">
            <h1 className="heading">Ponerse en contacto</h1>

            <div className="icons-container">
                <div className="icons">
                    <FontAwesomeIcon icon={faClock} size='5x' color="#F7817F" spin />
                    <h3>horario de apertura :</h3>
                    <p>08:00am - 20:00pm</p>
                </div>

                <div className="icons">
                    <FontAwesomeIcon icon={faPhone} size='5x' color="#F7817F" shake />
                    <h3>teléfono :</h3>
                    <p>55+ 4002-8922</p>
                    <p>55+ 4002-8922</p>
                </div>

                <div className="icons">
                    <FontAwesomeIcon icon={faEnvelope} size='5x' color="#F7817F" bounce />
                    <h3>email :</h3>
                    <p>Bienvenidoapp@gmail.com</p>
                    <p>Bienvinidoappreports@gmail.com</p>
                </div>

                <div className="icons">
                    <FontAwesomeIcon icon={faMap} size='5x' color="#F7817F" beat />
                    <h3>localización :</h3>
                    <p>brasil</p>
                </div>
            </div>
        </section>
    )
}
export default ContactUsComp;