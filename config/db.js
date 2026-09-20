import sql from 'mssql/msnodesqlv8.js';

const config = {
  connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=(localdb)\\NachoBD;Database=lo-valledor;Trusted_Connection=yes;'
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