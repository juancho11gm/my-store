const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setUpModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Sequelize uses Pool connection under the hood
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  //dialect: 'mysql',
  logging: true,
});

setUpModels(sequelize);

module.exports = sequelize;
