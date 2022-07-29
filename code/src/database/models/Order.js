module.exports = (sequelize, dataTypes) => {
    let alias = 'Order'
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSGINED,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true
        },
        total:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_user:{
            type: dataTypes.INTEGER.UNSGINED,
        },
        id_payment: {
            type: dataTypes.INTEGER.UNSGINED,
        },
        created_at:{
            type: dataTypes.DATE,
            allowNull:false
        }
    }
    let config = {
        tableName: 'orders',
        timestamps: true
    }

    const Order = sequelize.define(alias,cols,config)

    // Asociaciones
    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            as: 'users',
            foreignKey:'id_user'
        })
        Order.belongsTo(models.OrderDetail, {
            as: 'ordersdetails',
            foreignKey:'id_order'
        })
        
    }
    return Order
}