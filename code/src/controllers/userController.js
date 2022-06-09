// LUGAR PARA FUTURAS BASES DE DATOS


// OBJECT WITH DETAILED HTML DIRECTIONS
const userController =  {
    //'login.ejs' IN 'views/users' FOLDER
    showLogin: (req, res) => {
        return res.render('users/login')
    },
    login: (req, res) => {
        //validar login
        return res.redirect('/');
    },
    
    //'register.ejs' IN 'views/users' FOLDER
    register: (req, res) => {
        res.render('users/register')
    },
}

// exports
module.exports = userController