const { validationResult} = require('express-validator');
const User = require('../models/User');


// OBJECT WITH DETAILED HTML DIRECTIONS


const userController =  {
    //'login.ejs' IN 'views/users' FOLDER
    showLogin: (req, res) => {
        return res.render('users/login')
    },
    login: (req, res) => {
        //validar login

        
        

        return res.redirect('/products');
    },
    
    //'register.ejs' IN 'views/users' FOLDER
    showRegister: (req, res) => {
        res.render('users/register')
    },
    register: (req, res) =>{
        // validaciones de datos
        console.log("entre por register");
       const resultValidation = validationResult(req);
    
       if (resultValidation.errors.length > 0) {
            console.log('resultValidation', resultValidation);
            return res.render('users/register', {
                 errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let existUser = User.findByField('email', req.body.email);
        if (existUser) {
            console.log('el usuario ya existia');
            return res.render('users/register', {
                errors:{
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });

        }
        
        //si hay imagen
        let image = '';
        if (req.file) {
            //le saco la palabra public para que sea a partir
            image = req.file.filename;
        
        
        }
        console.log('req.body',req.body);
        console.log('req.file',req.file);
        let userToCreate = {
			firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
			password: req.body.confpass,
            category: "user",
			profilePic: req.file.filename
		}
		
        console.log('userToCreate');
		let userCreated = User.create(userToCreate);
        console.log('userCreated', userCreated)
		return res.redirect('/login');
       
        //luego a donde redirijo?
        return res.redirect('/login')


    },
}

// exports
module.exports = userController