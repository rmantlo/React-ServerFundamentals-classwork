const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: "localhost",
    dialect: 'postgres'
}) //this calls and connects to the specified database

//authenticate takes our values from above and checks them with the database
sequelize.authenticate()
    .then(() => { console.log('connected to pie-api database') })
    .catch(err => console.log(err))

module.exports = sequelize;