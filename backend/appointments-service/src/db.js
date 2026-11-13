
// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config(
// );

// const pool = mysql.createPool({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || '',
//     database: process.env.DB_NAME || 'hiwjai',
//     port: Number(process.env.DB_PORT) || 3307,
//     waitForConnections: true,
//     connectionLimit: 10
// });

// export default pool;

//
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// โหลด .env จาก appointments-service/.env
dotenv.config({
    path: path.resolve(__dirname, '../.env')
});

console.log('Database Configuration:');
console.log('Host:', process.env.DB_HOST);
console.log('Port:', process.env.DB_PORT);
console.log('User:', process.env.DB_USER);
console.log('Password loaded:', Boolean(process.env.DB_PASSWORD));
console.log('Database:', process.env.DB_NAME);

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'hiwjai',
    port: Number(process.env.DB_PORT) || 3307,
    waitForConnections: true,
    connectionLimit: 10
});

export default pool;
