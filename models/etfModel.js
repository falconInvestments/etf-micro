module.exports = (sequelize, DataTypes) => {
    const Etf = sequelize.define('etf', {
        id: {// primary key id
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        ticker: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        asset: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull:false
        }, 
        portfolio: {
            type:  DataTypes.STRING,
            allowNull:false
        }, 
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Etf
}