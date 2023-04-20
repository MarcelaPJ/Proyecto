import React from "react";
import { Link } from "react-router-dom";

const InfoAstro = () => {

    return (
        <div>
            <h1>ASTRONOMIA</h1>

            <div>
                <p id="astronomia">
                    Seguro que te encanta observar el cielo y las estrellas y te haces 
                    muchas preguntas sobre el Universo: cómo y cuando se formó, qué otros 
                    planetas existen, cómo son la Tierra, el Sol y la Luna, si es cierto que hay 
                    extraterrestres, cómo viajan al espacio los astronautas, etc.
                    El objetivo de esta academia es invitar a los niños a conocer interesantes temas 
                    del universo a través de actividades lúdicas, experimentos, y excursiones nocturnas 
                    (menores de 10 años acompañados por un adulto).
                </p>
            </div>
            <Link to="/">Home</Link>
            </div>
    )
}

export default InfoAstro;