module.exports = (sequelize, dataTypes) => {

    let alias = 'Product';
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(11,2).UNSIGNED,
        },
        size: {
            type: dataTypes.STRING(29)
        },
        pages: {
            type: dataTypes.SMALLINT.UNSIGNED
        },
        opinion: {
            type: dataTypes.STRING(500)
        },
        more: {
            type: dataTypes.TEXT
        },
        picture: {
            type: dataTypes.STRING(200)
        },
        stock: {
            type: dataTypes.SMALLINT.UNSIGNED
        },
        id_author: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        id_genre: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        id_productType:  {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        id_editorial: {
            type: dataTypes.INTEGER.UNSIGNED
        }
    };

    let config = {
            tableName: 'editorials',
            timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models) {
        Product.belongsTo(models.Author, { 
            as: "authors",
            foreignKey: "id_author"
        })
    
        Product.belongsTo(models.Genre, { 
            as: "genres",
            foreignKey: "id_genre"
        })
    
        Product.belongsTo(models.ProductType, { 
            as: "productsTypes",
            foreignKey: "id_productType"
        })
    
         Product.belongsTo(models.ProductType, { 
            as: "editorials",
            foreignKey: "id_editorial"
        })
    
//        Product.belongsToMany(models.Orders, { 
//            as: "orders",
//            through: 'orderDetails',
//            foreignKey: 'id_product',
//            otherKey: 'id_order',
//            timestamps: false
 //       })
    
 //       Product.belongsToMany(models.Carts, { 
 //           as: "carts",
 //           through: 'cartDetails',
 //           foreignKey: 'id_product',
 //           otherKey: 'id_order',
 //           timestamps: false
 //       })

    }
    
    return Product;

}