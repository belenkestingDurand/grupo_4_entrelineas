var express = require('express');
var router = express.Router();
var apiController = require("./apiControllers");

router.get('/showCart', apiController.listarProductos);
router.get('/userLogged', apiController.infoDeSession);



module.exports = router
//router.post('/crear', valAuthor, authorsController.procesarCrear);