'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

let sequelize;

sequelize = new Sequelize(config.database, config.username, config.password, config);


//model
db.User= require('./User')(sequelize,Sequelize)
//축약
// const a =require('./Visitor')
// const b = a(sequelize,Sequelize)
// db.Visitor =b


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
