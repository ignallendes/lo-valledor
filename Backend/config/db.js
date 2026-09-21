import sql from 'mssql/msnodesqlv8.js';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = `Driver={${process.env.DB_DRIVER}};Server=${process.env.DB_SERVER};Database=${process.env.DB_DATABASE};Trusted_Connection=yes;`;

const config = {
  connectionString
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.error('🔴 Error al conectar a SQL Server:', error.message);
    throw error;
  }
};

export { sql };