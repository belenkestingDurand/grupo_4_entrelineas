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
        
       const resultValidation = validationResult(req);
        // si hay errores recargar la pag con datos cargados correctos
       if (resultValidation.errors.length > 0) {
           console.log(req.body);
            return res.render('users/register', {
                 errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let existUser = User.findByField('email', req.body.email);
        // chequeo que no se registre dos veces el mismo email
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
        // asigno los datos cargados por el usuario en register y validados
        // a variable userToCreate
        let userToCreate = {
			firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
			password: req.body.confpass,
            category: "user",
			profilePic: req.file.filename
		}
		
        // guardo el usuario nuevo en el archivo users.json
		let userCreated = User.create(userToCreate);
        console.log('usuario correctamente grabado en json', userCreated)
		return res.redirect('/login');
       
        //redirijo a logín para que usuario nuevo pueda acceder
        return res.redirect('/login')


    },
}

// exports
module.exports = userController