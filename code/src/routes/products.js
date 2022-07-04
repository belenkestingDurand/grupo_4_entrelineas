// routes/home.js
const express = require('express')
const router = express.Router()

//Middlewares
const uploadProd = require('../middlewares/multerProdM');
const authMiddleware = require('../middlewares/authMiddleware');


// CONTROLLER
const productsCtrl = require('../controllers/productsController')

//* USER: ADMIN

//- LISTAR PRODUCTO
router.get('/',authMiddleware, productsCtrl.listarProducto)

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