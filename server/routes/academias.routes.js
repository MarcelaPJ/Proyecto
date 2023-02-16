const { getAllAcademies, getOneAcademy, createAcademy, updateAcademy, deleteAcademy } = require('../controllers/academias.controllers');
const { createUser, loginUser } = require('../controllers/user.controllers');
const { authenticate } = require ('../config/jwt.config');

module.exports = app => {
    app.get('/api/academias', getAllAcademies);
    app.get('/api/academias/:id', getOneAcademy);
    app.post('/api/academias', createAcademy);
    app.put('/api/academias/:id', updateAcademy);
    app.delete('/api/academias/:id', deleteAcademy);

    app.post('/api/academias/register', createUser);
    app.post('api/academias/login', loginUser);
}
