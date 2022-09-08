var express = require('express');
var router = express.Router();
var apiController = require("./apiControllers");

router.get('/showCart', apiController.listar);

module.exports = router
//router.post('/crear', valAuthor, authorsController.procesarCrear);