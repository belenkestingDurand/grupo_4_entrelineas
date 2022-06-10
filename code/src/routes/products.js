// routes/home.js
const express = require('express')
const router = express.Router()
//! implementar multer 

// CONTROLLER
const productsCtrl = require('../controllers/productsController')

//* USER: ADMIN

//- LISTAR PRODUCTO
router.get('/', productsCtrl.listarProducto)

//- CREATE PRODUCT 
router.get('/create', productsCtrl.crearProducto)
router.post('/create', productsCtrl.productoCreado)

//- EDIT PRODUCT
router.get('/:id/edit', productsCtrl.editarProducto)
router.put('/:id/edit', productsCtrl.productoEditado)

//- DELETE PRODUCT
router.delete('/delete/:id', productsCtrl.delete)


// exports
module.exports = router