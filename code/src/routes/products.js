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
router.get('/create', productsCtrl.crearProducto) // cambiar a /products/create"
router.post('/', productsCtrl.productCreated)

//- EDIT PRODUCT
router.get('/:id/edit', productsCtrl.editarProducto) // cambiar a /products/:id/edit
// router.put('/listarProducto', homeCtrl.{producto editado})

//- DELETE PRODUCT
// router.delete('/', productsCtrl.{productoborrado})


// exports
module.exports = router