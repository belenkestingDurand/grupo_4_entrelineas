const path = require('path');
const { body } = require('express-validator');
const Author = require('../database/models/Author');
const db = require('../database/models');
const sequelize = db.sequelize;
module.exports = [
    // validaciones de author
    // fullname obligatorios y entre 3 y 60 caracteres
    body('fullName')
        .notEmpty().withMessage('Tienes que escribir un nombre').bail()
        .isLength({min:3, max:60}).withMessage('La longitud tiene que tener entre 3 y 60 caracteres.'),
   
]