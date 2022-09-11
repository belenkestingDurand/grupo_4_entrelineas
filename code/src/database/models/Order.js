module.exports = (sequelize, dataTypes) => {
    let alias = 'Order'
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true
        },
        total:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_user:{
            type: dataTypes.INTEGER,
        },
        id_payment: {
            type: dataTypes.INTEGER,
        },
        createdAt:{
            type: dataTypes.DATE,
            allowNull:false
        }
    }
    let config = {
        tableName: 'orders',
        timestamps: false
    }

    const Order = sequelize.define(alias,cols,config)

    // Asociaciones
    /*
    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            as: 'users',
            foreignKey:'id_user'
        })
        Order.hasMany(models.OrderDetail, {
            as: 'ordersdetails',
            foreignKey:'id_order'
        })   
    }
    */
    return Order
}