require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  posrt: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

module.exports = pool;
