const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const fs = require("fs")
const about = {
    books: "Libros"
    }
const { validationResult} = require('express-validator');
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
        
        db.Product.findOne( {include: ["authors", "genres", "editorials" , "productsTypes"],
                            where: {id: req.params.id}})
        .then(function(prductToShow){
            db.Editorial.findAll().then(function(todasLasEditoriales){
                let allEditorials = todasLasEditoriales
                db.ProductType.findAll().then(todosLosProdTypes => {
                    let allProductsTypes = todosLosProdTypes
                    res.render('products/editarProducto', {product: prductToShow, allEditorials, allProductsTypes })
                })
            })
        })
    
    },
    
    productoEditado:(req,res) => {
        // - crear validador de epxress y retornar vista con errores en caso de que haya
        const resValidation = validationResult(req)
        if (resValidation.errors.length > 0) {
            // ! mandar todos los db.model.findAll() 
            // return res.redirect('products/editarProducto', {errors: resValidation.mapped()})
            db.Product.findOne({
                include: ["authors", "genres", "editorials", "productsTypes"],
                where: { id: req.params.id }
            })
                .then(function (prductToShow) {
                    db.Editorial.findAll().then(function (todasLasEditoriales) {
                        let allEditorials = todasLasEditoriales
                        db.ProductType.findAll().then(todosLosProdTypes => {
                            let allProductsTypes = todosLosProdTypes
                            res.render('products/editarProducto', { product: prductToShow, allEditorials, allProductsTypes, errors: resValidation.mapped() })
                        })
                    })
                })
        }

        db.Product.update({
            name : req.body.name,
            price : req.body.price,
            opinion : req.body.about,
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
        // - crear validador de epxress y retornar vista con errores en caso de que haya
        // res.render("products/crearProducto", { allGenres, allAuthors, allEditorials, allProductsTypes});
        // ! mandar todos los db.model.findAll() para de crear 
        const resValidation = validationResult(req)
        if (resValidation.errors.length > 0) {
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
                                return res.render('products/crearProducto',{
                                    errors: resValidation.mapped(),
                                    oldData: req.body,
                                    allGenres: allGenres,
                                    allAuthors: allAuthors,
                                    allEditorials: allEditorials,
                                    allProductsTypes: allProductsTypes
                                });
                            })
                        })
                    })
                })         
             }    
        else {  let image = '';
        if (req.file) {
            //le saco la palabra public para que sea a partir
          image = req.file.filename;
        
        }

        let newProduct = {
             name: req.body.productName,
            price: req.body.price,
            size: req.body.size,
            pages: req.body.pages,
            opinion: req.body.about,
            more: req.body.more,
            picture: "/img/products/"+image,
            stock: req.body.stock,
            id_author: req.body.author,
            id_genre: req.body.genre,
            id_productType: req.body.type,
            id_editorial: req.body.editorial
            
        };
       
        db.Product.create(newProduct)
            .then(function(product){
                return res.redirect('/products')
            })}
       
        
            
    },
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