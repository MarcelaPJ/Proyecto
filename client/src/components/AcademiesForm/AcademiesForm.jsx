import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createAcademy } from '../../services/academias_service';
import styles from "./AcademiesForm.module.css";

const AcademiesForm = () => {
    const [academia, setAcademia]= useState({
        fullName: '',
        grade: '',
        age: '',
        parentName: '',
        parentPhone: '',
        academies: '',
    });
    const navigate = useNavigate();
    const [errorsResponse, setErrorsResponse] = useState();

    const academiaSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(30, 'El nombre es muy largo')
            .required('El nombre y apellido son requeridos'),
        grade: Yup.string()
            .required('El curso actual es requerido'),
        age: Yup.number()
            .min(5, 'La edad mínima es 5 años')
            .max(18, 'La edad máxima es 18 años')
            .required('La edad es requerida'),
        parentName: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(30, 'El nombre es muy largo')
            .required('El nombre y apellido del padre/madre o tutor son requeridos'),
        parentPhone: Yup.number()
            .required('El número de teléfono es requerido'),
        //academies: Yup.string()
            //.required('Debe seleccionar al menos una academia'),

    });

    const newAcademies = async (values) => {
        try {
            console.log(values)
            await createAcademy(values);
            navigate('/datos');
        } catch (error) {
            console.log(error.response.data.errors)
            setErrorsResponse(error.response.data.error.errors)
        }   
    };

    return (
        <div className= {styles["cont"]}>
            <div>
                <h1>Inscribe aquí tus academias</h1>
                <button>
                    <Link to='/'>Home</Link>
                </button>
            </div>
            <div>
                <p>
                    Para inscribir a su hijo/a en una academia, debe completar el siguiente formulario.
                </p>
                <p>
                    Sólo podrá inscribir un máximo de 4 academias.
                </p>
                <p>
                    Luego de dar click a "Enviar", será redirigido a la página de "Mis datos e inscripciones". Allí
                    podrá ver las academias que ha inscrito, así como también podrá eliminarlas o editar sus datos.
                </p>
            </div>
            <Formik
                enableReinitialize
                initialValues={academia}
                validationSchema={academiaSchema}
                onSubmit={newAcademies}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={styles["form"]}>
                            <div>
                                <label htmlFor="fullName">Nombre y apellido del estudiante:</label>
                                <Field name="fullName" />
                                {(errors.fullName && touched.fullName) && (
                                    <p>{errors.fullName}</p>
                                )}
                                {errorsResponse?.fullName && (
                                    <div>{errorsResponse.fullName.message}</div>
                                )}
                            </div>
                            <div>
                                <label htmlFor="grade">Curso actual del estudiante:</label>
                                <Field name="grade" />
                                {(errors.grade && touched.grade) && (
                                    <p>{errors.grade}</p>
                                )}
                                {errorsResponse?.grade && (
                                    <div>{errorsResponse.grade.message}</div>
                                )}
                            </div>
                            <div>
                            <label htmlFor="age">Edad del estudiante:</label>
                                <Field name="age" />
                                {(errors.age && touched.age) && (
                                    <p>{errors.age}</p>
                                )}
                                {errorsResponse?.age && (
                                    <div>{errorsResponse.age.message}</div>
                                )}
                            </div>
                            <div>
                                <label htmlFor="parentName">Nombre y apellido del apoderado:</label>
                                <Field name="parentName" />
                                {(errors.parentName && touched.parentName) && (
                                    <p>{errors.parentName}</p>
                                )}
                                {errorsResponse?.parentName && (
                                    <div>{errorsResponse.parentName.message}</div>
                                )}
                            </div>
                            <div>
                                <label htmlFor="parentPhone">Teléfono del apoderado:</label>
                                <Field name="parentPhone" />
                                {(errors.parentPhone && touched.parentPhone) && (
                                    <p>{errors.parentPhone}</p>
                                )}
                                {errorsResponse?.parentPhone && (
                                    <div>{errorsResponse.parentPhone.message}</div>
                                )}
                            </div>
                            <div>
                                <label htmlFor="academies">Academias:</label>
                                    <label>
                                    <Field type="checkbox" name="academies" value="futbol"/>
                                    {(errors.academies && touched.academies) && (
                                        <p>{errors.academies}</p>
                                    )}
                                    {errorsResponse?.academies && (
                                        <div>{errorsResponse.academies.message}</div>
                                    )}
                                    Fútbol
                                    </label>
                                    <label>
                                    <Field type="checkbox" name="academies" value="tenis"/>
                                    {(errors.academies && touched.academies) && (
                                        <p>{errors.academies}</p>
                                    )}
                                    {errorsResponse?.academies && (
                                        <div>{errorsResponse.academies.message}</div>
                                    )}
                                    Tenis
                                    </label>
                                    <label>
                                    <Field type="checkbox" name="academies" value="natacion"/>
                                    {(errors.academies && touched.academies) && (
                                        <p>{errors.academies}</p>
                                    )}
                                    {errorsResponse?.academies && (
                                        <div>{errorsResponse.academies.message}</div>
                                    )}
                                    Natación
                                    </label>
                                    <label>
                                    <Field type="checkbox" name="academies" value="atletismo"/>
                                    {(errors.academies && touched.academies) && (
                                        <p>{errors.academies}</p>
                                    )}
                                    {errorsResponse?.academies && (
                                        <div>{errorsResponse.academies.message}</div>
                                    )}
                                    Atletismo
                                    </label>
                                    <label>
                                    <Field type="checkbox" name="academies" value="teatro"/>
                                    {(errors.academies && touched.academies) && (
                                        <p>{errors.academies}</p>
                                    )}
                                    {errorsResponse?.academies && (
                                        <div>{errorsResponse.academies.message}</div>
                                    )}
                                    Teatro
                                    </label>
                                    <label>
                                    <Field type="checkbox" name="academies" value="musica"/>
                                    {(errors.academies && touched.academies) && (
                                        <p>{errors.academies}</p>
                                    )}
                                    {errorsResponse?.academies && (
                                        <div>{errorsResponse.academies.message}</div>
                                    )}
                                    Música
                                    </label>
                                    <label>
                                    <Field type="checkbox" name="academies" value="astronomia"/>
                                    {(errors.academies && touched.academies) && (
                                        <p>{errors.academies}</p>
                                    )}
                                    {errorsResponse?.academies && (
                                        <div>{errorsResponse.academies.message}</div>
                                    )}
                                    Astronomía
                                </label>
                            </div>
                             <br/>
                            <button type="submit">Enviar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AcademiesForm;


