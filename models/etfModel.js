module.exports = (sequelize, DataTypes) => {
    const Etf = sequelize.define('etf', {
        id: {// primary key id
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        index: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currency: {
            type:  DataTypes.STRING,
            allowNull:false
        }, 
        exchange: {
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