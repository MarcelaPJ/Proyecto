import React from "react";
import { Link } from "react-router-dom";

const InfoTeatro = () => {

    return (
        <div>
            <h1>TEATRO</h1>

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
            <Link to="/">Home</Link>
            </div>
    )
}

export default InfoTeatro;