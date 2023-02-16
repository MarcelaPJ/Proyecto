import React from "react";
import { Link } from "react-router-dom";
import styles from "./Info.module.scss";


const Info = () => {

    return (
        <div>
            <h1>Nombre de la academia</h1>
            
            <div>
                <p id="futbol" className={styles["fut"]}>
                    Si te encanta divertirte jugando fútbol en tu casa, con tus amigos, vecinos, 
                    e incluso, si nunca antes lo has jugado pero te gustaría aprender ¿Por qué 
                    no hacerlo de forma divertida en el colegio?. 
                    La Academia de Fútbol, tiene como objetivo brindar a los niños y niñas de 
                    la comunidad educativa la posibilidad de practicar y desarrollar sus habilidades 
                    deportivas en el marco de un espacio recreativo y de integración social.
                    Esta academia mixta de fútbol está orientada hacia el desarrollo completo de las 
                    capacidades y habilidades de los jugadores; mejorar la motricidad general y desarrollar
                    habilidades motrices especificas. Además trata de mejorar las cualidades volitivas de 
                    los niños, tan fundamentales en los deportes de equipo, tales como la voluntad, 
                    el esfuerzo y la cooperación.
                </p>
            </div>
            <div>
                <p id="tenis">
                    Si te gusta jugar tenis o te gustaría aprender a jugarlo, esta es tu academia.
                    La Academia de Tenis, tiene como objetivo brindar a los niños y niñas de la
                    comunidad educativa la posibilidad de practicar y desarrollar sus habilidades
                    deportivas en el marco de un espacio recreativo y de integración social.
                    La misión es fomentar, promover y desarrollar la práctica del deporte en general
                    y del tenis en especial, desde una temprana edad para que los practicantes vean en 
                    el Tenis un estilo de vida y tengan opción a una vida saludable.
                </p>
            </div>
            <div>
                <p id="natacion">
                    Si te gusta nadar o te gustaría aprender a nadar, esta es tu academia.
                    La Academia de Natación, tiene como objetivo brindar a los niños y niñas de la
                    comunidad educativa la posibilidad de practicar y desarrollar sus habilidades
                    deportivas en el marco de un espacio recreativo y de integración social.
                    Esta academia está enfocada en la enseñanza y práctica de la natación,
                    para promover las capacidades físicas y psicológicas de los niños y niñas.
                    generando un mayor nivel de confianza, competitividad y seguridad en sí mismos. 
                </p>
            </div>
            <div>
                <p id="atletismo">
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
            <div>
                <p id="teatro">
                    Si te gusta el teatro o te gustaría aprender a actuar, esta es tu academia.
                    Conectarse con otra persona es uno de los grandes actos del ser humano. 
                    Esta academia de teatro abrirá todo un mundo a los niños y niñas. A través del 
                    arte de la actuación, aprenderás lecciones de vida que te permitirán funcionar 
                    tanto en la vida real como en el mundo escénico. Aprenderás a trabajar en equipo, 
                    a establecer relaciones sólidas con otros pares, a confiar en ti mismo y a descubrir 
                    tu propia voz. En esta academia, explorarás tu creatividad y desarrollarás la sensibilidad, 
                    la imaginación y la autonomía propia. Usaremos juegos de teatro e improvisaciones para 
                    despertar, explorar estos impulsos creativos y aprender a expresar tus emociones.
                </p>
            </div>
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
    );
}

export default Info;





// (tenis)



// (natación)


// (atletismo)


// (teatro)


// (música)



