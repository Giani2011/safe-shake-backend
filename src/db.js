// src/db.js - Railway PostgreSQL version
import pkg from 'pg';
const { Pool } = pkg;

// Railway automatically provides DATABASE_URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Database error:', err.message);
    console.log('Tip: Add PostgreSQL database in Railway dashboard');
  } else {
    console.log('✅ PostgreSQL connected via Railway');
  }
});

export default pool;