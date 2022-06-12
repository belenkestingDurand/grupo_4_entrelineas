// LUGAR PARA FUTURAS BASES DE DATOS


const bcryptjs = require('bcryptjs')
const databaseJson = require('../data/databaseJson')

const databaseFilename = '../data/users.json';



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
        // leer el json
        const users = databaseJson.readJson(databaseFilename) 
        console.log(users)
        const idCalculated = databaseJson.lastElementId(users) + 1
        console.log(idCalculated);
        //si hay imagen
        let image = '';
        if (req.file) {
            //le saco la palabra public para que sea a partir
            image = req.file.filename;
            console.log(image)
        
        }

        //para mayor seguridad guardo el password de manera encriptada
        // spoiler alert bcryptjs
        const pass = bcryptjs.hashSync(req.body.confpass, 10)
        
        //guardo el nuevo usuario con la estructura
        users.push({ userId: idCalculated, firstName: req.body.name, lastName: req.body.lastname, email: req.body.email, password: pass, category: "user", profilePic: image })

        //reescribo el json
        databaseJson.writeJson(users, databaseFilename)

        //luego a donde redirijo?
        return res.redirect('/login')


    }
}

// exports
module.exports = userController