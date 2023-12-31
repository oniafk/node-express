const { config } = require('../config/config');
const { Pool } = require('pg');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//when you have a remote data base you will receive a URI like this:
//postgres://username:password@host:port/database

const pool = new Pool({
  connectionString: URI,
});

module.exports = pool;
