import React from "react";
import sobre from '../../images/sobre nos.png'

const AboutTxt = () => {
    return (
        <section class="about">
            <div class="image">
                <img src={sobre} alt="personagens reunidos" />
            </div>

            <div class="content">
                <h3 class="about-title">Sobre nosotros</h3>
                <p>
                    Somos un equipo de desarrolladores que apuntamos a
                    ayudar y colaborar con otros,
                    utilizando todas las herramientas y conocimientos a nuestra disposición. </p>
                <p>Ayudando así a todos aquellos que llegan aquí necesitados de refugio.
                    y no sabes muy bien lo que te espera en este nuevo viaje de tu vida, en esta nueva tierra.
                    Y también aquellos que llevan un tiempo aquí pero necesitan ayuda,
                    que, a través de esta misma tecnología, podemos romper barreras y colaborar para
                    una mejor condición de vida para todos.
                    Y así los encaminamos hacia un camino de igualdad social.
                </p>
            </div>
        </section>
    )
}
export default AboutTxt;