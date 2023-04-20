import React from "react";
import { Link } from "react-router-dom";

const InfoBasq = () => {

    return (
        <div>
            <h1>BASQUETBALL</h1>

            <div>
                <p id="basquetball">
                    Si te gusta jugar tenis o te gustaría aprender a jugarlo, esta es tu academia.
                    La Academia de Tenis, tiene como objetivo brindar a los niños y niñas de la
                    comunidad educativa la posibilidad de practicar y desarrollar sus habilidades
                    deportivas en el marco de un espacio recreativo y de integración social.
                    La misión es fomentar, promover y desarrollar la práctica del deporte en general
                    y del tenis en especial, desde una temprana edad para que los practicantes vean en 
                    el Tenis un estilo de vida y tengan opción a una vida saludable.
                </p>
            </div>
            <Link to="/">Home</Link>
            </div>
    )
}

export default InfoBasq;