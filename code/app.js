const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//views 
const views = path.join(__dirname, 'views/')
//public
const public = path.join(__dirname, 'public/')
const home = path.join(__dirname, 'views/home.html')
const carrito = path.join(__dirname, 'views/carritoDeCompras.html')
const login = path.join(__dirname, 'views/login.html')
const register = path.join(__dirname, 'views/register.html')

//html
const homehtml = 'home.html'
const detalleDeProducto = path.join(__dirname, 'views/detalleDeProducto.html')
//http
const htpptRaiz = '/'
const htpptHome = '/home'
const htpptCarrito = '/carrito'
const htpptLogin = '/login'
const httpDetalleDeProducto = '/detalle'
const htpptRegister = '/Register'



const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

//Definir los camions
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

app.post(htpptLogin, (req, res) => {
    res.sendFile(path.join(home))
})