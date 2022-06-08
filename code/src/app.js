const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//public
    const publicPath = path.resolve(__dirname,'../public');
    app.use(express.static(publicPath));

//http
//* dispuestas en routes/home.js
    //  '/' '/home' '/detalle' '/carrito'
    
//* dispuestas en routes/user.js
    // '/login' '/register'

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
app.use('/', routesMain)
const routesUsers = require('./routes/user')
app.use('/', routesUsers)