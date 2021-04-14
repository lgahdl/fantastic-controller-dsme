const Knex = require("knex");
const knexConfig = require("../config/database.js");

const knexObj = Knex(knexConfig);

const Device = require("./Device");

Device.knex(knexObj);

module.exports = {
  Device,
};
