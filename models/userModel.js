module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {// primary key id
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return User
}