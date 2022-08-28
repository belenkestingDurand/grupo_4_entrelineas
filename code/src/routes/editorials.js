var express = require('express');
var router = express.Router();
var editorialsController = require("../controllers/editorialsController");

//Middlewares

const valEditorial = require('../middlewares/valEditorial');

// Create editorial
router.get('/crear', editorialsController.crear);
router.post('/crear', valEditorial, editorialsController.procesarCrear);

// List editorial
router.get('/',editorialsController.listar);

// Delete editorial
router.get('/delete/:id', editorialsController.delete);
router.post('/destroy/:id', editorialsController.destroy);

// Search editorial
router.post('/search', editorialsController.search)

module.exports = router;