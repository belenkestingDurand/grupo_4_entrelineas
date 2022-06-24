const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('firstName').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir tu apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir tu correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),    
    body('confpass')
        .notEmpty().withMessage('Tienes que confirmar la contraseña').bail()
        .custom((value, {req}) => {
            console.log(value);
            console.log(req.body.password);
            if (value != req.body.password) {
                throw new Error('La clave no coincide con la de arriba');
            }
            return true;
        }),        
    body('img').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

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