
module.exports = (sequelize, dataTypes) => {

    let alias = 'UsersAdress';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        country: { 
            type: dataTypes.VARCHAR(100),
        },
        province: { 
            type: dataTypes.VARCHAR(100),
        },
        city: { 
            type: dataTypes.VARCHAR(100),
        },
        street: { 
            type: dataTypes.VARCHAR(50),
        },
        number: { 
            type: dataTypes.VARCHAR(100),
        },
        flor: { 
            type: dataTypes.INTEGER,
        },
        dto: { 
            type: dataTypes.VARCHAR(100),
        }
    };
    let config = {
        tableName: "userAdress"
    
    };
    
    const UserAdress = sequelize.define(alias, cols, config);

    UserAdress.belongsTo(Users, {as: "Adress", foreignKey: "id_user"})
    
    return UserAdress;
    }
