module.exports = (sequelize, dataTypes) => {

    let alias = 'Product';
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primariyKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(11,2).UNSIGNED,
        },
        size: {
            type: dataTypes.VARCHAR(29)
        },
        pages: {
            type: dataTypes.SMALLINT.UNSIGNED
        },
        opinion: {
            type: dataTypes.VARCHAR(500)
        },
        more: {
            type: dataTypes.TEXT
        },
        picture: {
            type: dataTypes.VARCHAR(200)
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
    Product.belongsTo(models.Author, { 
        as: "author",
        foreignKey: "id_author"
    })

    Product.belongsTo(models.Genre, { 
        as: "genre",
        foreignKey: "id_genre"
    })

    Product.belongsTo(models.ProductType, { 
        as: "productType",
        foreignKey: "id_productType"
    })

     Product.belongsTo(models.ProductType, { 
        as: "editorial",
        foreignKey: "id_editorial"
    })

    Product.belongsToMany(models.Orders, { 
        as: "orders",
        through: 'orderDetails',
        foreignKey: 'id_product',
        otherKey: 'id_order',
        timestamps: false
    })

    Product.belongsToMany(models.Carts, { 
        as: "carts",
        through: 'cartDetails',
        foreignKey: 'id_product',
        otherKey: 'id_order',
        timestamps: false
    })
    return Product;

}