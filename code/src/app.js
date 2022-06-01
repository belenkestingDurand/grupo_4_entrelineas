const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//public
    const publicPath = path.resolve(__dirname,'../public');
    app.use(express.static(publicPath));

//views 
    // const views = path.join(__dirname, 'views/')

//http
//* dispuestas en routes/home.js
    // const htpptRaiz = '/'
    // const htpptHome = '/home'
    // const httpDetalleDeProducto = '/detalle'
    // const htpptCarrito = '/carrito'
    
//* dispuestas en routes/user.js
    // const htpptLogin = '/login'
    // const htpptRegister = '/register'

//* dispuestos en routes/admin.js
 //   const httptCrearProducto = '/crearProducto'



//Definir las rutas
app.listen(process.env.PORT || port, () => console.log('Example app listening at http://localhost:'+port))

//! REACONDICINAR VISTAS hacia 'routes'

// EJS incorporado + direccion de carpeta viewws
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//- ROUTES FOLDER
const routesMain = require('./routes/home')
app.use('/', routesMain)
const routesUsers = require('./routes/user')
app.use('/', routesUsers)