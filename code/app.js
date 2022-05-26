const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//public
    // const public = path.join(__dirname, 'public/')
    const publicPath = path.resolve(__dirname,'./public');
    app.use(express.static(publicPath));
//views 
//html
const views = path.join(__dirname, 'views/')
    const home = path.join(__dirname, 'views/users/home.html')
    const carrito = path.join(__dirname, 'views/users/carritoDeCompras.html')
    const login = path.join(__dirname, 'views/users/login.html')
    const register = path.join(__dirname, 'views/users/register.html')
    const detalleDeProducto = path.join(__dirname, 'views/products/detalleDeProducto.html')
    const crearProducto = path.join(__dirname, 'views/products/crearProducto.html')

//http
    const htpptRaiz = '/'
    const htpptHome = '/home'
    const htpptCarrito = '/carrito'
    const htpptLogin = '/login'
    const httpDetalleDeProducto = '/detalle'
    const htpptRegister = '/register'
    const httptCrearProducto = '/crearProducto'



//Definir las rutas
app.listen(port, () => console.log('Example app listening at http://localhost:'+port))

app.get(htpptRaiz, function(req, res){
    res.sendFile(home)
})
app.get(htpptHome, function(req, res){
    res.sendFile(home)
})

app.get(htpptCarrito, function(req, res){
    res.sendFile(carrito)
})

app.get(htpptLogin, function(req, res){
    res.sendFile(login)
})

app.get(htpptRegister, function(req, res){
    res.sendFile(register)

})
app.get(httpDetalleDeProducto, function(req, res){
    res.sendFile(detalleDeProducto)
})
app.get(httptCrearProducto, function(req, res){
    res.sendFile(crearProducto)
})

app.post(htpptLogin, (req, res) => {
    res.sendFile(path.join(home))
})

app.post(htpptRegister, (req, res) => {
    res.sendFile(path.join(login))
})