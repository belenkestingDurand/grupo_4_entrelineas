module.exports = (sequelize, dataTypes) => {

    let alias = 'Genre';
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(40),
            allowNull: false
        }
    };
    let config = {
            tableName: 'genres',
            timestamps: false
    };
    const Genre = sequelize.define(alias, cols, config);
    Genre.associate = function (models) {
        Genre.hasMany(models.Product, { 
            as: "products",
            foreignKey: 'id_genre',    
        })
    }

    return Genre;

}