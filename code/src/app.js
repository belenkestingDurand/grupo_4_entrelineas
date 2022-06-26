const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;
const path = require('path');

// middleware de session
app.use(session({ 
    secret: 'Secreto',
    resave: false,
    saveUninitialized: false,
}));

//public
    const publicPath = path.resolve(__dirname,'../public');
    app.use(express.static(publicPath));

//http
//* dispuestas en routes/home.js
    //  '/' '/home' '/detalle' '/carrito'
    
//* dispuestas en routes/user.js
    // '/login' '/register' '/userProfile'

//* dispuestos en routes/admin.js
    // '/crearProducto'



//Definir las rutas
app.listen(process.env.PORT || port, () => console.log('Example app listening at http://localhost:'+port))

// EJS incorporado + direccion de carpeta viewws
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

// para implementar metodo HTTP: Post
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// para implementar metodos HTTP: Put & Delete
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//- ROUTES FOLDER
const routesMain = require('./routes/home')
const routesProducts = require('./routes/products')
const routesUsers = require('./routes/users')

app.use('/', routesMain)
app.use('/products', routesProducts)
app.use('/users', routesUsers)