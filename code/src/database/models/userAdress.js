
module.exports = (sequelize, dataTypes) => {

    let alias = 'UserAdress';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
        flor: { 
            type: dataTypes.INTEGER,
        },
        dto: { 
            type: dataTypes.STRING(100),
        }
    };
    let config = {
        tableName: "usersAdress",
        timestamps:false
    
    };
    
    const UserAdress = sequelize.define(alias, cols, config);
    UserAdress.associate = function(models) {
        UserAdress.belongsTo(models.User, {
            as: "Users", 
            foreignKey: "id_user"
        })
    }
    
    
    return UserAdress;
    }
