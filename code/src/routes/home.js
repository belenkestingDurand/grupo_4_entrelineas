// routes/home.js
const express = require('express')
const router = express.Router()

// CONTROLLER
const homeCtrl = require('../controllers/homeController')

//- HOME PAGE
router.get('/',homeCtrl.home)
router.get('/home',homeCtrl.home)

//- PRODUCT DETAIL
router.get('/product/:bookId', homeCtrl.detalle) // cambiar a /products/:bookId
//router.get('/detalle', homeCtrl.detalle)

//- CARRITO
router.get('/carrito', homeCtrl.carrito)




// exports
module.exports = router