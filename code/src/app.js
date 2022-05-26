const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//public
    const publicPath = path.resolve(__dirname,'../public');
    app.use(express.static(publicPath));

//views 
    const views = path.join(__dirname, 'views/')

    const home = path.join(__dirname, 'views/products/home')
    // const carrito = path.join(__dirname, 'views/produts/carritoDeCompras')
    // const detalleDeProducto = path.join(__dirname, 'views/products/detalleDeProducto')
    const crearProducto = path.join(__dirname, 'views/products/crearProducto')
    const login = path.join(__dirname, 'views/users/login')
    const register = path.join(__dirname, 'views/users/register')

//http
//* dispuestas en routes/home.js
    // const htpptRaiz = '/'
    // const htpptHome = '/home'
    // const httpDetalleDeProducto = '/detalle'
    // const htpptCarrito = '/carrito'
    
//* dispuestas en routes/user.js
    // const htpptLogin = '/login'
    // const htpptRegister = '/register'

// ! AUN NO ARME ESA RUTA
//* dispuestos en routes/admin.js
    const httptCrearProducto = '/crearProducto'



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


    // app.get(htpptRaiz, function(req, res){
    //     res.sendFile(home)
    // })
    // app.get(htpptHome, function(req, res){
    //     res.sendFile(home)
    // })
    // app.get(htpptCarrito, function(req, res){
    //     res.sendFile(carrito)
    // })
    // app.get(httpDetalleDeProducto, function(req, res){
    //     res.sendFile(detalleDeProducto)
    // })


    // app.get(htpptLogin, function(req, res){
    //     res.sendFile(login)
    // })
    // app.post(htpptLogin, (req, res) => {
    //     res.sendFile(path.join(home))
    // })

    // app.get(htpptRegister, function(req, res){
    //     res.sendFile(register)

    // })
    // app.post(htpptRegister, (req, res) => {
    //     res.sendFile(path.join(login))
    // })


app.get(httptCrearProducto, function(req, res){
    res.sendFile(crearProducto)
})