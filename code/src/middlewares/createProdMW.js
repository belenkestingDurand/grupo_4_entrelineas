const path = require('path')
const { body } = require('express-validator')
module.exports = [
    body('productName')
        .notEmpty()
        .isLength({min:5})
        .withMessage('Ingresar un nombre, minimo 5 caracteres.'),
    body('type')
        .notEmpty()
        .withMessage('Seleccione un tipo de producto.'),
    body('author')
        .notEmpty()
        .withMessage('Seleccione un autor.'),
    body('genre')
        .notEmpty()
        .withMessage('Seleccione un genero.'),
    body('editorial')
        .notEmpty()
        .withMessage('Seleccione una editorial.'),
    body('price')
        .notEmpty()
        .withMessage('El precio no puede quedar vacio.'),
    body('about')
        .isLength({min:20})
        .withMessage('La descripcion debe tener 20 caracteres o mas.'),
    body('stock')
        .isNumeric({min:1})
        .withMessage('El campo Stock debe valer 1 o mas.'),
    body('productImg').custom((value, {req}) => {
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