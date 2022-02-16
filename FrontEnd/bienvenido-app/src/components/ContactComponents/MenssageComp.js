import React from "react";

const MenssageComp = () => {
    return (
        <section className="contact">
            <div className="row">
                <div className="image">
                    <img src="images/contatanos (1).png" alt="" />
                </div>

                <form action="">
                    <h3>Mandanos un mensaje</h3>
                    <input type="text" placeholder="Nombre" className="box" />
                    <input type="email" placeholder="email" className="box" />
                    <input type="number" placeholder="telefone" className="box" />
                    <textarea
                        name=""
                        className="box"
                        placeholder="mensaje"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <input type="submit" value="enviar mensaje" className="btn" />
                </form>
            </div>
        </section>
    )
}

export default MenssageComp;