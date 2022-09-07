
module.exports = (sequelize, dataTypes) => {

    let alias = 'UsersAddress';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        country: { 
            type: dataTypes.STRING(100),
            allowNull: false
        },
        province: { 
            type: dataTypes.STRING(100),
            allowNull: false
        },
        city: { 
            type: dataTypes.STRING(100),
            allowNull: false
        },
        street: { 
            type: dataTypes.STRING(50),
            allowNull: false
        },
        number: { 
            type: dataTypes.STRING(100),
            allowNull: false
        },
        
        postalCode: {
           type: dataTypes.STRING(50),
        },
        infoExtra: {
            type: dataTypes.TEXT,
        },
    };
    let config = {
        tableName: "usersAddress",
        timestamps:false
    
    };
    
    const UsersAddress = sequelize.define(alias, cols, config);
    UsersAddress.associate = function(models) {
        UsersAddress.belongsTo(models.User, {
            as: "addresses", 
            foreignKey: "id_user"
        })
    }
    
    
    return UsersAddress;
    }
