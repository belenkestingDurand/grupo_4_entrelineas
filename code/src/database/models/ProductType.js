module.exports = (sequelize, dataTypes) => {

    let alias = 'ProductType';
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
            tableName: 'productTypes',
            timestamps: false
    };
    const ProductType = sequelize.define(alias, cols, config);
    ProductType.associate = function (models) {
        ProductType.hasMany(models.Product, { 
            as: "products",
            foreignKey: 'id_productType',    
        })
    }

    return ProductType;

}