import sql from 'mssql';

const config = {
  server: 'localhost', // Nota la doble barra invertida \\
  database: 'lo-valledor',
  parseJSON: true,
  options: {
    instanceName: 'NachoBD',
    trustedConnection: true,   // Habilita Autenticación de Windows
    trustServerCertificate: true // Para desarrollo local
  }
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