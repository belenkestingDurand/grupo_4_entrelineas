const { validationResult} = require('express-validator');
const User = require('../models/User');


// OBJECT WITH DETAILED HTML DIRECTIONS


const userController =  {
    //'login.ejs' IN 'views/users' FOLDER
    showLogin: (req, res) => {
        return res.render('users/login')
    },

    login: (req, res) => {
        //validar login a traves de express-validator 
        const resValidation = validationResult(req);

        if (resValidation.errors.length > 0) {
            return res.render('users/login', {
                // resValidation.mapped() devuelve en vez de array, un obj literal
                errors: resValidation.mapped(),

            });
        }
        // busco el email en la base de datos
        let userToLogin = User.findByField('email', req.body.email);
         
        if(userToLogin) {
            //acciones a seguir si si lo encontro al mail en la base

            //verificar las contraseñas (modificar con bcrypt)
            if (req.body.password === userToLogin.password){
// por ahora va a listado de prod pero debe ir a userprofile 
// cuando esté hecha la vista
                delete userToLogin.password
                req.session.userLogged = userToLogin
            return res.redirect('userProfile');
            }
            return res.render('users/login',{
                errors: {
                    email: {
                        msg: 'Credenciales inválidas'
                    }
                }
            })
    

        }
        return res.render('users/login',{
            errors: {
                email: {
                    msg: 'Email no registrado, crear cuenta'
                }
            }
        })

    
    },
    
    //'register.ejs' IN 'views/users' FOLDER
    showRegister: (req, res) => {
        return res.render('users/register')
    },
    register: (req, res) =>{
        // validaciones de datos
        
       const resultValidation = validationResult(req);
        // si hay errores recargar la pag con datos cargados correctos
       if (resultValidation.errors.length > 0) {
           console.log(req.body);
            return res.render('register', {
                 errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let existUser = User.findByField('email', req.body.email);
        // chequeo que no se registre dos veces el mismo email
        if (existUser) {
            console.log('el usuario ya existia');
            return res.render('register', {
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
	
       
        //redirijo a logín para que usuario nuevo pueda acceder
        return res.redirect('users/login')


    },
    profile: (req, res) => {
		return res.render('users/userProfile', {
            user: req.session.userLogged
        });
	},
}

// exports
module.exports = userController