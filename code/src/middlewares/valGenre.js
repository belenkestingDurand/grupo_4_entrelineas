const path = require('path');
const { body } = require('express-validator');
const Author = require('../database/models/Genre');
const db = require('../database/models');
const sequelize = db.sequelize;
module.exports = [
    // validaciones de géneros
    // name obligatorios y entre 3 y 40 caracteres
    body('name')
        .isLength({min:3, max:40}).withMessage('La longitud tiene que tener entre 3 y 40 caracteres.'),
   
]