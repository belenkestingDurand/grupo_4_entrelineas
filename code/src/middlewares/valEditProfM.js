const path = require('path');
const { body } = require('express-validator');

const validationEditProfile = []

if (body('userEmail') != "" || body('userNewEmail') != ""){
    validationEditProfile.push(
        body('userEmail').isEmail().withMessage('Campo completado incorrectamente. '),
        body('userNewEmail').notEmpty().withMessage('Campo incompleto')
    )
}
if ((body('userPassword') != "" || body('userNewPassword') != "")){
    validationEditProfile.push(
        body('userPassword').notEmpty().withMessage('Campo completado incorrectamente. '),    
        body('userNewPassword').notEmpty().withMessage('Tienes que ingresar la nueva contraseña')       
        )
    }
/*
    OPCIONAL: campo extra de 'Confirmar nueva contraseña
body('userNewPasswordConfirm').custom((value, {req}) => {
    if (value != req.body.userNewPassword) {
        throw new Error('La clave no coincide con la de arriba');
    }
    return true;
})
*/

module.exports = [ validationEditProfile ]