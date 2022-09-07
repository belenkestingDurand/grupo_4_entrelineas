const { validationResult} = require('express-validator');

const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { response } = require('express');

// OBJECT WITH DETAILED HTML DIRECTIONS
let isLogged = false

const userController =  {
    //   'listadoUsers.ejs'   in 'views/users' FOLDER
    list:  (req, res) => {
       
            db.User.findAll({
              order : [
                ["lastName", "ASC"]
              ]
            })
              .then(function(usuarios) {
                res.render('users/listadoUsers', {usuarios})
              })
    },  

    search: function(req, res){
    
            db.User.findAll({
                    where: {lastName: {[Op.like]:'%'+req.body.search+'%'} }})
            .then((usuarios) => {
        
            res.render("users/listadoUsers", { usuarios: usuarios });
            });
    },      

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
                    let logginSinPassword = {
                        id: userToLogin.id,
                        firstName: userToLogin.firstName,
                        lastName: userToLogin.lastName,
                        email:userToLogin.email,
                        profilePic: userToLogin.profilePic,
                        id_userCategory: userToLogin.id_userCategory
                    };
                    // delete userToLogin.password
                    req.session.userLogged = logginSinPassword
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
        else { db.User.findOne({where: {email: req.body.email}})
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
                
                    if (req.body.filename === undefined) {
                        userToCreate = {
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.confpass,10),
                            profilePic: "",
                            id_userCategory: 1
                        }
                    } else {
                        userToCreate = {
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.confpass,10),
                            profilePic: req.file.filename,
                            id_userCategory: 1
                            }
                        }
                }   
                // guardo el usuario nuevo en el archivo users.json
                db.User.create(userToCreate)
                .then(function(resp){
                    //redirijo a logín para que usuario nuevo pueda acceder
                    return res.render('users/login')
                })
                }
    ) 
}
        
    },
    profile: (req, res) => {
        return res.render('users/userProfile', {
            user: req.session.userLogged
        });
	},
    profileEdit: (req,res) => {
        // recibir el parametro para saber que debe renderizar el EJS
        let user = req.session.userLogged
        if(req.params.field != 'address'){
            db.User.findOne({
                where: {id: user.id}
            })
                .then( () => {
                    return res.render('users/editProfile', {
                        user: req.session.userLogged,
                        field: req.params.field //este campo indicara que formulario se mostrara
                })
            })
        } else {
            db.UsersAddress.findOne({
                where: {id_user: user.id}
            })
                .then(existAddress => {
                    if (existAddress){
                        db.User.findOne({ 
                            include: ["addresses"],
                            where: {id: user.id}
                        })
                            .then( () => {
                                return res.render('users/editProfile', {
                                    user: req.session.userLogged,
                                    field: req.params.field //este campo indicara que formulario se mostrara
                            })
                        })
                    } else {
                        db.UsersAddress.create({
                            id_user: user.id,
                            country: '---',
                            province: '---',
                            city: '---',
                            street: '---',
                            number: '000',
                        })
                            .then( () => {
                                db.User.findOne({ 
                                    include: ["addresses"],
                                    where: {id: user.id}
                                })
                                    .then( () => {
                                        return res.render('users/editProfile', {
                                            user: req.session.userLogged,
                                            field: req.params.field //este campo indicara que formulario se mostrara
                                    })
                                })
                            })
                    }
                })   
        }        
    },
    profileEdited: async (req,res) => {
        
        let errors = validationResult(req);
        if (errors.errors.length > 0) {
            return res.render('users/editProfile', {errors: errors.mapped(), user: req.session.userLogged})
        }
        //* Con este 'await' conseguimos el id que nos sirve hacer sincronico la busqueda del usuario
        let user = await db.User.findByPk(req.session.userLogged.id)
        
        if (req.params.field == 'name'){
            //- update de NAME
            let nameUpdated = await user.update ({
                firstName: req.body.userFirstName,
                lastName: req.body.userLastName
            })
            return res.render('users/userProfile', {
                             user: nameUpdated
                         })
        } else if (req.params.field == 'address') {
            //- update de ADDRESS
            let userAddress = await db.UsersAddress.findOne({where: {id_user: user}})
            let addressUpdated = await userAddress.update({
                country: req.body.country,
                province: req.body.province,
                city: req.body.city,
                street: req.body.street,
                number: req.body.number,
                postalCode: req.body.postalCode,
                infoExtra: req.body.infoExtra
            })
            let userUpdated = await db.User.findByPk(user)
            return res.render('users/userProfile', {
                            user: userUpdated
                        })
        } else if (req.params.field == 'email'){
            //- update de EMAIL
            if (req.body.userEmail == user.email){
                let emailUpdated = await user.update({
                    email: req.body.userNewEmail
                })
                //ALL OK
                return res.render('users/userProfile', {
                                user: emailUpdated
                            })
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
        } else if (req.params.field == 'password'){
            let user = req.session.userLogged 
            //- update de PASSWORD
            if (req.body.userPassword != "" && bcrypt.compareSync(req.body.userPassword, user.password)){
                //ALL OK
                let passwordUpdate = await user.update({
                    password: bcrypt.hashSync(req.body.userNewPassword,10)
                })
                return res.render('users/userProfile', {
                                user: passwordUpdate
                            })
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
        }
    },
    logout: (req, res) => {
            req.session.destroy();
            return res.redirect('/'); 
    },
    delete: function(req, res){
        let userId = req.params.id
        db.User.findByPk(userId)
          .then(User =>{
            return res.render('../views/users/usersDelete.ejs',{User})
          })
      },
      destroy: async function(req, res) {
        await db.User.destroy({
          where: {
            id : req.params.id
            }
        });
         res.redirect('/users');
      
        
      }
}

// exports
module.exports = userController