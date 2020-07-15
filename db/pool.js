import { Pool } from 'pg';
//import dotenv from 'dotenv';

// dotenv.config();
const databaseConfig = { connectionString: 'postgresql://postgres:123@localhost:5432/transportApi' };
const pool = new Pool(databaseConfig);

export default pool;
