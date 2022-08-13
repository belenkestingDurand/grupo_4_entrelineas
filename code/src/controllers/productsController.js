const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Product = require("../database/models/Product");
const Author = require("../database/models/Author");
const Editorial = require("../database/models/Editorial");
const Genre= require("../database/models/Genre");
const ProductType= require("../database/models/ProductType");
const fs = require("fs")
const about = {
    books: "Libros"
    }
//variable con la ruta del archivo products.json
//let productosFilePath = path.join(__dirname, '../data/products.json');

//let datos = fs.readFileSync(productosFilePath, "utf-8")

// OBJECT WITH DETAILED HTML DIRECTIONS
const productsController =  {
       listarProducto: (req, res) => {

        db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"] })
            .then((productos) => {

            res.render("products/listarProducto", { books: productos });
            });
        
    
     },

    editarProducto: (req,res) => {
    db.Product.findOne( {include: ["authors", "genres", "editorials", "productsTypes"],
                        where: {id: req.params.id}})
    .then(function(prductToShow){
        res.render('products/editarProducto', {product: prductToShow})
    })
    
    },
    
    productoEditado:(req,res) => {
        console.log(req.params.id);

        db.Product.update({
            name : req.body.name,
            price : req.body.price,
            opinion : req.body.opinion,
            stock: req.body.stock,
            size : req.body.size,
            pages : req.body.pages,
            more : req.body.more,
            // _ProductsType SE ASIGNA AL PRODUCTO UN ID DE TIPO
            id_productType: req.body.type
        },{
            where: {id : req.params.id}
        })
        if (req.file) {
            image = req.file.filename;
            db.Product.update({
                picture : '/img/products/' + image, 
            },{
                where: {id : req.params.id}
            })
            
        }
        // ! AGREGAR DB.EDITORIAL
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
                                where: {id: req.params.id}
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
                                where: {id: req.params.id}
                            })
                        })
                    }
            })

        // redireccionar a '/productos'
        return res.redirect('/products')
        },
// products creación po get
    crearProducto: (req, res) => {
         db.Genre.findAll()
            .then(function(todosLosGeneros){
                let allGenres = todosLosGeneros
                db.Author.findAll()
                    .then(function(todosLosAutores){
                        let allAuthors = todosLosAutores
                        db.Editorial.findAll()
                        .then(function(todasLasEditoriales){
                            let allEditorials = todasLasEditoriales
                            db.ProductType.findAll()
                            .then(function(todosLosProductTypes){
                                let allProductsTypes = todosLosProductTypes
                                res.render("products/crearProducto", { allGenres, allAuthors, allEditorials, allProductsTypes});
                            })
                        })
                    })
            });
       
            },
        

    // /products proceso de creación por (POST)
    productoCreado: (req,res) =>{
        // let datos = fs.readFileSync(productosFilePath)
        // let books = JSON.parse(datos)

        let image = '';
        if (req.file) {
            //le saco la palabra public para que sea a partir
          image = req.file.filename;
        
        }

        let newProduct = {
 
            name: req.body.productName,
            price: req.body.price,
            size: req.body.size,
            pages: req.body.pages,
            opinion: req.body.opinion,
            more: req.body.more,
            picture: "/img/products/"+image,
            stock: req.body.stock,
            id_author: req.body.author,
            id_genre: req.body.genre,
            id_productType: req.body.id_productType,
            id_editorial: req.body.id_editorial
            
        };
        console.log(newProduct);
 //       books.push(newProduct)
        // let newbooks = JSON.stringify(books)
        // fs.writeFileSync(productosFilePath, newbooks)
        db.Product.create(newProduct)
            .then(function(creada){
                res.redirect('/products')
            })
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
          },

          search: function(req, res){
            //db.Movie.findOne({where: {title: {[Op.like]:'%'+req.body.titulo+'%'} }})
            db.Product.findAll({ include: ["authors", "genres", "editorials", "productsTypes"],
                                 where: {name: {[Op.like]:'%'+req.body.search+'%'} }})
            .then((productos) => {

            res.render("products/listarProducto", { books: productos });
            });
          }
        }
    



// exports
module.exports = productsController