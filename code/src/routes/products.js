// routes/home.js
const express = require('express')
const router = express.Router()

//Middlewares
const uploadProd = require('../middlewares/multerProdM');
const authMiddleware = require('../middlewares/authMiddleware');
const createProdMW = require('../middlewares/createProdMW')
const modifProdMW = require('../middlewares/modifProdMW')

// CONTROLLER
const productsCtrl = require('../controllers/productsController')

//* USER: ADMIN

//- LISTAR PRODUCTO
router.get('/',authMiddleware, productsCtrl.listarProducto)

//- CREATE PRODUCT 
router.get('/create', productsCtrl.crearProducto)
router.post('/create'/*, createProdMW */, uploadProd.single('productImg'), productsCtrl.productoCreado)

//- EDIT PRODUCT
router.get('/:id/edit', productsCtrl.editarProducto)
router.put('/:id/edit',  modifProdMW, uploadProd.single('productImg'), productsCtrl.productoEditado)

//- DELETE PRODUCT
router.delete('/delete/:id', productsCtrl.delete)

//- SEARCH PRODUCT
router.post('/search', productsCtrl.search)


// exports
module.exports = router