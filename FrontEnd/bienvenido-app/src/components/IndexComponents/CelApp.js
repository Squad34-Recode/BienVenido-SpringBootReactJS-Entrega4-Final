import React from "react";
import { Link } from 'react-router-dom';

const CelApp = () => {
    return (
        <section className="aboutapp" id="aboutapp">
      <h1 className="heading">BienVenido APP</h1>

      <div className="row">
        <div className="image">
          <img src="images/about-img.png" alt="" />
        </div>

        <div className="content">
          <h3>Eche un vistazo a nuestra aplicación</h3>
          <p>
            la aplicación aún no está disponible, en un futuro próximo la pondremos a disposición.
            la aplicación aún no está disponible, en un futuro próximo la pondremos a disposición
            la aplicación aún no está disponible, en un futuro próximo la pondremos a disposición
            la aplicación aún no está disponible, en un futuro próximo la pondremos a disposición
          </p>

          <div className="buttons">
            <Link to="#"><img src="images/google-btn.png" alt="" /></Link>
            <Link to="#"><img src="images/app-store-btn.png" alt="" /></Link>
          </div>
        </div>
      </div>
    </section>
    )
}


export default CelApp;