module.exports = (sequelize, DataTypes) => {
    const Etf = sequelize.define('etf', {
        id: {// primary key id
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticker: {
            type: DataTypes.STRING,
            allowNull: false
        },
        asset: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull:false
        }, 
        portfolio: {
            type:  DataTypes.STRING,
            allowNull:false
        }, 
        expenseRatio: {
            type: DataTypes.DECIMAL(4,2),
            allowNull:false
        },
        inceptionDate: {
            type: DataTypes.STRING,
            allowNull:false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Etf
}