let connection = {
  user: process.env.DB_USER ? process.env.DB_USER : 'root',
  password: process.env.DB_PASS ? process.env.DB_PASS : '6t9k3oir@',
  database: process.env.DB_SCHEMA ? process.env.DB_SCHEMA : 'servidor_dsme',
  timezone: 'UTC'
};

if(process.env.DB_SOCKET) {
  connection.socketPath = process.env.DB_SOCKET;
} else {
  connection.host = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
  connection.port = process.env.DB_PORT ? process.env.DB_PORT : '3306';
}

const objectDb = {
  client: 'mysql',
  connection: connection,
  pool: { min: 0, max: 10 }
};

module.exports = objectDb;