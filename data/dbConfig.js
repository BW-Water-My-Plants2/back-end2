// const knex = require("knex");
// const knexfile = require("../knexfile.js");

// const dbEnv = process.env.DB_ENV || "development"

// module.exports = knex(knexConfig[dbEnv]);

const knex = require('knex');

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);
