import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateAcademy, getOneAcademy, deleteAcademy } from '../../services/academias_service';

const Datos = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [academias, setAcademias] = useState([]);

    const getAcademiaFromService = async () => {
        try {
            const academiaFromService = await getOneAcademy();
            setAcademias(academiaFromService.data.academias);

        } catch (error) {
            console.log(error);
        }
    };

    const deleteAcademiaFromService = async (id) => {
        try {
            await deleteAcademy(id);
            const academyList = academias.filter(academia => academia._id !== id);
            setAcademias(academyList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAcademiaFromService();
    }, []);

    return (
        <div>
            <button>
                    <Link to='/'>Home</Link>
            </button>
            <h1>Mis datos e inscripciones</h1>

            <p>Acá se mostrarán los datos y las inscripciones que haya realizado, 
                además tendrá la posibilidad de eliminar academias.</p>
            <div>
                <table>
                    <thead>
                        <span>Datos del estudiante</span>
                            <tr>
                                <th>Nombre</th>
                                <th>Curso</th>
                                <th>Edad</th>
                                <th>Academias</th>
                            </tr>
                        <span>Datos del apoderado</span>
                            <tr>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                            </tr>
                    </thead>
                    <tbody>
                        {academias.length > 0 ? academias.map((academia, index) => (
                            <><tr key={academia.id}>
                                <td>{academia.fullName}</td>
                                <td>{academia.grade}</td>
                                <td>{academia.age}</td>
                                <td>{academia.academies}</td>
                            </tr><tr>
                                    <td>{academia.parentName}</td>
                                    <td>{academia.parentPhone}</td>
                                 </tr></>
                        )) :
                             <tr>
                                <td>No hay datos</td>
                             </tr>
                             }
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Datos;