const Academia = require('../models/academias.model');

module.exports.getAllAcademies = async (req, res) => {
    try {
        const academies = await Academia.find();
        res.json({
            message: "Academias encontradas",
            academies
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al encontrar academias",
            error
        });
    }
}

module.exports.getOneAcademy = async (req, res) => {
    try {
        const {id} = req.params;
        const academy = await Academia.findById(id);
        res.json({
            message: "Academia encontrada",
            academy
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al encontrar academia",
            error
        });
    }
}

module.exports.createAcademy = async (req, res) => {
    try {
        const newAcademy = await Academia.create(req.body.academia);
        res.json({
            message: "Academia creada",
            newAcademy
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear academia",
            error
        });
    }
}

module.exports.updateAcademy = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        const updatedAcademy = await Academia.findByIdAndUpdate(id, body.academia, {new: true});
        res.json({
            message: "Academia actualizada",
            updatedAcademy
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar academia",
            error
        });
    }
}

module.exports.deleteAcademy = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAcademy = await Academia.deleteOne({_id: id});
        res.json({
            message: "Academia eliminada",
            deletedAcademy
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar academia",
            error
        });
    }
}

