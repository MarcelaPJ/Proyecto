import React from "react";
import { Link } from "react-router-dom";
import encabezado from "./encabezado.png"
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles["container"]}>
            <div>
                <img src={encabezado} alt="logo" className={styles["logo"]}/>
                <button><Link to="/login" className={styles["link"]}>Inicia Sesión</Link></button>
                <button><Link to="/register" className={styles["link"]}>Crea una cuenta</Link></button>
            </div>
            
            <button> 
                <Link to="/datos" className={styles["link"]}>Ver mis inscripciones</Link> 
            </button>
            <p>Esta es la oferta de academias deportivas y culturales que 
                tenemos disponibles para el año 2023.</p>
            
            
            <div>
                <h2>Academias Deportivas</h2>
                <div>
                    <ul>
                        <li>Fútbol</li>
                            <button>
                                <Link to="/info#futbol" className={styles["link"]}>+ info</Link>
                            </button>
                        <li>Tenis</li>
                            <button>
                                <Link to="/info#tenis" className={styles["link"]}>+ info</Link>
                            </button>
                        <li>Natación</li>
                            <button>
                                <Link to="/info#natacion" className={styles["link"]}>+ info</Link>
                            </button>
                        <li>Atletismo</li>
                            <button>
                                <Link to="/info#atletismo" className={styles["link"]}>+ info</Link>
                            </button>
                    </ul>
                </div>
                <h2>Academias Artístico-culturales</h2>
                <div>
                    <ul>
                        <li>Teatro</li><button><Link to="/info#teatro" className={styles["link"]}>+ info</Link></button>
                        <li>Música</li><button><Link to="/info#musica" className={styles["link"]}>+ info</Link></button>
                        <li>Astronomía</li><button><Link to="/info#astronomia" className={styles["link"]}>+ info</Link></button>
                    </ul>
                </div>
            </div>
        </div>
    );
    }

export default Home;