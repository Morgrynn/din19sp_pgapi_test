const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const connection = new Pool({
  user: process.env.HEROKU_USER,
  host: process.env.HEROKU_HOST,
  database: process.env.HEROKU_DATABASE,
  password: process.env.HEROKU_PASS,
  port: process.env.DB_PORT,
});
module.exports = connection;
