
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
       
        
        //si hay imagen
        let image = '';
        if (req.file) {
            //le saco la palabra public para que sea a partir
            image = req.file.filename;
        
        
        }
        let userToCreate = {
			firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
			password: req.body.confpass,
            category: "user",
			profilePic: req.file.filename
		}
		

		let userCreated = User.create(userToCreate);
		return res.redirect('/login');
       
        //luego a donde redirijo?
        return res.redirect('/login')


    }
}

// exports
module.exports = userController