const { validationResult} = require('express-validator');
const User = require('../modelo/User');
const bcrypt = require('bcryptjs');
const db = require('../database/models');


// OBJECT WITH DETAILED HTML DIRECTIONS


const userController =  {
    //'login.ejs' IN 'views/users' FOLDER
    showLogin: (req, res) => {
 //       db.Users.findAll
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
        db.User.findOne({where: {email: req.body.email}})
        .then(function(userToLogin){
            if(userToLogin) {
                //acciones a seguir si si lo encontro al mail en la base
                if (bcrypt.compareSync(req.body.password, userToLogin.password)){
                    delete userToLogin.password
                    req.session.userLogged = userToLogin
    
                    return res.redirect('/users/userProfile');
                }
                return res.render('users/login',{
                    errors: {
                        email: {
                            msg: 'Credenciales inválidas'
                        }
                    }
                })
    
            };
            return res.render('users/login',{
                errors: {
                    email: {
                        msg: 'Email no registrado, crear cuenta'
                    }
                }
            })
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

            return res.render('users/register', {
                 errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        db.User.findOne({where: {email: req.body.email}})
        .then(function(existUser){
            // chequeo que no se registre dos veces el mismo email
                if (existUser) {
 
                    return res.render('users/register', {
                        errors:{
                            email: {
                                msg: 'Este email ya está registrado'
                            }
                        },
                        oldData: req.body
                    })
                }
                else{
                    // asigno los datos cargados por el usuario en register y validados
                // a variable userToCreate
                let userToCreate = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.confpass,10),
                    profilePic: req.file.filename
                }
                
                // guardo el usuario nuevo en el archivo users.json
                db.User.create(userToCreate)
                .then(function(resp){
                    //redirijo a logín para que usuario nuevo pueda acceder
                    return res.render('users/login')
                })
                }
    }) 

    },
    profile: (req, res) => {
		return res.render('users/userProfile', {
            user: req.session.userLogged
        });
	},
    profileEdit: (req,res) => {
        return res.render('users/editProfile', {user: req.session.userLogged})
    },
    profileEdited: (req,res) => {
        let errors = validationResult(req);
      
        // 1er intento de devolver en caso de errores
        
        let userToEdit = User.findByPk(req.params.id);
        
        let userChanges = {
            firstName: req.body.userFirstName,
            lastName: req.body.userLastName,
            oldEmail: req.body.userEmail, 
            newEmail: req.body.userNewEmail, 
            oldPassword: bcrypt.hashSync(req.body.userPassword,10),
            newpassword: bcrypt.hashSync(req.body.userNewPassword,10),
        }
  
       
    
        // if (req.file.profilePic){
        //     userChanges["profilePic"] = req.file.profilePic
        // }

        // SI el mail ya existente coincide con la casilla de 'Email actual' =>
        if (userChanges.oldEmail == userToEdit.email){
            userToEdit.email = userChanges.newEmail
        } else {
            // SI los mails no coinciden =>

            return res.render('users/editProfile', {
                errors:{
                    userEmail: {
                        msg: 'Campo completado incorrectamente. '
                    }
                },
                user: req.session.userLogged
            })
        }
        
        // SI la contraseña ya existente coincide con la casilla de 'Contraseña actual' =>
        if (userChanges.oldPassword != "" && bcrypt.compareSync(userChanges.oldPassword, userToEdit.password)){
            userToEdit.password = userChanges.newpassword
        } else {
 
            // SI las contraseñas no coinciden =>
            return res.render('users/editProfile', {
                errors:{
                    userPassword: {
                        msg: 'Campo completado incorrectamente. '
                    }
                },
                user: req.session.userLogged
            })
        }
        
        // se agregan Nombre, Apellido e Imagen sin chistar
        userToEdit.firstName = userChanges.firstName
        userToEdit.lastName = userChanges.lastName
        // userToEdit.profilePic = userChanges.profilePic

        if (errors.errors.length > 0) {
            return res.render('users/editProfile', {errors: errors.mapped(), user: req.session.userLogged})
        }
        // Luego de todo, si las VALIDACIONES dieron BIEN, RENDERIZA Y REDIRECCIONA
        return res.render('users/userProfile', {
            user: req.session.userLogged
        });
    },
    logout: (req, res) => {
            req.session.destroy();
            return res.redirect('/'); 
    }
}

// exports
module.exports = userController