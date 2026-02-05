
const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",

  port: 5432,
});