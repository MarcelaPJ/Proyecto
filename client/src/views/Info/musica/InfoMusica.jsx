import React from "react";
import { Link } from "react-router-dom";

const InfoMusica = () => {

    return (
        <div>
            <h1>MÚSICA</h1>

            <div>
                <p id="musica">
                    Cantar o expresarse musicalmente es una de las mejores formas de liberar tensiones y
                    emociones. Esta academia de música te ayudará a desarrollar tu creatividad y
                    a expresar tus emociones. Los estudiantes de la academia llenarán sus cabezas de canciones, 
                    sonidos e instrumentos musicales. El propósito es que la música se entienda como un lenguaje 
                    para comunicarse entre los seres humanos, y que se creen lazos de amistad y confianza a través 
                    de la música practicada en conjunto.
                </p>
            </div>
            <Link to="/">Home</Link>
            </div>
    )
}

export default InfoMusica;