// routes/user.js
const express = require('express');

const router = express.Router();

// CONTROLLER
const userCtrl = require('../controllers/userController');

//Middlewares
const upload = require('../middlewares/multerM');
const valRegM = require('../middlewares/valRegM');
const valLogM = require('../middlewares/valLogM');


const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const valEditProfM = require('../middlewares/valEditProfM');

//- LOGIN DE USUARIO
router.get('/login',guestMiddleware, userCtrl.showLogin)
router.post('/login',valLogM,userCtrl.login)

//- REGISTRO DE USUARIO
router.get('/register',guestMiddleware, userCtrl.showRegister)
router.post('/register',upload.single('img'),valRegM,userCtrl.register)

//- PERFIL DE USUARIO
router.get('/userProfile',authMiddleware ,userCtrl.profile)

//- LISTADO DE USUARIOS
router.get('/', authMiddleware,userCtrl.list)

// Search Users
router.post('/search', userCtrl.search)

// Delete Users
router.get('/delete/:id', userCtrl.delete);
router.post('/destroy/:id', userCtrl.destroy);

//- EDICION DEL PERFIL DE USUARIO
router.get('/userProfile/edit/:field', authMiddleware, userCtrl.profileEdit)
// dentro del MW preguntar por el req.params.field para saber QUE VALIDAR
router.put('/userProfile/edit/:field', authMiddleware, valEditProfM, /*upload.single('profilePic'),*/ userCtrl.profileEdited)

//Logout
router.get('/logout', userCtrl.logout)
// exports
module.exports = router