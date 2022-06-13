// routes/home.js
const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path');
//! implementar multer 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let folder = path.join(__dirname, '../../public/img/products');
      cb(null, folder);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
    const upload = multer ({storage})

// CONTROLLER
const productsCtrl = require('../controllers/productsController')

//* USER: ADMIN

//- LISTAR PRODUCTO
router.get('/', productsCtrl.listarProducto)

//- CREATE PRODUCT 
router.get('/create', productsCtrl.crearProducto)
router.post('/create', upload.single('productImg'), productsCtrl.productoCreado)

//- EDIT PRODUCT
router.get('/:id/edit', productsCtrl.editarProducto)
router.put('/:id/edit', productsCtrl.productoEditado)

//- DELETE PRODUCT
router.delete('/delete/:id', productsCtrl.delete)


// exports
module.exports = router