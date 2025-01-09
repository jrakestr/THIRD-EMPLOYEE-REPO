// db/db.js (Fixed for ES Modules)
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const { Pool } = pg;

// Create the connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE
});

// ✅ Fix: Explicitly export the pool as default
export default pool;