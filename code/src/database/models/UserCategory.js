
module.exports = (sequelize, dataTypes) => {

    let alias = 'UserCategory';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name: { 
            type: dataTypes.VARCHAR(100),
        }
    };
    let config = {
        tableName: "userCategory"
    
    };
    
    const UserCategory = sequelize.define(alias, cols, config);

    UserCategory.hasMany(Users, {as: "users", foreignKey: "id_userCategory"})
    
    return UserCategory;
    }

