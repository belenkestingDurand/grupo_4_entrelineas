const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//views 
const views = path.join(__dirname, 'views/')
//public
const public = path.join(__dirname, 'public/')
const home_html = path.join(__dirname, 'views/home.html')
const carrito = path.join(__dirname, 'views/carritoDeCompras.html')
const login = path.join(__dirname, 'views/login.html')
const detalleDeProducto = path.join(__dirname, 'views/detalleDeProducto.html')
//http
const htpptRaiz = '/'
const htpptCarrito = '/carrito'
const htpptLogin = '/login'
const httpDetalleDeProducto = '/Detalle'



const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

//Definir los camions
app.listen(port, () => console.log('Example app listening at http://localhost:'+port))

app.get(htpptRaiz, function(req, res){
    res.sendFile(home_html)
})

app.get(htpptCarrito, function(req, res){
    res.sendFile(carrito)
})

app.get(htpptLogin, function(req, res){
    res.sendFile(login)
})

app.get(httpDetalleDeProducto, function(req, res){
    res.sendFile(detalleDeProducto)
})