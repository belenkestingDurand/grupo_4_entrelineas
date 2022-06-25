const path = require('path');
const { body } = require('express-validator');

module.exports = [
    // validaciones de login
    body('email')
    .notEmpty().withMessage('Tienes que escribir tu correo electrónico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
         
]