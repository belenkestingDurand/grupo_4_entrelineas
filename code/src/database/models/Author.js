module.exports = (sequelize, dataTypes) => {

    let alias = 'Author';
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        fullName: {
            type: dataTypes.STRING(60),
            allowNull: false
        }
    };
    let config = {
            tableName: 'authors',
            timestamps: false
    };
    const Author = sequelize.define(alias, cols, config);
    Author.associate = function(models) {
        Author.hasMany(models.Product, { 
            as: "products",
            foreignKey: 'id_author',    
        })
    }

    return Author;

}

