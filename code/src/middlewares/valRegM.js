const path = require('path');
const { body } = require('express-validator');
const User = require('../database/models/User');
const db = require('../database/models');
const sequelize = db.sequelize;
module.exports = [
    // validaciones de register
    // firstname y lastname obligatorios y al menos 2 caract
    body('firstName')
        .notEmpty().withMessage('Tienes que escribir tu nombre').bail()
        .isLength({min:2, max:100}).withMessage('La longitud tiene que tener entre 2 y 100 caracteres.'),
    body('lastName')
        .notEmpty().withMessage('Tienes que escribir tu apellido')
        .isLength({min:2, max:100}).withMessage('La longitud tiene que tener entre 2 y 100 caracteres.'),
        // email obligatorio y formato valido
        body('email')
        .notEmpty().withMessage('Tienes que escribir tu correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido')
        //validacion para que no se repitan los emails
        .custom(value => {
            return db.User.findOne({
                where: {
                    email: value
                }
            }).then(user => { if (user) {
                return Promise.reject('Email ya existe');
            }
        });
    }),
    // password obligatoria min 8 caract, may, min, num y caracter especial
    body('password')
        .notEmpty().withMessage('Tienes que escribir una contraseña')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('Debe incluir minúscula, mayúscula, numero y caracter especial'),    
    body('confpass')
        .notEmpty().withMessage('Tienes que confirmar la contraseña').bail()
        // validación de coincidencia de password con confirmación de password
        .custom((value, {req}) => {
           if (value != req.body.password) {
                throw new Error('La clave no coincide con la de arriba');
            }
            return true;
        }),    
        // validaciones de archivos de imágenes    
    body('img').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.peg', '.png', '.gif'];

        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')}`);
            }
        }

        return true;
        })  
]