const path = require('path')
const { body } = require('express-validator')
module.exports = [
    body('name')
        .notEmpty().withMessage('*Tienes que escribir el nombre de producto').bail()
        .isLength({min:3, max:50}).withMessage('*Ingresar entre 2 y 100 caracteres.'),
    body('type')
        .notEmpty().withMessage('*Seleccione un tipo de producto.'),
    body('price')
        .notEmpty().withMessage('*El precio no puede quedar vacio.'),
    body('about')
        .isLength({min:20, max:500}).withMessage('*Ingrese entre 20 y 500 caracteres.'),
    body('stock')
        .isNumeric({min:1}).withMessage('*El campo Stock debe valer 1 o mas.'),
    body('productImg').custom((value, {req}) => {
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.peg'];
        let file = req.file
        
        if (file){
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error (`*Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')}`);
            }
        }

        return true;
        })
]   