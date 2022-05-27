// LUGAR PARA FUTURAS BASES DE DATOS


// OBJECT WITH DETAILED HTML DIRECTIONS
const userController =  {
    //'login.ejs' IN 'views/users' FOLDER
    login: (req, res) => {
        res.render('users/login')
    },
    //'register.ejs' IN 'views/users' FOLDER
    register: (req, res) => {
        res.render('users/register')
    },
}

// exports
module.exports = userController