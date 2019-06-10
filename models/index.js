"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

// let sequelize;
if (config.use_env_variable) {
  var sequelize = new Sequelize(
  { username: 'e9knfmd2k4ba4gen',
    password: 'naanz5czxnhagq96',
    host: 's54ham9zz83czkff.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    dialect: 'mysql',
  }, {
    timestamps: false
  });
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
      timestamps: false
    }
  );
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;