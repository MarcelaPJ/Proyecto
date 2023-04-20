import React from "react";
import { Link } from "react-router-dom";
import encabezado from "./encabezado.png"
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles["container"]}>
            <div>
                <button><Link to="/login" className={styles["link"]}>Inicia Sesión</Link></button>
                <button><Link to="/register" className={styles["link"]}>Crea una cuenta</Link></button>
                <img src={encabezado} alt="logo" className={styles["logo"]}/>
            </div>
            
            <button> 
                <Link to="/form" className={styles["link"]}>Inscribir Academia</Link> 
            </button>
            <button> 
                <Link to="/datos" className={styles["link"]}>Ver mis inscripciones</Link> 
            </button>
            <p>Esta es la oferta de academias deportivas y culturales que 
                tenemos disponibles para el año 2023.</p>
            
            
            <div className="grid">
                <h2>Academias Deportivas</h2>
                <ul className="">
                    <li className="futbol">
                        <h3>Fútbol</h3>
                        <button>
                            <Link to="/futbol" className={styles["link"]}>+ info</Link>
                        </button>
                    </li>
                    <li className="tenis">
                        <h3>Tenis</h3>
                        <button>
                            <Link to="/tenis" className={styles["link"]}>+ info</Link>
                        </button>
                    </li>
                    <li className="natacion">
                        <h3>Natación</h3>
                        <button>
                            <Link to="/natacion" className={styles["link"]}>+ info</Link>
                        </button>
                    </li>
                    <li className="atletismo">
                        <h3>Atletismo</h3>
                            <button>
                                <Link to="/atletismo" className={styles["link"]}>+ info</Link>
                            </button>
                    </li>
                </ul>
                <h2>Academias Artístico-culturales</h2>
                <div>
                    <div className="teatro">
                        <h3>Teatro</h3><button><Link to="/teatro" className={styles["link"]}>+ info</Link></button>
                    </div>
                    <div className="musica">
                        <h3>Música</h3><button><Link to="/musica" className={styles["link"]}>+ info</Link></button>
                    </div>
                    <div className="astronomia">
                        <h3>Astronomía</h3><button><Link to="/astronomia" className={styles["link"]}>+ info</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Home;