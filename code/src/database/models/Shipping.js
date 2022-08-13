module.exports = (sequelize, dataTypes) => {
    let alias = 'Shippings'
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        id_order:{
            type: dataTypes.INTEGER
        },
        status: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        createdAt: {
            type:dataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type:dataTypes.DATE
        }
    }
    let config = {
        tableName: 'shippings',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'

    }
    const Shipping = sequelize.define(alias,cols,config)

    // FOREIGN KEY (id_order) REFERENCES orders(id)
   Shipping.associate = function(models) {
        Shipping.belongsTo(models.Order, {
            as: 'orders',
            foreignKey: 'id_order'
        })
    }
    return Shipping
}