const User = require('../modelo/User');
const db = require('../database/models')

function recordameMiddleware(req, res, next){
    if(req.body.recuerdame == "on"){
        res.cookie('recuerdame', req.body.email, {maxAge: 300000})
        }
  
    if(req.cookies.recuerdame != undefined && req.session.userLogged == undefined){

    //Leo los usuairos lo recorro con el array y encuentro el usuario.
    //Despues redireccionamos al usuario al inicio Sin que tenga que poner su usuario y contraseña.
    db.User.findOne({where: {email: req.cookies.recuerdame}})
    .then(function(existUser){  
        let userToLogin = existUser
        if(userToLogin){
        
                 req.session.userLogged = userToLogin
                 res.locals.isLogged = true;
                 res.locals.userLogged = req.session.userLogged;

                    }

            
            
        
    })
}
    next();  
    }
module.exports = recordameMiddleware