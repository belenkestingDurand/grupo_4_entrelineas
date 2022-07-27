
module.exports = (sequelize, dataTypes) => {

    let alias = 'Users';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        firstName: { 
            type: dataTypes.VARCHAR(100),
        },
        lastName: { 
            type: dataTypes.VARCHAR(100),
        },
        email: { 
            type: dataTypes.VARCHAR(100),
        },
        password: { 
            type: dataTypes.VARCHAR(50),
        },
        profilePic: { 
            type: dataTypes.VARCHAR(100),
        }
    };
    let config = {
        tableName: "users"
    
    };
    
    const Users = sequelize.define(alias, cols, config);

    Users.hasMany(userAdress, {as: "Adress", foreignKey: "id_user"})
    Users.belongsTo(userCategory, {as: "UserCategory", foreignKey: "id_userCategory"})
    
    return UserAdress;
    }

    