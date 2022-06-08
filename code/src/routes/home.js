// routes/home.js
const express = require('express')
const router = express.Router()

// CONTROLLER
const homeCtrl = require('../controllers/homeController')

//- HOME PAGE
router.get('/',homeCtrl.home)
router.get('/home',homeCtrl.home)

//- PRODUCT DETAIL
router.get('/detalle/:bookId', homeCtrl.detalle) // cambiar a /products/:bookId
//router.get('/detalle', homeCtrl.detalle)

//- CARRITO
router.get('/carrito', homeCtrl.carrito)




//* USER: ADMIN
router.get('/listarProducto', homeCtrl.listarProducto)

//- CREATE PRODUCT 
router.get('/crearProducto', homeCtrl.crearProducto) // cambiar a /products/create"
// router.post('/listarProducto', homeCtrl.{producto creado})

// - EDIT PRODUCT
router.get('/editarProducto', homeCtrl.editarProducto) // cambiar a /products/:id/edit
// router.put('/listarProducto', homeCtrl.{producto editado})

//- DELETE PRODUCT
// router.delete('/listarProducto', homeCtrl.{producto borrado})

// exports
module.exports = router