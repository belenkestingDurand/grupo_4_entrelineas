// routes/home.js
const express = require('express')
const router = express.Router()

// CONTROLLER
const homeCtrl = require('../controllers/homeController')


router.get('/',homeCtrl.home)
router.get('/home',homeCtrl.home)
router.get('/detalle', homeCtrl.detalle)
router.get('/carrito', homeCtrl.carrito)


// exports
module.exports = router