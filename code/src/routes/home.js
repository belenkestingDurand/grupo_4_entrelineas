// routes/home.js
const express = require('express')
const router = express.Router()

// CONTROLLER
const homeCtrl = require('../controllers/homeController')

//- HOME PAGE
router.get('/',homeCtrl.home)
router.get('/home',homeCtrl.home)

//- PRODUCT DETAIL

router.get('/detalle:bookId', homeCtrl.detalle)

//- CARRITO
router.get('/carrito', homeCtrl.carrito)

//- LOGIN - REGISTRO
router.get('/login',homeCtrl.login)
router.get('/register',homeCtrl.register)



// exports
module.exports = router