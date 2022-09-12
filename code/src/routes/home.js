// routes/home.js
const express = require('express')
const router = express.Router()

// CONTROLLER
const homeCtrl = require('../controllers/homeController')

//- HOME PAGE
router.get('/',homeCtrl.home)
router.get('/home',homeCtrl.home)
router.get('/books', homeCtrl.listarLibros)
router.get('/ebooks', homeCtrl.listarEbooks)
router.get('/merch', homeCtrl.listarMerch)

//- PRODUCT DETAIL

router.get('/detalle/:bookId', homeCtrl.detalle)

//- CARRITO
router.get('/carrito', homeCtrl.carrito)

//- SEARCH
router.post('/search2', homeCtrl.search2)

// exports
module.exports = router