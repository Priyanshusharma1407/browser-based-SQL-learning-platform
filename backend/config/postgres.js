const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 5000, // ADD THIS
  idleTimeoutMillis: 10000, // ADD THIS
});


pool.on("connect", () => {
  console.log("PostgreSQL Connected");
});

pool.on("error", (err) => {
  console.error("Unexpected PG Error:", err);
});


module.exports = pool;
