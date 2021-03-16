const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize({
  host: 'us-cdbr-east-03.cleardb.com',
  user: DB_USER,
  password: DB_PW,
  name: DB_NAME,
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;