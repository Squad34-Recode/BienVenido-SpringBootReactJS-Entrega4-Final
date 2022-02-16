import React from "react";

const ContactUsComp = () => {
    return (

        <section className="contact">
            <h1 className="heading">Ponerse en contacto</h1>
    
            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-clock"></i>
                    <h3>horario de apertura :</h3>
                    <p>08:00am - 20:00pm</p>
                </div>
        
                <div className="icons">
                    <i className="fas fa-phone"></i>
                    <h3>teléfono :</h3>
                    <p>55+ 4002-8922</p>
                    <p>55+ 4002-8922</p>
                </div>
        
                <div className="icons">
                    <i className="fas fa-envelope"></i>
                    <h3>email :</h3>
                    <p>Bienvenidoapp@gmail.com</p>
                    <p>Bienvinidoappreports@gmail.com</p>
                </div>
        
                <div className="icons">
                    <i className="fas fa-map"></i>
                    <h3>localización :</h3>
                    <p>brasil</p>
                </div>
            </div>
        </section>
    )
}
export default ContactUsComp;