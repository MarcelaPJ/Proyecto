import React from "react";
import { Link } from "react-router-dom";

const InfoAtle = () => {

    return (
        <div>
            <h1>ATLETISMO</h1>

            <div>
                <p id="Atletismo">
                    La Academia de Atletismo, tiene como objetivo brindar a los niños y niñas de la
                    comunidad educativa la posibilidad de practicar y desarrollar sus habilidades
                    deportivas en el marco de un espacio recreativo y de integración social.
                    Esta academia está enfocada en la enseñanza y práctica del atletismo,
                    fomentando el espíritu deportivo en los atletas para que desarrollen el
                    valor y la satisfacción de enfrentar retos físicos y psicológicos, así 
                    como la exigencia y perseverancia en la práctica deportiva.
                    La misión es inculcar a todos los miembros las virtudes educativas,
                    como son: el control de uno mismo y de los demás, el juego limpio y 
                    el respeto de las reglas establecidas.
                </p>
            </div>
            <Link to="/">Home</Link>
            </div>
    )
}

export default InfoAtle;