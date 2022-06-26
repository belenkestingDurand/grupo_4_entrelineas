// routes/home.js
const express = require('express')
const router = express.Router()

// CONTROLLER
const homeCtrl = require('../controllers/homeController')

//- HOME PAGE
router.get('/',homeCtrl.home)
router.get('/home',homeCtrl.home)

//- PRODUCT DETAIL

router.get('/detalle/:bookId', homeCtrl.detalle)

//- CARRITO
router.get('/carrito', homeCtrl.carrito)

// exports
module.exports = router