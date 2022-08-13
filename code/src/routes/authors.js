var express = require('express');
var router = express.Router();
var authorsController = require("../controllers/authorsController");

// Create author
router.get('/crear', authorsController.crear);
router.post('/crear', authorsController.procesarCrear);

// List author
router.get('/',authorsController.listar);

// Delete author
router.delete

// Search author
router.post('/search', authorsController.search)

module.exports = router;