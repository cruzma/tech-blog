const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'us-cdbr-east-03.cleardb.com',
  USER: 'b6595048b3f49e',
  password: 'cd2273b8',
  DB:'heroku_53c49ef461aff88'
});

module.exports = sequelize;