// routes/home.js
const express = require('express')
const router = express.Router()

//! implementar multer 
const uploadProd = require('../middlewares/multerProdM');

// CONTROLLER
const productsCtrl = require('../controllers/productsController')

//* USER: ADMIN

//- LISTAR PRODUCTO
router.get('/', productsCtrl.listarProducto)

//- CREATE PRODUCT 
router.get('/create', productsCtrl.crearProducto)
router.post('/create', uploadProd.single('productImg'), productsCtrl.productoCreado)

//- EDIT PRODUCT
router.get('/:id/edit', productsCtrl.editarProducto)
router.put('/:id/edit', uploadProd.single('productImg'), productsCtrl.productoEditado)

//- DELETE PRODUCT
router.delete('/delete/:id', productsCtrl.delete)


// exports
module.exports = router