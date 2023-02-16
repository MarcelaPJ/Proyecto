const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const academiaSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Debe ingresar el nombre del estudiante"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        maxlength: [30, "El nombre no debe superar los 30 caracteres"],
        unique: true,
    },
    grade: {
        type: String,
        required: [true, "Debe ingresar el curso del estudiante"],
    },
    age: {
        type: Number,
        required: [true, "Debe ingresar la edad del estudiante"],
        min: [5, "La edad debe ser mayor a 5 años"],
        max: [18, "La edad debe ser menor a 18 años"]
    },
    parentName: {
        type: String,
        required: [true, "Debe ingresar el nombre de padre/madre o tutor del estudiante"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        maxlength: [30, "El nombre no debe superar los 30 caracteres"]
    },
    parentPhone: {
        type: Number,
        required: [true, "Debe ingresar el número de teléfono del padre/madre o tutor del estudiante"],
        minlength: [8, "El número de teléfono debe tener al menos 8 caracteres"],
        maxlength: [8, "El número de teléfono no debe superar los 8 caracteres"]
    },
    academies: {
        type: String,
        required: [true, "Debe inscribir al menos 1 academia"],
        max: [4, "Puede inscribir como máximo 4 academias"]
    },
}, { timestamps: true });

academiaSchema.plugin(uniqueValidator, { mesage: '{PATH} ya tiene inscripciones activas'});

const Academia = model('Academia', academiaSchema);

module.exports = Academia;


