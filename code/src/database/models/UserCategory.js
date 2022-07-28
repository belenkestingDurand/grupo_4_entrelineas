
module.exports = (sequelize, dataTypes) => {

    let alias = 'UserCategory';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name: { 
            type: dataTypes.STRING(100),
        }
    };
    let config = {
        tableName: "userCategory"
    
    };
    
    const UserCategory = sequelize.define(alias, cols, config);
    UserCategory.associate = function(models) {  
        UserCategory.hasMany(models.User, {
            as: "users", 
            foreignKey: "id_userCategory"
        })
    
    
    }
    return UserCategory;
}
