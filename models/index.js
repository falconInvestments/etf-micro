const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
    { // use imported configurations from dbConfig
        database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
    })



sequelize.authenticate()
    .then(() => { // successfully connected to DB
        console.log("connected to Postgres DB")
    })
    .catch(e => {// failed connecting to DB
        console.log('unable to connect to Postgres DB' + e)
    })


const db = {}
db.sequelize = sequelize;

db.Users = require('./userModel')(sequelize,DataTypes)
db.Etfs = require('./etfModel',)(sequelize,DataTypes)



db.sequelize.sync({ force: true }).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})

db.Etfs.belongsTo(db.Users)
db.Users.hasMany(db.Etfs)

module.exports = db