const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Debe ingresar su nombre"],
        minlength: [3, "Su nombre debe tener al menos 3 caracteres"]
    },
    lastName: {
        type: String,
        required: [true, "Debe ingresar su apellido"],
        minlength: [2, "Su apellido debe tener al menos 2 caracteres"]
    },
    email: {
        type: String,
        required: [true, "Debe ingresar su correo electrónico"],
        minlength: [5, "El correo debe tener al menos 5 caracteres"],
        maxlength: [50, "El correo no debe superar los 50 caracteres"],
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: [true, "Debe crear una contraseña"],
        minlength: [6, "La contraseña debe tener al menos 6 caracteres"],
        maxlength: [20, "La contraseña no debe superar los 20 caracteres"]
    }
}, { timestamps: true });

userSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

userSchema.pre('validate', function(next) {
    if (this.password !== this._confirmPassword) {
        this.invalidate('confirmPassword', "Las contraseñas deben coincidir");
    }
    next();
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

userSchema.plugin(uniqueValidator, { mesage: '{PATH} ya tiene una cuenta creada'});

const User = model('Usuario', userSchema);

module.exports = User;