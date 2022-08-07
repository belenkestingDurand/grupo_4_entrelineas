const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Product = require("../database/models/Product");
const Author = require("../database/models/Author");
const Editorial = require("../database/models/Editorial");
const Genre= require("../database/models/Genre");
const ProductType= require("../database/models/ProductType");
//Aqui tienen una forma de llamar a cada uno de los modelos



  






// LUGAR PARA FUTURAS BASES DE DATOS
const about = {
    books: "Libros"
    }
const db = require('../database/models');
const sequelize = require('sequelize')
const fs = require("fs")


//variable con la ruta del archivo products.json
let productosFilePath = path.join(__dirname, '../data/products.json');

let datos = fs.readFileSync(productosFilePath, "utf-8")

// OBJECT WITH DETAILED HTML DIRECTIONS
const productsController =  {
    crearProducto: (req, res) => {
    return res.render('products/crearProducto')
    },

    listarProducto: (req, res) => {

        db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"] })
            .then((productos) => {

            res.render("products/listarProducto", { books: productos });
            });
        
    // let books = JSON.parse(datos)
    // res.render('products/listarProducto',{about: about, books: books})
     },

    editarProducto: (req,res) => {
    let books = JSON.parse(datos)
    let product = books.find(product => product.id == req.params.id)
    res.render('products/editarProducto', {product: product})
    },
    
    productoEditado:(req,res) => {
        let datos = fs.readFileSync(productosFilePath)
        let books = JSON.parse(datos)

        req.body.id = req.params.id;
        
        let booksUpdate = books.map((libro) => {
            if (libro.id == req.body.id) {
                let image = libro.picture;
                console.log(req.body.productImg)
                console.log('req.file ',req.file)
                if (req.file) {
                    image = req.file.filename;
                }
                db.Product.update({
                    name : req.body.name,
                    price : req.body.price,
                    picture : '/img/products/' + image, 
                    opinion : req.body.opinion,
                    // stock: req.body.stock,
                    size : req.body.size,
                    pages : req.body.pages,
                    more : req.body.more,
                    // _ProductsType SE ASIGNA AL PRODUCTO UN ID DE TIPO
                    id_productType: req.body.type
                },{
                    where: {id : req.body.id}
                })
                // TABLA Author PUEDE CAMBIAR SI NO EXISTE EL AUTOR
                db.Author.findOne({
                    where: {
                        fullName: req.body.author
                    }
                })  .then (resultado => {
                    // si NO encontro resultado = no existe el registro
                        if (!resultado == req.body.author){
                            // nuevo registro
                            db.Author.create({
                                fullName: req.body.author
                            })
                            // luego se lo vuelve a buscar para usar el id para 'id_author'
                            db.Author.findOne({
                                where: {
                                    fullName: req.body.author
                                }
                                }).then(nuevo => {
                                    db.Product.update({
                                        id_author: nuevo.id
                                    },{
                                        where: {id: req.body.id}
                                    })
                                })
                            }
                    })
                
                // TABLA Gender PUEDE CAMBIAR SI NO EXISTE EL GENERO 
                db.Genre.findOne({
                    where: {
                        name: req.body.genre
                    }
                })  .then (resultado => {
                        if (!resultado == req.body.genre){
                            db.Genre.create({
                                name: req.body.genre
                            })
                            db.Genre.findOne({
                                where: {
                                    name: req.body.genre
                                }
                                }).then(nuevo => {
                                    db.Product.update({
                                        id_genre: nuevo.id
                                    },{
                                        where: {id: req.body.id}
                                    })
                                })
                            }
                    })


                /*
                libro.name = req.body.name;
                libro.type = req.body.type,
                libro.author = req.body.author,
                libro.price = req.body.price,
                libro.gender = req.body.gender,
                libro.picture = '/img/products/'+image,
                libro.opinion = req.body.opinion,
                libro.size = req.body.size,
                libro.pages = req.body.pages,
                libro.more = req.body.more
                */
            }
            return libro;
        })

       
        // let booksActualizar = JSON.stringify(booksUpdate, null, 2);
        // fs.writeFileSync(productosFilePath,booksActualizar)
       
        // redireccionar a '/productos'
        return res.redirect('/products')
        },
    

    // /products proceso de creación por (POST)
    productoCreado: (req,res) =>{
        let datos = fs.readFileSync(productosFilePath)
        let books = JSON.parse(datos)

        let image = '';
        if (req.file) {
            //le saco la palabra public para que sea a partir
          image = req.file.filename;
        
        }
        console.log('req.file',req.file)

        let newProduct = {
            id: books[books.length -1].id + 1,
            name: req.body.productName,
            type: req.body.type,
            author: req.body.author,
            price: req.body.price,
            gender: req.body.gender,
            picture: "/img/products/"+image,
            opinion: req.body.opinion,
            size: req.body.size,
            pages: req.body.pages,
            more: req.body.more
        };
        console.log(newProduct)
        books.push(newProduct)

        let newbooks = JSON.stringify(books)
        fs.writeFileSync(productosFilePath, newbooks)
        
        return res.redirect('/products')
    },
    // delete: (req, res) => {
    //     // leer archivo
    //     let datos = fs.readFileSync(productosFilePath, "utf-8")
    //     let books = JSON.parse(datos)

    //     // ubicar el libro a borrar y hacer un array con el resto mediante filter
    //     let id = req.params.id;

    //     let booksToKeep = books.filter((book) => book.id !=id);
    //     //lo vuelvo a formato json
    //     let jsonBooksToKeep = JSON.stringify(booksToKeep, null, 2);
    //     // lo reescribo en el archivo
    //     fs.writeFileSync(productosFilePath, jsonBooksToKeep, "utf-8");
        
    //     //redirecciona a listado de libros
    //     return res.redirect('/products');
        // delete: async function (req, res) {
        //     let productoABorrar = await db.Product.findByPk(req.params.id);
        //     res.render("moviesDelete", { Movie });
        //   },
        
          delete: async function (req, res) {
             db.Product.destroy({
                where: {id: req.params.id}
            });
        
            // await db.Movie.destroy({
            //     where:{id:req.params.id,force:true}
            // })
        
            res.redirect("/products");
          }
        }
    



// exports
module.exports = productsController