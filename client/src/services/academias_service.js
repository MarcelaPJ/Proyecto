import axios from 'axios';

export const getAllAcademies = () => axios.get('http://localhost:8000/api/academias');

export const getOneAcademy = (id) => axios.get('http://localhost:8000/api/academias/' + id);

export const createAcademy = (academia) => axios.post('http://localhost:8000/api/academias', academia);

export const updateAcademy = (id, academia) => axios.put('http://localhost:8000/api/academias/' + id, academia );

export const deleteAcademy = (id) => axios.delete('http://localhost:8000/api/academias/' + id);

export const createUser = (name, email, password, confirmPassword) => axios.post('http://localhost:8000/api/academias/register', { name, lastName:name, email, password, confirmPassword });

export const loginUser = (email, password) => axios.post('http://localhost:8000/api/academias/login', { email, password }, { withCredentials: true });

//export const getUser = () => axios.get('http://localhost:8000/api/users', { withCredentials: true });
  
