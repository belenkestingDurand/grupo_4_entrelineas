var express = require('express');
var router = express.Router();
var genresController = require("../controllers/genresController");

// Create genre
router.get('/crear', genresController.crear);
router.post('/crear', genresController.procesarCrear);

// List genre
router.get('/',genresController.listar);

// Delete genre
router.get('/delete/:id', genresController.delete);
router.post('/delete/:id', genresController.destroy);

// Search genre
router.post('/search', genresController.search)

module.exports = router;