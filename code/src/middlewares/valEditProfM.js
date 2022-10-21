const path = require('path');
const { body } = require('express-validator');

function validationMW(req, res, next) {
    // preguntar por parametro field y de ahi ver que IF usar
    const validationErrors = []
    // - En caso de que se este modificando el nombre y apellido
    if(req.params.field == 'name'){
        validationErrors.push(
            body('userFirstName')
                .notEmpty()
                .isLength({min:3,max:100})
                .withMessage('Inserte un nombre entre 3 y 100 caracteres'),
            body('userLastName')
                .notEmpty()
                .isLength({min:3,max:100})
                .withMessage('Inserte un apellido entre 3 y 100 caracteres'),
        )
    }
    // - En caso que se este modificando la direccion de envio

    // - En caso de que se este modificando el email
    if (req.params.field == 'email') {
        if (body('userEmail') != "") {
            validationErrors.push(
                body('userEmail')
                    .isEmail()
                    .withMessage('Campo completado incorrectamente. ')
            )
        } else if (body('userNewEmail') != "") {
            validationErrors.push(
                body('userNewEmail')
                    .notEmpty()
                    .withMessage('Campo incompleto')
            )
        }
    // - En caso de que se este modificando la contraseña
    } else if (req.params.field == 'password') {
        if (body('userPassword') != "") {
            validationErrors.push(
                body('userPassword')
                    .notEmpty()
                    .withMessage('Campo completado incorrectamente. ')
            )
        } else if (body('userNewPassword') != "") {
            validationErrors.push(
                body('userNewPassword')
                .notEmpty()
                .withMessage('Tienes que ingresar la nueva contraseña')
            )
        }
    }

    // else if (req.paramas.field == 'adress')
    next()
}
module.exports = validationMW