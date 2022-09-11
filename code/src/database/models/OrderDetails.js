module.exports = (sequelize, dataTypes) => {
    let alias = 'OrderDetails';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true
        },
        id_product:{
            type: dataTypes.INTEGER
        },
        item:{
            type: dataTypes.STRING(200),
            allowNull:false
        },
        description:{
            type: dataTypes.TEXT
        },
        price:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        id_order:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'orderDetails',
        timestamps: false
    }

    const OrderDetails = sequelize.define(alias,cols,config)

    // Asociaciones
    OrderDetails.associate = (models) => {
        
        OrderDetails.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'id_product'
        })

        OrderDetails.belongsTo(models.Order, {
            as:'orders',
            foreignKey:'id_order'
        })

    }
    return OrderDetails
}