import React from "react";
import { Link } from "react-router-dom";

const InfoNat = () => {

    return (
        <div>
            <h1>NATACIÓN</h1>

            <div>
                <p id="natación">
                    Si te gusta nadar o te gustaría aprender a nadar, esta es tu academia.
                    La Academia de Natación, tiene como objetivo brindar a los niños y niñas de la
                    comunidad educativa la posibilidad de practicar y desarrollar sus habilidades
                    deportivas en el marco de un espacio recreativo y de integración social.
                    Esta academia está enfocada en la enseñanza y práctica de la natación,
                    para promover las capacidades físicas y psicológicas de los niños y niñas.
                    generando un mayor nivel de confianza, competitividad y seguridad en sí mismos. 
                </p>
            </div>
            <Link to="/">Home</Link>
            </div>
    )
}

export default InfoNat;