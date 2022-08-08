const path = require('path');
const { body } = require('express-validator');

function validationMW(req, res, next) {
    // preguntar por parametro field y de ahi ver que IF usar
    const validationErrors = []
    console.log('EN MIDDLEWARE');
    if (req.params.field == 'email') {
        if (body('userEmail') != "") {
            validationErrors.push(
                body('userEmail').isEmail().withMessage('Campo completado incorrectamente. ')
            )
        } else if (body('userNewEmail') != "") {
            validationErrors.push(
                body('userNewEmail').notEmpty().withMessage('Campo incompleto')
            )
        }
    } else if (req.params.field == 'password') {
        if (body('userPassword') != "") {
            validationErrors.push(
                body('userPassword').notEmpty().withMessage('Campo completado incorrectamente. ')
            )
        } else if (body('userNewPassword') != "") {
            validationErrors.push(
                body('userNewPassword').notEmpty().withMessage('Tienes que ingresar la nueva contraseña')
            )
        }
    }
    // else if (req.paramas.field == 'adress')
    console.log(validationErrors);
    next()
}
module.exports = validationMW

/*
    OPCIONAL: campo extra de 'Confirmar nueva contraseña
body('userNewPasswordConfirm').custom((value, {req}) => {
    if (value != req.body.userNewPassword) {
        throw new Error('La clave no coincide con la de arriba');
    }
    return true;
})
*/