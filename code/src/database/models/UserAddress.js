
module.exports = (sequelize, dataTypes) => {

    let alias = 'UserAddress';
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
        },
        province: { 
            type: dataTypes.STRING(100),
        },
        city: { 
            type: dataTypes.STRING(100),
        },
        street: { 
            type: dataTypes.STRING(50),
        },
        number: { 
            type: dataTypes.STRING(100),
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
    
    const UserAddress = sequelize.define(alias, cols, config);
    UserAddress.associate = function(models) {
        UserAddress.belongsTo(models.User, {
            as: "Users", 
            foreignKey: "id_user"
        })
    }
    
    
    return UserAddress;
    }
