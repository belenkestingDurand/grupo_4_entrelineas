// routes/home.js
const express = require('express')
const router = express.Router()

// CONTROLLER
const homeCtrl = require('../controllers/homeController')


router.get('/',homeCtrl.home)
router.get('/home',homeCtrl.home)
// router.get('/detalle/:bookId', homeCtrl.detalle)
router.get('/detalle', homeCtrl.detalle)
router.get('/carrito', homeCtrl.carrito)
router.get('/crearProducto', homeCtrl.crearProducto)
router.get('/listarProducto', homeCtrl.listarProducto)
router.get('/editarProducto/', homeCtrl.editarProducto)

// exports
module.exports = router